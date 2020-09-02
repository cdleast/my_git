<template>
    <div class="common-breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
                v-for="(item,index) in breadList"
                :key="index"
                :to="{ path: item.path }"
            >{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
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
.common-breadcrumb {
    background: #f5f5f5;
}
.el-breadcrumb {
    height: 40px;
    line-height: 40px;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
</style>