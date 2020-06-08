<template>
    <div class="my-set">
        <van-nav-bar title="我的设置" left-arrow @click-left="this.$router.go(-1)" @click-right="onClickRight">
            <template #right>
                <van-icon name="plus" size="18" />
            </template>
        </van-nav-bar>

        <div class="loginOut" @click="loginOut">退出登录</div>
    </div>
</template>

<script>
export default {
    name: "my-set",
    data() {
        return {};
    },
    methods: {
        onClickRight() {
            this.$toast("提示文案");
        },
        // 退出登录
        loginOut() {
            this.$router.push("/loginAccount");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>