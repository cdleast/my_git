<template>
    <div class="my-draft">
        <van-nav-bar title="我的草稿" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-draft",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>