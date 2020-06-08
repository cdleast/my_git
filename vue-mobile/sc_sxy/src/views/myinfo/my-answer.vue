<template>
    <div class="my-answer">
        <van-nav-bar title="我的回答" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-answer",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>