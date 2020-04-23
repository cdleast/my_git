<template>
    <div id="app">
        <el-container>
            <el-header v-if="!(path ==='/login' || path ==='/register' || path ==='/nofind')">
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb v-if="!(path ==='/login' || path ==='/register' || path ==='/nofind')"></BreadCrumb>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            path: ""
        };
    },
    // 判断路由
    mounted() {
        this.path = this.$route.path;
    },
    // 监听路由
    watch: {
        $route(to, from) {
            this.path = to.path;
        }
    }
};
</script>

<style lang="scss">
#app {
    width: 100%;
    height: 100%;
}
</style>
