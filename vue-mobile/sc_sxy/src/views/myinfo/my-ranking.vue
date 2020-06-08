<template>
    <div class="my-ranking">
        <van-nav-bar title="排行榜" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-ranking",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>