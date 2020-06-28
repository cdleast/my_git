<template>
    <div class="teaching">
        <header-bar title="直播教学"></header-bar>
        <van-cell title="直播列表" is-link value="历史回放" to="/home/recommend/teaching-history"/>
        <van-empty description="暂无数据" />
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "teaching",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>