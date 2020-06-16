<template>
    <div class="recommend-all-course">
        <van-nav-bar title="全部课程" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "recommend-all-course",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>