<template>
    <div class="my-post">
        <van-nav-bar title="我的帖子" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-post",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>