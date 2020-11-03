<template>
    <div class="supplier">
        <!-- 条件查询 -->
        <el-form ref="searchForm" :inline="true" :model="query" size="mini">
            <el-form-item prop="name">
                <el-input v-model="query.name" placeholder="供应商名称" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="linkman" v-if="!isDialog">
                <el-input v-model="query.linkman" placeholder="联系人" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="mobile" v-if="!isDialog">
                <el-input v-model="query.mobile" placeholder="联系电话" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button v-if="!isDialog" type="primary" @click="handleAdd">新增</el-button>
                <el-button v-if="!isDialog" @click="reloadData">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <!-- Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由current-change事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow -->
        <el-table
            :data="list"
            stripe
            border
            style="width: 100%"
            :highlight-current-row="isDialog"
            @current-change="clickCurrentChange"
        >
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="供应商名称"></el-table-column>
            <el-table-column align="center" prop="linkman" label="联系人" width="90"></el-table-column>
            <el-table-column v-if="!isDialog" align="center" prop="mobile" label="联系电话"></el-table-column>
            <el-table-column v-if="!isDialog" align="center" prop="remark" label="备注"></el-table-column>
            <el-table-column v-if="!isDialog" align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页组件 -->
        <el-pagination
            :layout="!isDialog ? 'total, sizes, prev, pager, next, jumper': 'prev, pager, next'"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20, 50]"
            :page-size="page.size"
            :total="page.total"
        ></el-pagination>

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
export default {
    name: 'supplier',
    components: {
        addEdit
    },
    props: {
        // 接收父组件商品管理页中传递过来 的数据,通过isDialog来判断 是否为弹框
        // 如果为 true, 则是弹框, false 就是列表
        isDialog: Boolean
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
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        async fetchData() {
            await this.$api.getSupplierSearchList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.rows
                this.page.total = res.data.data.total
            })
        },


        // 编辑
        async handleEdit(id) {
            await this.$api.getSupplierId(id).then(res => {
                console.log(res)
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
                this.$api.deleteSupplierId(id).then(res => {
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


        // 当点击某一行时,会调用这个函数进行处理，之后会把数据传回父组件
        clickCurrentChange(currentRow, oldCurrentRow) {
            // 点击后,要将点击的数据传递到父组件(商品管理中), 
            // 则可以通过触发父组件中的option-supplier, 触发之后 ,
            // 父组件可以在 option-supplier 这个事件对应的处理函数中进行接收数据currentRow
            this.$emit('option-supplier', currentRow)
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