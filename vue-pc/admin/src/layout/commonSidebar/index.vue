<template>
    <div class="sidebar-container" :class="{'has-logo':sidebarLogo}" style="height:100vh">
        <logo v-if="sidebarLogo" :collapse="isCollapse" />
        <el-scrollbar>
            <el-menu
                :router="true"
                :default-active="$route.path"
                :unique-opened="true"
                :collapse="isCollapse"
                class="el-menu-vertical-demo"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF"
            >
                <sidebar-item :menuData="sidebars"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import sidebarItem from './sidebarItem' // 循环子页面
import logo from './logo' // logo页面
export default {
    name: 'common-sidebar',
    components: {
        sidebarItem,
        logo
    },
    data() {
        return {}
    },
    computed: {
        // 获取左侧导航栏数组
        sidebars() {
            const menu = this.$router.options.routes.filter(item => {
                return item.path == '/'
            })
            return menu[0].children
        },
        // 左侧导航状态-展开收起
        isCollapse() {
            return this.$store.state.sidebar.isCollapse;
        },
        // 左侧导航状态-logo部分
        sidebarLogo() {
            return this.$store.state.settings.sidebarLogo
        }
    }
};
</script>

<style lang='scss' scoped>
.sidebar-container /deep/ {
    // 隐藏横向滚动条
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 210px;
        min-height: 400px;
    }
}
</style>