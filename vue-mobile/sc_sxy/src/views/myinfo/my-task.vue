<template>
    <div class="my-task">
        <header-bar title="我的任务"></header-bar>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-task",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>