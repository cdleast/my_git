<template>
    <div class="partymass">
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb></BreadCrumb>

                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "partymass",
    data() {
        return {
            tabPosition: 'left'
        };
    }
};
</script>

<style lang='scss' scoped>
</style>