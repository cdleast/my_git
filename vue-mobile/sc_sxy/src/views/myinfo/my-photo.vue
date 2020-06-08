<template>
    <div class="my-photo">
        <van-nav-bar title="我的相册" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
    </div>
</template>

<script>
export default {
    name: "my-photo",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>