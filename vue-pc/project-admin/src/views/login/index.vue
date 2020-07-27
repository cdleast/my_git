<template>
    <div class="login">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" class="loginForm">
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item label="账户" prop="username">
                <el-input type="username" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button
                    :disabled="!loginForm.username || !loginForm.password"
                    type="primary"
                    @click="submitForm('loginForm')"
                >提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            // 账户密码
            loginForm: {
                username: "",
                password: "",
            },
            // 验证规则
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: "blur",
                        message: "账户不能为空",
                    },
                ],
                password: [
                    {
                        required: true,
                        trigger: "blur",
                        message: "密码不能为空",
                    },
                ],
            },
        };
    },
    methods: {
        // 登录
        submitForm(loginForm) {
            this.$refs[loginForm].validate((valid) => {
                // 验证成功
                if (valid) {
                    this.$axios
                        .post("/permission/getMenu", this.loginForm)
                        .then((res) => {
                            res = res.data;
                            if (res.code === 20000) {
                                // 先清除在设置避免二次登录
                                this.$store.commit("clearMenu");
                                this.$store.commit("setMenu", res.data.menu);
                                // 存储Token
                                this.$store.commit("setToken", res.data.token);
                                // 做权限判断部分
                                this.$store.commit("addMenu", this.$router);
                                this.$router.push({ name: 'home' });
                                this.$message.success("登录成功");
                            } else {
                                this.$message.warning(res.data.message);
                            }
                        });
                } else {
                    this.$message.error("验证失败");
                    return false;
                }
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.login /deep/ {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    // 表单主体
    .loginForm {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 0 35px;
        overflow: hidden;

        // 标题
        .title-container {
            h3 {
                font-size: 26px;
                color: #eee;
                margin: 0 auto 20px auto;
                text-align: center;
                font-weight: 700;
            }
        }

        // 左侧label
        .el-form-item__label {
            color: #fff;
            font-size: 18px;
        }

        // 登录按钮
        .btn .el-button {
            width: 100%;
        }
    }
}
</style>