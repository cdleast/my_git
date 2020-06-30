<template>
    <div class="my-backpack">
        <header-bar title="我的背包"></header-bar>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-backpack",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>