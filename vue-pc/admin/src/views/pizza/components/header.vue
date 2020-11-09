<template>
    <el-menu
        :router="true"
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item index="/pizza">主页</el-menu-item>
        <el-menu-item index="/pizza/menu">菜单</el-menu-item>
        <el-menu-item index="/pizza/admin">管理</el-menu-item>
        <el-menu-item index="/pizza/about">我们</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'pizza-header',
    data() {
        return {
        }
    }
};
</script>

<style lang='scss' scoped>
</style>