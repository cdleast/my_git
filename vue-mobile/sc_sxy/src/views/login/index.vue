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
            />
            <van-field
                v-model="users.password"
                type="password"
                name="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />

            <div class="btnorg">
                <van-button round block native-type="submit">提交</van-button>
            </div>
        </van-form>

        <!-- 切换登录方式 -->
        <div class="desp" v-if="account" @click="account = !account">用短信验证码登录</div>
        <div class="desp" v-else @click="account = !account">用账号密码登录</div>
    </div>
</template>

<script>
import loginApi from "@/api/login";
import jwt_decode from "jwt-decode"; // 解析token
export default {
    name: "login",
    data() {
        return {
            users: {
                loginName: "",
                password: ""
            },
            account: true // 切换密码/账户登录
        };
    },
    methods: {
        onSubmit() {
            loginApi.login(this.users).then(res => {
                
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/login";
</style>