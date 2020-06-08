<template>
    <div class="my-backpack">
        <van-nav-bar title="我的背包" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-backpack",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>