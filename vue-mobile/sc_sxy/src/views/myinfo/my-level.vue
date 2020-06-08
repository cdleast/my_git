<template>
    <div class="my-level">
        <van-nav-bar title="我的等级" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-level",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>