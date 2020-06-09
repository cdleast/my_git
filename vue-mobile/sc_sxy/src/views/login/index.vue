<template>
    <div class="login">
        <!-- 开屏广告 -->
        <login-guide v-if="guideShow"></login-guide>

        <!-- 登录主体 -->
        <template v-if="!guideShow">
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
        </template>
    </div>
</template>

<script>
import loginApi from "@/api/login";
import loginGuide from "@/views/login/loginGuide"; // 引入开屏广告

export default {
    name: "login",
    components: {
        loginGuide
    },
    data() {
        return {
            users: {
                loginName: "", // 用户名
                password: "" // 密码
            },
            account: true, // 切换密码/账户登录
            disabled: true, // 登录按钮状态
            guideShow: false // 开屏广告状态
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
                    // 存储token
                    this.$store.commit("SET_TOKEN", resp.USER_TOKEN);
                    localStorage.setItem("eleToken", resp.USER_TOKEN);
                    this.guideShow = true; // 打开开屏广告

                    // 根据登录成功之后的token获取用户信息
                    loginApi.getAccountUser().then(res => {
                        this.$store.dispatch("getUserInfo", res.data);
                    });
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