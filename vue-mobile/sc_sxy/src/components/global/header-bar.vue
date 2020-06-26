<template>
    <div class="header-bar">
        <van-nav-bar
            :title="title"
            z-index="999"
            fixed
            placeholder
            left-arrow
            @click-left="$router.go(-1)"
        >
            <slot slot="title" name="title"></slot>
        </van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "header-bar",
    props: {
        title: String
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
        font-size: 50px;
    }
}
</style>