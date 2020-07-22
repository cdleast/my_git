<template>
    <div class="layout">
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "layout",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
.el-header{
    color: $theme-color;
}
</style>