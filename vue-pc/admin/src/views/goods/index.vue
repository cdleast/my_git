<template>
    <div class="goods">
        <!-- 条件查询 -->
        <el-form ref="searchForm" :inline="true" :model="query" size="mini">
            <el-form-item prop="name">
                <el-input v-model="query.name" placeholder="商品名称" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input v-model="query.code" placeholder="商品编号" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="supplierName">
                <el-input
                    readonly
                    @click.native="dialogSupplierVisible = true"
                    v-model="query.supplierName"
                    placeholder="选择供应商"
                    style="width: 200px"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-button @click="reloadData">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" stripe border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="商品名称"></el-table-column>
            <el-table-column align="center" prop="code" label="商品编码" width="90"></el-table-column>
            <el-table-column align="center" prop="spec" label="商品规格"></el-table-column>
            <el-table-column align="center" prop="retailPrice" label="零售价"></el-table-column>
            <el-table-column align="center" prop="purchasePrice" label="进货价"></el-table-column>
            <el-table-column align="center" prop="storageNum" label="库存数量"></el-table-column>
            <el-table-column align="center" prop="supplierName" label="供应商"></el-table-column>
            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页组件 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20, 50]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
        ></el-pagination>

        <!-- 条件查询处选择供应商对话框 -->
        <el-dialog title="选择供应商" :visible.sync="dialogSupplierVisible" width="500px">
            <supplier @option-supplier="optionSupplier" :isDialog="true"></supplier>
        </el-dialog>

        <!-- 新增和编辑页 -->
        <add-edit
            :title="addEdit.title"
            :formData="addEdit.formData"
            :visible="addEdit.visible"
            :remoteClose="remoteClose"
        ></add-edit>
    </div>
</template>

<script>
import addEdit from './addEdit' // 新增和编辑页
import supplier from '@/views/supplier' // 复用供应商管理页
export default {
    name: 'goods',
    components: {
        addEdit,
        supplier
    },
    data() {
        return {
            list: [], // 数据列表
            query: {}, // 查询条件
            page: {
                current: 1, // 当前页数
                size: 20, // 每页查询条数
                total: 0 // 总条数
            },
            addEdit: { // 新增和编辑传递参数
                title: '', // 弹窗标题
                visible: false, // 弹窗状态
                formData: {}
            },
            dialogSupplierVisible: false // 弹出选择供应商对话框
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        async fetchData() {
            await this.$api.getGoodsSearchList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.rows
                this.page.total = res.data.data.total
            })
        },


        // 编辑
        async handleEdit(id) {
            await this.$api.getGoodsId(id).then(res => {
                if (res.data.code === 20000) {
                    this.addEdit.formData = res.data.data
                    this.addEdit.title = '编辑'
                    this.addEdit.visible = true
                }
            })
        },


        // 删除
        handleDelete(id) {
            this.$confirm('确认删除这条记录吗？', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
            }).then(() => {
                this.$api.deleteGoodsId(id).then(res => {
                    this.$message({
                        message: res.data.message,
                        type: res.data.flag ? 'success' : 'error'
                    })
                    if (res.flag) {
                        // 删除成功，刷新列表数据
                        this.fetchData()
                    }
                })
            }).catch(() => {
                // 取消，不用理会
                console.log('取消删除')
            })
        },


        // 当每页显示多少条改变后触发
        handleSizeChange(val) {
            this.page.size = val
            this.fetchData()
        },


        // 切换页码触发
        handleCurrentChange(val) {
            this.page.current = val
            this.fetchData()
        },


        // 查询
        queryData() {
            this.page.current = 1
            this.fetchData()
        },


        // 新增
        handleAdd() {
            this.addEdit.visible = true
            this.addEdit.title = '新增'
        },


        // 重置
        reloadData() {
            this.$refs.searchForm.resetFields()
        },


        // 条件查询处选择供应商对话框-接收子组件传递回来的数据
        optionSupplier(currentRow) {
            this.query.supplierName = currentRow.name // 供应商名称
            this.query.supplierId = currentRow.id // 供应商ID
            this.dialogSupplierVisible = false //关闭窗口
        },


        // 子组件会触发此方法关闭子组件
        remoteClose() {
            this.addEdit.visible = false
        },
    }
};
</script>

<style lang='scss' scoped>
</style>