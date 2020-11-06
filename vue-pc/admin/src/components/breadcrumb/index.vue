<template>
    <el-breadcrumb separator="/" class="breadcrumb">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" :to="{ path: item.path }">
                <span class="animate__animated animate__bounce">{{item.meta.title}}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "breadcrumb",
    data() {
        return {
            breadList: [] // 路由集合
        }
    },
    watch: {
        $route(val) {
            this.getBreadcrumb();
        }
    },
    created() {
        this.getBreadcrumb();
    },
    methods: {
        isHome(route) {
            const name = route && route.name
            if (!name) {
                return false
            }
            return name.trim().toLocaleLowerCase() === 'home'.toLocaleLowerCase()
        },
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
            const first = matched[0]
            //如果不是首页
            if (!this.isHome(first)) {
                matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched)
            }
            this.breadList = matched
        }
    }

}
</script>

<style lang='scss' scoped>
.breadcrumb /deep/ {
    border-left: 5px solid #31c17b;
    padding-left: 10px;
    font-size: 14px;
    line-height: 50px;
}
</style>