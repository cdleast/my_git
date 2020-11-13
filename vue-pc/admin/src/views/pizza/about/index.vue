<template>
    <div class="pizza-about">
        <el-tabs :tab-position="tabPosition">
            <el-tab-pane label="历史订单">历史订单</el-tab-pane>
            <el-tab-pane label="联系我们">联系我们</el-tab-pane>
            <el-tab-pane label="点餐文档">点餐文档</el-tab-pane>
            <el-tab-pane label="快递信息">快递信息</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'pizza-about',
    data() {
        return {
            tabPosition: 'left'
        }
    }
};
</script>

<style lang='scss' scoped>
</style>