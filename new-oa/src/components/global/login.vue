<template>
    <div class="lohin">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">登录用户</span>
            </div>

            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="80px"
                class="ruleForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="$router.push('/register')">注册</el-button>
                    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import userApi from "@/api/user"; // 导入调取接口api文档
export default {
    name: "lohin",
    data() {
        return {
            ruleForm: {
                username: "", // 用户名
                checkPass: "" // 确认密码
            },
            rules: {
                username: [
                    { required: true, message: "帐号不能为空", trigger: "blur" }
                ],
                password: [
                    { required: true, message: "密码不能为空", trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        // 登录
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    userApi.login(this.ruleForm).then(res => {
                        const resp = res.data;
                        if (resp.flag) {
                            // 验证成功, 通过token去获取用户信息
                            userApi.getUserInfo(resp.data.token).then(res => {
                                // 获取到了用户的数据
                                const respUser = res.data;
                                if (respUser.flag) {
                                    // vuex存储用户信息/token
                                    // this.isEmpty全局方法，判断内容是否为空
                                    this.$store.dispatch(
                                        "setIsAutnenticated",
                                        !this.isEmpty(resp.data.token)
                                    );
                                    this.$store.dispatch(
                                        "setUser",
                                        JSON.stringify(respUser.data)
                                    );
                                    // 前往首页
                                    this.$router.push("/");
                                    this.$message({
                                        message: "登录成功",
                                        type: "success"
                                    });
                                } else {
                                    this.$message({
                                        message: "获取用户信息失败",
                                        type: "warning"
                                    });
                                }
                            });
                        } else {
                            this.$message({
                                message: "登录失败",
                                type: "warning"
                            });
                        }
                    });
                } else {
                    return false;
                }
            });
        },
        // 重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang='scss' scoped>
.lohin {
    background-color: #f9fafb;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url("../../assets/images/login-bg.jpg") no-repeat center center;
    background-size: 100% 100%;
}
.form_container {
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.manage_tip {
    height: 50px;
    line-height: 50px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #409eff;
    text-align: center;
}
.manage_tip .title {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
}
.ruleForm {
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
}
.el-select {
    width: 100%;
}
.lohin /deep/ .el-form-item__content {
    display: flex;
}
.el-button {
    flex: 1;
}
</style>