<template>
    <div class="my-photo">
        <header-bar title="我的相册"></header-bar>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-photo",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>