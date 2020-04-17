<template>
    <div class="header-nav">
        <!-- 左侧导航 -->
        <el-menu
            :default-active="activeParent"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="/portal">个人门户</el-menu-item>
            <el-menu-item index="/proces">流程中心</el-menu-item>
            <el-menu-item index="3">党群门户</el-menu-item>
            <el-menu-item index="4">廉政建设</el-menu-item>
            <el-menu-item index="5">安全生产门户</el-menu-item>
            <el-menu-item index="6">经营分析</el-menu-item>
            <el-menu-item index="7">经营门户</el-menu-item>
            <el-menu-item index="8">员工分析</el-menu-item>
        </el-menu>

        <!-- 下拉菜单 -->
        <el-dropdown @command="handleCommand" placement="top">
            <span class="el-dropdown-link">
                {{user.name}}
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-s-fold" command="b">退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <!-- 修改密码 -->
        <el-dialog
            class="edit-pass"
            :append-to-body="true"
            title="修改密码"
            :visible.sync="dialogFormVisible"
            width="500px"
        >
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
                <el-form-item label="原密码" prop="oldPass">
                    <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="$refs['ruleForm'].resetFields()">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import userApi from "@/api/user"; // 导入调取接口api文档
export default {
    name: "header-nav",
    data() {
        // 验证原来的密码是否正确
        const validateOldPass = (rule, value, callback) => {
            userApi.checkPwd(this.user.id, value).then(response => {
                const resp = response.data;
                if (resp.flag) {
                    // 验证通过
                    callback();
                } else {
                    callback(new Error(resp.message));
                }
            });
        };

        // 校验确认密码是否一致
        const validatePass = (rule, value, callback) => {
            // value 代表 checkPass
            if (value !== this.ruleForm.password) {
                callback(new Error("两次输入的密码不一致"));
            } else {
                // 相等,则通过
                callback();
            }
        };

        // 注意:在 return 上面,而上面不能使用 逗号 , 结束
        return {
            user: JSON.parse(this.$store.getters.user), // vuex中用户信息
            dialogFormVisible: false, // 修改密码弹窗状态
            ruleForm: {
                oldPass: "", // 原密码
                password: "", // 新密码
                checkPass: "" // 确认密码
            },
            rules: {
                oldPass: [
                    {
                        required: true,
                        message: "原密码不能为空",
                        trigger: "blur"
                    },
                    { validator: validateOldPass, trigger: "blur" }
                ],
                password: [
                    {
                        required: true,
                        message: "新密码不能为空",
                        trigger: "blur"
                    }
                ],
                checkPass: [
                    {
                        required: true,
                        message: "确认密码不能为空",
                        trigger: "blur"
                    },
                    { validator: validatePass, trigger: "change" }
                ]
            }
        };
    },
    computed: {
        // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
        // 使得菜单在载入时就能对应高亮
        activeParent() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            // 可以在路由配置文件中设置自定义的路由路径到meta.activeParent属性中，来控制菜单自定义高亮显示
            if (meta.activeParent) {
                return meta.activeParent;
            }
            return path;
        }
    },
    methods: {
        // 判断打开窗口
        handleCommand(command) {
            switch (command) {
                case "a":
                    // 打开修改密码窗口
                    this.handlePwd();
                    break;
                case "b":
                    // 退出系统
                    this.handleLogout();
                    break;
                default:
                    break;
            }
        },
        // 打开修改密码窗口
        handlePwd() {
            this.dialogFormVisible = true;
            this.$nextTick(() => {
                this.$refs["ruleForm"].resetFields();
            });
        },
        // 修改密码
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    userApi
                        .updatePwd(this.user.id, this.ruleForm.checkPass)
                        .then(response => {
                            const resp = response.data;
                            // 不管失败还是成功,都进行提醒
                            this.$message({
                                message: resp.message,
                                type: resp.flag ? "success" : "warning"
                            });
                            if (resp.flag) {
                                // 更新成功, 退出系统,回到登录页面
                                this.handleLogout();
                                // 关闭窗口
                                this.dialogFormVisible = false;
                            }
                        });
                } else {
                    return false;
                }
            });
        },
        // 退出系统
        handleLogout() {
            // 清除vuex存储的用户信息
            this.$store.dispatch("clearCurrentState");
            // 页面跳转
            this.$router.push("/login");
        }
    }
};
</script>

<style lang='scss' scoped>
// 固定头部
.header-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    z-index: 999;
    box-sizing: border-box;
    background-color: #545c64;
}
// 头部导航
.el-menu.el-menu--horizontal {
    border-bottom: none;
    position: absolute;
    top: 0;
    left: 30px;
}
// 头部右侧用户功能
.el-dropdown {
    position: absolute;
    top: 0;
    right: 40px;
    line-height: 60px;
}
.el-dropdown-link {
    color: white;
    cursor: pointer;
}
// 修改密码
.edit-pass /deep/ .el-dialog__header {
    background: #409eff;
    padding: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.edit-pass /deep/ .el-dialog__title {
    color: #fff;
    font-size: 20px;
}
.edit-pass /deep/ .el-dialog__headerbtn {
    top: 16px;
}
.edit-pass /deep/ .el-dialog__headerbtn i {
    color: #fff;
}
.edit-pass /deep/ .el-form-item__content {
    display: flex;
}
.el-button {
    flex: 1;
}
</style>