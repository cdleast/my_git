<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
            v-for="(item,index) in breadList"
            :key="index"
            :to="{ path: item.path }"
        >{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "common-breadcrumb",
    data() {
        return {
            breadList: [], // 路由集合
        };
    },
    created() {
        this.getBreadcrumb();
    },
    watch: {
        $route() {
            this.getBreadcrumb();
        },
    },
    methods: {
        getBreadcrumb(route) {
            let matched = this.$route.matched;
            this.breadList = matched.filter((item) => {
                return item.name !== "layout" && item.name !== "home";
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.el-breadcrumb {
    margin-bottom: 20px;
}
</style>