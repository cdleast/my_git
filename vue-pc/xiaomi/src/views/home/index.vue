<template>
    <div class="home">
        <common-breadcrumb></common-breadcrumb>

        <el-button @click="$router.push('/about')">跳转小米关于</el-button>
    </div>
</template>

<script>
import CommonBreadcrumb from "@/components/CommonBreadcrumb";
export default {
    name: "home",
    components: {
        CommonBreadcrumb,
    },
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
</style>