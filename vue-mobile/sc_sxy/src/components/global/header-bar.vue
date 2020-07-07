<template>
    <div class="header-bar">
        <van-nav-bar
            :title="title"
            z-index="999"
            fixed
            placeholder
            :left-arrow="leftArrow"
            @click-left="$router.go(-1)"
            :border="false"
        >
            <slot slot="left" name="left"></slot>
            <slot slot="title" name="title"></slot>
            <slot slot="right" name="right"></slot>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "header-bar",
    props: {
        title: {
            type: String
        },
        leftArrow: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang='scss' scoped>
.header-bar /deep/ {
    .van-nav-bar__title > div {
        display: flex;
        align-items: center;
    }
    .icon {
        color: #fff;
        font-size: 40px;
    }
}
</style>