<template>
    <div class="login">
        <el-form
            :model="loginForm"
            status-icon
            :rules="loginRules"
            ref="ruleForm"
            class="loginForm"
        >
            <div class="title-container">
                <h3 class="title">系统登录</h3>
            </div>
            <el-form-item prop="username">
                <el-input type="username" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <span></span>
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
const validateUsername = (rule, value, callback) => {
    if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
    } else {
        callback();
    }
};
const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
        callback(new Error("The password can not be less than 6 digits"));
    } else {
        callback();
    }
};
export default {
    name: "login",
    data() {
        return {
            // 账户密码
            loginForm: {
                username: "admin",
                password: "111111"
            },
            // 验证规则
            loginRules: {
                username: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validateUsername
                    }
                ],
                password: [
                    {
                        required: true,
                        trigger: "blur",
                        validator: validatePassword
                    }
                ]
            }
        };
    }
};
</script>

<style lang='scss' scoped>
.login /deep/ {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;

    // 表单主体
    .loginForm {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        // 标题
        .title-container {
            h3 {
                font-size: 26px;
                color: #eee;
                margin: 0 auto 40px auto;
                text-align: center;
                font-weight: 700;
            }
        }

        // 登录按钮
        .btn .el-button {
            width: 100%;
        }
    }
}
</style>