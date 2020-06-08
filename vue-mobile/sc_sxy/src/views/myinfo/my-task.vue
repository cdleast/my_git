<template>
    <div class="my-task">
        <van-nav-bar title="我的任务" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-task",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>