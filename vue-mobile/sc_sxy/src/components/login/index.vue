<template>
    <div class="login">
        <img class="logo" src="../../assets/images/logo.png" />
        <h1>首创商学院</h1>

        <van-form @submit="onSubmit">
            <van-field
                v-model="values.loginName"
                name="用户名"
                placeholder="请输入账号/身份证号"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="values.password"
                type="password"
                name="密码"
                placeholder="请输入密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />

            <div class="btnorg">
                <van-button round block native-type="submit">提交</van-button>
            </div>
        </van-form>

        <div class="desp" v-if="account" @click="account = !account">用短信验证码登录</div>
        <div class="desp" v-else @click="account = !account">用账号密码登录</div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            values: {
                loginName: "",
                password: ""
            },
            account: true
        };
    },
    methods: {
        onSubmit(values) {
            this.$axios({
                url:
                    "http://124.42.41.53:8080/archivetemp-api/SY_ORG_LOGIN.login.do",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-DEVICE-NAME": "@chrome-76.0.3809.132"
                },
                data: {
                    loginName: values.loginName,
                    password: values.password
                }
            }).then(res => {
                console.log(res);
                console.log(this.values);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import '~@/styles/login';
</style>