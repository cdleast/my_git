<template>
    <div class="my-download">
        <van-nav-bar title="我的下载" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-download",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>