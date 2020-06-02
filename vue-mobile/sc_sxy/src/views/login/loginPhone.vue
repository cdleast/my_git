<template>
    <div class="phone">
        手机号登录
    </div>
</template>

<script>
import loginApi from "@/api/login";
export default {
    name: "phone",
    data() {
        return {};
    },
    created() {
        loginApi.loginGuide().then(res => {
            console.log(res);
        });
    },
    methods: {}
};
</script>

<style lang='scss' scoped>
@import "~@/styles/login";
</style>