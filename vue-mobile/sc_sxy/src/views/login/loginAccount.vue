<template>
    <div class="login">
        <img class="logo" src="../../assets/images/logo.png" />
        <h1>首创商学院</h1>

        <van-form @submit="onSubmit">
            <van-field
                v-model="users.loginName"
                name="用户名"
                placeholder="请输入账号/身份证号"
                :rules="[{ required: true, message: '请填写用户名' }]"
                @input="isEmpty"
            />
            <van-field
                v-model="users.password"
                type="password"
                name="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                @input="isEmpty"
            />

            <div class="btnorg">
                <van-button :disabled="disabled" round block native-type="submit">提交</van-button>
            </div>
        </van-form>

        <!-- 切换登录方式 -->
        <div class="desp" v-if="account" @click="account = !account">用短信验证码登录</div>
        <div class="desp" v-else @click="account = !account">用账号密码登录</div>
    </div>
</template>

<script>
import loginApi from "@/api/login";
export default {
    name: "login",
    data() {
        return {
            users: {
                loginName: "",
                password: ""
            },
            account: true, // 切换密码/账户登录
            disabled: true, // 登录按钮状态
        };
    },
    methods: {
        // 判断输入内容是否为空，来改变登录按钮状态
        isEmpty() {
            if (this.users.loginName && this.users.password) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
        // 登录用户
        onSubmit() {
            loginApi.login(this.users).then(res => {
                const resp = res.data;
                if (resp._RTN_CODE_ === "OK") {
                    localStorage.setItem("eleToken", resp.USER_TOKEN);
                    this.$toast("登录成功");
                } else {
                    this.$toast({
                        message: `${resp._MSG_}`
                    });
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/login";
</style>