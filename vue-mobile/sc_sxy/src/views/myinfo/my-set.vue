<template>
    <div class="my-set">
        <van-nav-bar
            title="我的设置"
            left-arrow
            @click-left="$router.go(-1)"
            @click-right="onClickRight"
        >
            <template #right>
                <van-icon name="plus" size="18" />
            </template>
        </van-nav-bar>

        <div class="loginOut" @click="loginOut">退出登录</div>
    </div>
</template>

<script>
import { removeToken } from "@/utils/request/auth";
export default {
    name: "my-set",
    data() {
        return {};
    },
    methods: {
        onClickRight() {
            this.$toast("提示文案");
        },
        // 退出登录并清除数据
        loginOut() {
            removeToken();
            this.$router.push("/login");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>