<template>
    <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "common-breadcrumb",
    data() {
        return {};
    },
    computed: {
        // 从vuex中获取当前点击的页面
        ...mapState({
            current: (state) => state.breadcrumb.currentMenu,
            asideMenu: (state) => state.aside.asideMenu,
        }),
    },
};
</script>

<style lang='scss' scoped>
</style>