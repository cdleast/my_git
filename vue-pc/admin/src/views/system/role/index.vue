<template>
    <div class="system-role">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="角色名称：">
                <el-input v-model.trim="query.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button v-if="!roleIds" type="primary" @click="addData">新增</el-button>
                <el-button @click="reloadData">重置</el-button>
                <!-- 用户管理点击设置角色弹窗才显示 -->
                <el-button v-if="roleIds" @click="handleUserRole" type="success">设置角色</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table
            :data="list"
            stripe
            border
            style="width: 100%"
            row-key="id"
            ref="dataTable"
            @selection-change="handleSelectionChange"
        >
            <!-- reserve-selection 必须配合上面的 row-key 使用，这样可以在切换页码后，保留前面选中的行 -->
            <!-- 多选 -->
            <el-table-column v-if="roleIds" align="center" reserve-selection type="selection" width="55"></el-table-column>
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="name" label="角色名称"></el-table-column>
            <el-table-column align="center" prop="remark" label="备注"></el-table-column>
            <!--  roleIds 如果有值，则是用户管理组件传递过来了，则把操作列隐藏  -->
            <el-table-column v-if="!roleIds" align="center" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handlePermission(scope.row.id)" size="mini">分配权限</el-button>
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

        <!-- 新增和编辑页 -->
        <addEdit
            :title="addEdit.title"
            :visible="addEdit.visible"
            :formData="addEdit.formData"
            :remoteClose="remoteClose"
        ></addEdit>

        <!-- 设置权限组件 -->
        <permission title="分配权限" :visible="per.visible" :roleId="per.roleId" :remoteClose="remotePerClose"></permission>
    </div>
</template>

<script>
import addEdit from './addEdit'
import permission from './permission'
export default {
    name: 'system-role',
    components: {
        addEdit,
        permission
    },
    props: {
        /**
         * 如果直接是访问 角色管理 展示角色列表，则 roleIds 就是 null
         * 如果是用户管理弹出的角色列表，即使用户没有角色 roleIds 也是[]，而不是会传null
         * 当是弹出的 角色列表，我们要把 新增 和 操作列 的按钮全部隐藏，就通过 v-if="!roleIds" 判断 roleIds 是否为null，为 null 则显示
        */
        roleIds: null
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
            },
            per: { // 分配权限子组件属性
                visible: false,
                roleId: null // 角色id
            },
            checkedRoleList: [] // 存储选中的对象
        }
    },
    watch: { // 监听 roleIds 变化 +++ 
        roleIds() {
            this.query = {} // 清空查询框数据 
            this.queryData() // 重新获取数据
        },
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 菜单列表查询
        async fetchData() {
            await this.$api.getRoleList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.records
                this.page.total = res.data.data.total
                // 列表有数据后，勾选用户角色
                this.chekedRoles()
            })
        },

        // 关闭新增或者编辑弹窗
        remoteClose() {
            this.addEdit.formData = {}
            this.addEdit.visible = false
            this.fetchData()
        },

        // 关闭分配权限弹窗
        remotePerClose() {
            this.per.visible = false
            this.per.roleId = null
            this.fetchData()
        },

        // 条件查询
        queryData() {
            this.page.current = 1
            this.fetchData()
        },

        // 重置
        reloadData() {
            this.query = {}
            this.fetchData()
        },

        // 新增
        addData() {
            this.addEdit.visible = true
            this.addEdit.title = '新增'
        },

        // 分配权限
        handlePermission(id) {
            // 将点击的那个角色id传递给子组件, 进行查询当前角色已经拥有的菜单ids
            this.per.roleId = id
            this.per.visible = true
        },

        // 编辑
        async handleEdit(id) {
            await this.$api.getRole(id).then(res => {
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
                this.$api.deleteRole(id).then(res => {
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

        // 勾选角色
        chekedRoles() {
            // 强调：在el-table组件中一定要加上 ref="dataTable"
            // 清空上一次选择
            this.$refs.dataTable.clearSelection()
            if (this.roleIds) {
                // 循环出查询到每个角色数据，要进行判断父组件组件的roleIds中的每个角色对象
                this.list.forEach(item => {
                    // 匹配到了，则应该选中
                    if (this.roleIds.indexOf(item.id) !== -1) {
                        // 选中，对应传递的是角色对象
                        this.$refs.dataTable.toggleRowSelection(item, true)
                    }
                })
            }
        },

        /**
         * 每次勾选框变化时，会触发该事件，收集选中数据
         * 注意：被勾选的如果点击下一页会被取消，只会收集当前页勾选的
        */
        handleSelectionChange(val) {
            // val ： 是选中的每个对象，将选中的每一个对象封装到这个val数组中
            this.checkedRoleList = val
        },

        // 点击设置角色按钮触发的
        handleUserRole() {
            // 存放选中的角色id
            const checkedRoleIds = []
            // 获取每个元素中的角色id, 因为调用保存用户角色接口，只需要选中的角色id
            this.checkedRoleList.forEach(item => {
                checkedRoleIds.push(item.id)
            })

            // 触发父组件的事件函数
            this.$emit('saveUserRole', checkedRoleIds)
        },
    }
};
</script>

<style lang='scss' scoped>
</style>