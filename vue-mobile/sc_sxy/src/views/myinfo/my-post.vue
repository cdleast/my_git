<template>
    <div class="my-post">
        <header-bar title="我的帖子"></header-bar>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-post",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>