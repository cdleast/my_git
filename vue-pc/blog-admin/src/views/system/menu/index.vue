<template>
    <div class="app-container">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="菜单名称：">
                <el-input v-model.trim="query.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-search" type="primary" @click="handleAdd(scope.row.id)">查询</el-button>
                <el-button icon="el-icon-refresh" @click="reloadData">重置</el-button>
                <el-button icon="el-icon-circle-plus-outline" type="primary" @click="handleAdd(0)">新增</el-button>
            </el-form-item>
        </el-form>

        <!-- row-key="id" 指定唯一标识的属性名，其中数据要包含children才会被渲染为树状，渲染树形数据时，必须要指定 row-key, 
        list集合中的 id属性-->
        <el-table row-key="id" :data="list" border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="名称"></el-table-column>
            <el-table-column align="center" prop="url" label="请求地址"></el-table-column>
            <el-table-column align="center" prop="code" label="权限标识"></el-table-column>
            <el-table-column align="center" prop="type" label="类型">
                <template slot-scope="scope">
                    <!-- 1目录，2菜单，3按钮 -->
                    <span v-if="scope.row.type === 1">目录</span>
                    <span v-if="scope.row.type === 2">菜单</span>
                    <span v-if="scope.row.type === 3">按钮</span>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="icon" label="图标">
                <template slot-scope="scope">
                    <i :class="scope.row.icon"></i>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="sort" label="排序"></el-table-column>
            <el-table-column align="center" label="操作" width="260">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleAdd(scope.row.id)" size="mini">新增</el-button>
                    <el-button type="success" @click="handleEdit(scope.row.id)" size="mini">编辑</el-button>
                    <el-button type="danger" @click="handleDelete(scope.row.id)" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 新增和编辑页面 -->
        <addEdit
            :title="addEdit.title"
            :visible="addEdit.visible"
            :formData="addEdit.formData"
            :remoteClose="remoteClose"
        ></addEdit>
    </div>
</template>

<script>
import addEdit from './addEdit'
export default {
    name: 'system-menu',
    components: {
        addEdit
    },
    data() {
        return {
            list: [], // 列表数据
            query: {}, // 查询条件
            addEdit: { // 传递给子组件参数
                title: '',
                visible: false,
                formData: {}
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 菜单列表查询
        async fetchData() {
            await this.$api.getMenuList(this.query).then(res => {
                this.list = res.data
            })
        },

        // 关闭弹窗
        remoteClose() {
            this.addEdit.formData = {}
            this.addEdit.visible = false
            this.fetchData()
        },

        // 重置
        reloadData() {
            this.query = {}
            this.fetchData()
        },

        /**
         * 菜单管理中有两处有 新增 按钮
         * 条件区域的是新增一级菜单，传递的参数是0
         * 列表区域的是新增子菜单，传递的是参数是当前菜单id
        */
        // 新增
        handleAdd(id) {
            console.log(id)
            // id = 0 是在条件查询的地方点击的，是新增一级菜单 ，否则新增的是某菜单下的子菜单
            this.addEdit.formData.parentId = id
            this.addEdit.title = '新增'
            this.addEdit.visible = true
        },

        // 编辑
        async handleEdit(id) {
            await this.$api.getMenu(id).then(res => {
                if (res.code === 20000) {
                    this.addEdit.formData = res.data
                    this.addEdit.title = '编辑'
                    this.addEdit.visible = true
                }
            })
        },

        // 删除
        handleDelete(id) {
            this.$confirm('确认删除当前节点与子节点记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送删除请求
                this.$api.deleteMenu(id).then(res => {
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
            })
        },
    }
};
</script>

<style lang='scss' scoped>
</style>