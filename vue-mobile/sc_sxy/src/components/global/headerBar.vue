<template>
    <div class="headerBar">
        <van-nav-bar title="标题" right-text="按钮" @click-right="onClickRight" :border="false" />
    </div>
</template>

<script>
export default {
    name: "headerBar",
    data() {
        return {};
    },
    methods: {
        onClickRight() {
            this.$toast("按钮");
        }
    }
};
</script>

<style lang='scss' scoped>
// 导航部门
.van-nav-bar /deep/ {
    background-color: $bg-header-color;

    .van-icon,
    .van-nav-bar__text {
        color: #fff;
    }

    .van-nav-bar__title {
        color: #fff;
    }
}
</style>