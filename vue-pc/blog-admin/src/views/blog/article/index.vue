<template>
    <div class="app-container">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="文章标题:">
                <el-input v-model.trim="query.title"></el-input>
            </el-form-item>
            <el-form-item label="状态:">
                <el-select v-model="query.status" clearable filterable style="width: 120px">
                    <el-option label="未审核" :value="1"></el-option>
                    <el-option label="审核通过" :value="2"></el-option>
                    <el-option label="审核未通过" :value="3"></el-option>
                    <el-option label="已删除" :value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-search" type="primary" @click="queryData">查询</el-button>
                <el-button icon="el-icon-refresh" @click="reload">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" stripe border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="title" label="文章标题"></el-table-column>
            <el-table-column align="center" prop="viewCount" label="浏览数"></el-table-column>
            <el-table-column align="center" prop="thumhup" label="点赞数"></el-table-column>
            <el-table-column align="center" prop="ispublic" label="是否公开">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.ispublic === 0" type="danger">不公开</el-tag>
                    <el-tag v-if="scope.row.ispublic === 1" type="warning">公开</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="status" label="状态">
                <template slot-scope="scope">
                    <!--  0: 已删除, 1:未审核，2:审核通过 3: 审核未通过-->
                    <el-tag v-if="scope.row.status === 0" type="danger">已删除</el-tag>
                    <el-tag v-if="scope.row.status === 1">未审核</el-tag>
                    <el-tag v-if="scope.row.status === 2" type="success">审核通过</el-tag>
                    <el-tag v-if="scope.row.status === 3" type="warning">审核未通过</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="updateDate" label="最后更新时间" min-width="90px">
                <template slot-scope="scope">{{ getFormat(scope.row.updateDate) }}</template>
            </el-table-column>
            <el-table-column align="left" label="操作" width="210">
                <template slot-scope="scope">
                    <el-button type="primary" @click="openView(scope.row.id)" size="mini">查看</el-button>
                    <!-- 审核：只有status===1 才显示，其他不显示。删除：只有status !==0 才显示，其他不显示-->
                    <el-button v-if="scope.row.status === 1" type="success" @click="openAudit(scope.row.id)" size="mini">审核</el-button>
                    <el-button v-if="scope.row.status !== 0" type="danger" @click="handleDelete(scope.row.id)" size="mini">删除</el-button>
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

        <!-- 审核及详情页共用 -->
        <auditDetails
            :title="auditDetails.title"
            :visible="auditDetails.visible"
            :id="auditDetails.id"
            :isAudit="auditDetails.isAudit"
            :remoteClose="remoteClose"
        ></auditDetails>
    </div>
</template>

<script>
import { format } from '@/utils/date' // 格式化日期
import auditDetails from './auditDetails'
export default {
    name: 'blog-article',
    components: {
        auditDetails
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
            auditDetails: { // 审核子组件传递的对象属性
                title: '',
                visible: false,
                id: null, // 文章id
                isAudit: true // 是否打开的为审核页面，true审核，false查看
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 分页条件查询列表
        async fetchData() {
            await this.$api.getArticleList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.records
                this.page.total = res.data.total
            })
        },

        // 组件模板中调用此方法格式化日期
        getFormat(date) {
            return format(date)
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

        // 条件查询方法
        queryData() {
            this.page.current = 1
            this.fetchData()
        },

        // 刷新重置
        reload() {
            this.query = {}
            this.fetchData()
        },

        // 关闭子组件详情和审核窗口
        remoteClose() {
            this.auditDetails.visible = false
            this.fetchData()
        },

        // 查看详情
        openView(id) {
            this.auditDetails.id = id
            this.auditDetails.isAudit = false
            this.auditDetails.title = '文章详情'
            this.auditDetails.visible = true
        },

        // 审核页面
        openAudit(id) {
            this.auditDetails.id = id
            this.auditDetails.isAudit = true
            this.auditDetails.title = '审核文章'
            this.auditDetails.visible = true
        },

        // 删除
        handleDelete(id) {
            this.$confirm('确认删除这条记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送删除请求
                this.$api.deleteArticle(id).then(res => {
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
        },
    },
};
</script>

<style lang='scss' scoped>
</style>