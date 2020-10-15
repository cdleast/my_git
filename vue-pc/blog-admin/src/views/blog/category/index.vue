<template>
    <div class="blog-category app-container">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="文章标题:">
                <el-input v-model.trim="query.title"></el-input>
            </el-form-item>
            <el-form-item label="状态:">
                <!-- clearable:清除选项  filterable:搜索选项 -->
                <el-select v-model="query.status" clearable filterable style="width: 120px">
                    <el-option label="禁用" :value="0"></el-option>
                    <el-option label="正常" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-search" type="primary" @click="queryData">查询</el-button>
                <el-button icon="el-icon-refresh" @click="reloadData">重置</el-button>
                <el-button icon="el-icon-plus" type="primary" @click="addData">新增</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" border stripe style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="分类名称"></el-table-column>
            <el-table-column align="center" prop="sort" label="排序"></el-table-column>
            <el-table-column align="center" prop="remark" label="备注"></el-table-column>
            <el-table-column align="center" prop="status" label="状态">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.status === 0" type="danger">禁用</el-tag>
                    <el-tag v-if="scope.row.status === 1" type="success">正常</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="210">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页部分 -->
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
        <addEdit :title="addEdit.title" :visible="addEdit.visible" :formData="addEdit.formData" :remoteClose="remoteClose"></addEdit>
    </div>
</template>

<script>
import addEdit from './addEdit'
export default {
    name: 'blog-category',
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
            addEdit: { // 传递给子组件参数
                title: '',
                visible: false,
                formData: {}
            }
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        // 分页条件查询列表
        async fetchData() {
            await this.$api.getCategoryList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.records
                this.page.total = res.data.total
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

        // 新增数据打开新增窗口
        addData() {
            this.addEdit.visible = true
            this.addEdit.title = '新增'
        },

        // 编辑列表
        async handleEdit(id) {
            await this.$api.getCategory(id).then(res => {
                if (res.code === 20000) {
                    this.addEdit.formData = res.data
                    this.addEdit.title = '编辑'
                    this.addEdit.visible = true
                }
            })
        },

        // 子组件会触发此方法关闭子组件
        remoteClose() {
            this.addEdit.visible = false
        },

        // 删除列表
        handleDelete(id) {
            this.$confirm('确认删除这条记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送删除请求
                this.$api.deleteCategory(id).then(res => {
                    this.$message({
                        type: res.code === 20000 ? 'success' : 'error',
                        message: res.message
                    })
                })
                // 刷新列表数据
                this.fetchData()
            }).catch(() => {
                // 取消删除，不用理会        
            });
        },
    }
};
</script>

<style lang='scss' scoped>
</style>