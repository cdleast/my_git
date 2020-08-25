<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item
            v-for="(item,index) in breadList"
            :key="index"
            :to="item.path"
        >{{ item.meta.title }}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="bread">{{ bread }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "common-breadcrumb",
    props: {
        bread: {
            type: String,
        },
    },
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
        isHome(route) {
            return route.name === "首页";
        },
        getBreadcrumb() {
            this.breadList = this.$route.matched.splice(1);
            this.breadList = this.breadList.filter((item) => {
                return item.name !== "home";
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