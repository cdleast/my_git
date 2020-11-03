<template>
    <div class="blog-label">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="标签名称：">
                <el-input v-model.trim="query.name"></el-input>
            </el-form-item>
            <el-form-item label="分类名称：">
                <el-select v-model="query.normalId" clearable filterable>
                    <el-option v-for="item in normalList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-button @click="reloadData">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" border stripe style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="标签名称"></el-table-column>
            <el-table-column align="center" prop="categoryName" label="分类名称"></el-table-column>
            <el-table-column align="center" label="操作" width="210">
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

        <!-- 新增和编辑弹窗 -->
        <addEdit
            :title="addEdit.title"
            :visible="addEdit.visible"
            :formData="addEdit.formData"
            :normalList="normalList"
            :remoteClose="remoteClose"
        ></addEdit>
    </div>
</template>

<script>
import addEdit from './addEdit'
export default {
    name: 'blog-label',
    components: { // 子组件
        addEdit
    },
    data() {
        return {
            list: [], // 列表数据
            query: {}, // 查询条件
            page: {
                current: 1, // 当前页数
                size: 20, // 每页查询条数
                total: 0 // 总条数
            },
            normalList: [],  // 正常状态的分类
            addEdit: { // 传递给子组件参数
                title: '',
                visible: false,
                formData: {}
            }
        }
    },
    created() {
        this.fetchData();
        this.getLabelNormal();
    },
    methods: {
        // 分页条件查询列表
        async fetchData() {
            await this.$api.getLabelSearchList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.records
                this.page.total = res.data.data.total
            })
        },


        // 获取 正常 状态的分类列表数据
        async getLabelNormal() {
            await this.$api.getLabelNormal().then(res => {
                this.normalList = res.data.data
            })
        },


        // 切换每页显示多少条
        handleSizeChange(val) {
            this.page.size = val
            this.fetchData()
        },


        // 切换当前页
        handleCurrentChange(val) {
            this.page.current = val
            this.fetchData()
        },


        // 查询数据
        queryData() {
            // 从第一页开始查询
            this.page.current = 1
            this.fetchData()
        },


        // 重置查询条件
        reloadData() {
            this.query = {}
            this.fetchData()
        },


        // 打开新增窗口
        handleAdd() {
            // 打开时，重新查询正常状态的分类数据
            this.getLabelNormal()
            this.addEdit.visible = true
            this.addEdit.title = '新增'
        },

        // 关闭弹窗
        remoteClose() {
            this.addEdit.visible = false
            this.fetchData()
        },


        // 编辑
        async handleEdit(id) {
            await this.$api.getLabelId(id).then(res => {
                if (res.data.code === 20000) {
                    this.addEdit.formData = res.data.data
                    this.addEdit.title = '编辑'
                    this.addEdit.visible = true
                }
            })
        },


        // 删除
        handleDelete(id) {
            this.$confirm('确认删除这条记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送删除请求
                this.$api.deleteLabelId(id).then(res => {
                    // 处理响应结果提示
                    this.$message({
                        type: res.data.code === 20000 ? 'success' : 'error',
                        message: res.data.message
                    })
                })
                // 刷新列表数据
                this.fetchData()
            }).catch(() => {
                // 取消删除，不用理会        
            })
        }
    }
};
</script>

<style lang='scss' scoped>
</style>