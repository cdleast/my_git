<template>
    <div class="app-container">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="广告标题:">
                <el-input v-model.trim="query.title"></el-input>
            </el-form-item>
            <el-form-item label="状态:">
                <el-select v-model="query.status" clearable filterable style="width: 85px">
                    <el-option label="禁用" :value="0"></el-option>
                    <el-option label="正常" :value="1"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-search" type="primary" @click="queryData">查询</el-button>
                <el-button icon="el-icon-refresh" @click="reloadData">重置</el-button>
                <el-button icon="el-icon-circle-plus-outline" type="primary" @click="addData">新增</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" stripe border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="title" label="广告标题"></el-table-column>
            <el-table-column align="center" prop="imageUrl" label="广告图片">
                <template slot-scope="scope">
                    <el-image style="width: 90px; height: 60px" :src="scope.row.imageUrl" :preview-src-list="[scope.row.imageUrl]"></el-image>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="advertUrl" label="广告链接"></el-table-column>
            <el-table-column align="center" prop="status" label="状态">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.status === 0" type="danger">禁用</el-tag>
                    <el-tag v-if="scope.row.status === 1" type="success">正常</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="sort" label="排序"></el-table-column>
            <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="success" @click="handleEdit(scope.row.id)" size="mini">编辑</el-button>
                    <el-button type="danger" @click="handleDelete(scope.row.id)" size="mini">删除</el-button>
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

        <!-- 新增和编辑页面 -->
        <addEdit
            :title="addEdit.title"
            :visible="addEdit.visible"
            :formData="addEdit.formData"
            :oldImageUrl="addEdit.oldImageUrl"
            :remoteClose="remoteClose"
        ></addEdit>
    </div>
</template>

<script>
import addEdit from './addEdit'
export default {
    name: 'advert',
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
            addEdit: {
                title: '',
                visible: false,
                formData: {
                    imageUrl: null // 不声明，上传后无法回显展示图片
                },
                oldImageUrl: null // 是编辑时，查询出来的原始图片
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 分页条件查询列表
        async fetchData() {
            await this.$api.getAdvertList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.records
                this.page.total = res.data.total
            })
        },

        // val 是切换之后的每页显示多少条
        handleSizeChange(val) {
            this.page.size = val
            this.fetchData()
        },

        // 当页码改变后触发到此方法，val 是当前点击（或输入）的那个页码，
        handleCurrentChange(val) {
            this.page.current = val
            this.fetchData()
        },

        // 条件查询方法
        queryData() {
            this.page.current = 1
            this.fetchData()
        },

        // 刷新重置
        reloadData() {
            this.query = {}
            this.fetchData()
        },

        // 新增
        addData() {
            this.addEdit.title = '新增'
            this.addEdit.visible = true
        },

        // 关闭窗口
        remoteClose() {
            // 不声明，上传后无法回显展示图片
            this.addEdit.formData = { imageUrl: null }
            this.addEdit.visible = false
            this.fetchData()
        },

        // 编辑
        async handleEdit(id) {
            await this.$api.getAdvert(id).then(res => {
                console.log(res)
                if (res.code === 20000) {
                    this.addEdit.formData = res.data
                    // 修改前的图片url
                    this.addEdit.oldImageUrl = res.data.imageUrl
                    // 弹出窗口
                    this.addEdit.visible = true
                    this.addEdit.title = '编辑'
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
                this.$api.deleteAdvert(id).then(res => {
                    // 处理响应结果提示
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
        }
    }
};
</script>

<style lang='scss' scoped>
</style>