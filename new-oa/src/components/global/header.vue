<template>
    <div class="header-nav">
        <el-menu
            :default-active="activeParent"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="/portal">个人门户</el-menu-item>
            <el-menu-item index="/proces">流程中心</el-menu-item>
            <el-menu-item index="3">党群门户</el-menu-item>
            <el-menu-item index="4">廉政建设</el-menu-item>
            <el-menu-item index="5">安全生产门户</el-menu-item>
            <el-menu-item index="6">经营分析</el-menu-item>
            <el-menu-item index="7">经营门户</el-menu-item>
            <el-menu-item index="8">员工分析</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "header-nav",
    computed: {
        // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
        // 使得菜单在载入时就能对应高亮
        activeParent() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            // 可以在路由配置文件中设置自定义的路由路径到meta.activeParent属性中，来控制菜单自定义高亮显示
            if (meta.activeParent) {
                return meta.activeParent;
            }
            return path;
        }
    }
};
</script>

<style lang='scss' scoped>
// 固定头部
.header-nav {
    // position: fixed;
    // top: 0;
    // left: 0;
    // right: 0;
    width: 100%;
    padding: 0 15px;
    z-index: 99999;
    box-sizing: border-box;
    background-color: #545c64;
}
.el-menu.el-menu--horizontal{
    border-bottom: none;
}
</style>