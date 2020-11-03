<template>
    <div class="system-user">
        <!-- 条件查询 -->
        <el-form :inline="true" :model="query" size="mini">
            <el-form-item label="用户名:">
                <el-input v-model.trim="query.username"></el-input>
            </el-form-item>
            <el-form-item label="手机号:">
                <el-input v-model.trim="query.mobile"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button type="primary" @click="addData">新增</el-button>
                <el-button @click="reloadData">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" stripe border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="username" label="用户名"></el-table-column>
            <el-table-column align="center" prop="nickName" label="昵称"></el-table-column>
            <el-table-column align="center" prop="mobile" label="手机号"></el-table-column>
            <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
            <el-table-column align="center" prop="isAccountNonExpired" label="帐号过期">
                <!-- (1 未过期，0已过期) -->
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isAccountNonExpired === 0" type="danger">过期</el-tag>
                    <el-tag v-if="scope.row.isAccountNonExpired === 1" type="success">正常</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="isAccountNonLocked" label="帐号锁定">
                <!-- (1 未锁定，0已锁定) -->
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isAccountNonLocked === 0" type="danger">锁定</el-tag>
                    <el-tag v-if="scope.row.isAccountNonLocked === 1" type="success">正常</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="isCredentialsNonExpired" label="密码过期">
                <!-- (1 未过期，0已过期) -->
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isCredentialsNonExpired === 0" type="danger">过期</el-tag>
                    <el-tag v-if="scope.row.isCredentialsNonExpired === 1" type="success">正常</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="isEnabled" label="是否可用">
                <!-- (1 可用，0 删除用户) -->
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.isEnabled === 0" type="danger">已删除</el-tag>
                    <el-tag v-if="scope.row.isEnabled === 1" type="success">可用</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="330">
                <template slot-scope="scope" v-if="scope.row.isEnabled === 1">
                    <el-button type="success" @click="handleEdit(scope.row.id)" size="mini">编辑</el-button>
                    <el-button type="danger" @click="handleDelete(scope.row.id)" size="mini">删除</el-button>
                    <el-button type="primary" @click="handleRole(scope.row.id)" size="mini">设置角色</el-button>
                    <el-button type="primary" @click="handlePwd(scope.row.id)" size="mini">密码修改</el-button>
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
            :formData="addEdit.formData"
            :visible="addEdit.visible"
            :remoteClose="remoteClose"
        ></addEdit>

        <!-- 设置角色 -->
        <el-dialog title="设置角色" :visible.sync="role.visible" width="65%">
            <!-- roleIds是当前用户所拥有的角色id, 子组件 Role 通过 this.$emit('saveUserRole') 触发此事件-->
            <Role :roleIds="role.roleIds" @saveUserRole="saveUserRole" />
        </el-dialog>

        <!-- 修改密码 -->
        <password title="修改密码" :userId="pwd.userId" :visible="pwd.visible" :remoteClose="remotePwdClose"></password>
    </div>
</template>

<script>
import addEdit from './addEdit'
import password from './password'
import Role from '../role' // 复用角色列表组件
export default {
    name: 'system-user',
    components: {
        addEdit,
        password,
        Role
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
            role: { // 弹出设置角色组件
                visible: false,
                // 传递到子组件中时,至少会传递一个空数据[], 子组件判断是否有roleIds值 
                roleIds: [], // 封装当前用户所拥有的 角色id
                userId: null // 点击哪个用户，就是哪个用户id,当保存用户角色时，需要使用
            },
            pwd: { // 修改密码组件
                userId: null, //修改哪一个用户
                visible: false
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 菜单列表查询
        async fetchData() {
            await this.$api.getUserList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.records
                this.page.total = res.data.data.total
            })
        },

        // 关闭新增或者编辑弹窗
        remoteClose() {
            this.addEdit.formData = {}
            this.addEdit.visible = false
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
            this.addEdit.title = '新增——默认密码与用户名一致'
        },

        // 编辑
        async handleEdit(id) {
            await this.$api.getUser(id).then(res => {
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
                this.$api.deleteUser(id).then(res => {
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

        // 设置角色
        async handleRole(id) {
            this.role.userId = id
            await this.$api.getRoleIdsByUserId(id).then(res => {
                // 角色id 传递给子组件
                this.role.roleIds = res.data.data
                this.role.visible = true
            })
        },

        // 角色列表子组件会触发此方法来保存当前用户选择的角色id
        saveUserRole(roleIds) {
            this.$api.saveUserRole(this.role.userId, roleIds).then(res => {
                if (res.data.code === 20000) {
                    this.$message({ message: '分配角色成功', type: 'success' })
                    this.role.visible = false
                } else {
                    this.$message({ message: '分配角色失败', type: 'error' })
                }
            })
        },

        // 密码修改
        handlePwd(id) {
            // 要修改的用户id
            this.pwd.userId = id
            this.pwd.visible = true
        },

        // 关闭密码窗口
        remotePwdClose() {
            this.pwd.userId = null
            this.pwd.visible = false
            this.fetchData()
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
    }
};
</script>

<style lang='scss' scoped>
</style>