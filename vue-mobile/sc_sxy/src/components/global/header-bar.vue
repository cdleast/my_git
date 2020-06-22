<template>
    <div class="header-bar">
        <van-nav-bar :title="title" fixed placeholder left-arrow @click-left="$router.go(-1)"></van-nav-bar>
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
</style>