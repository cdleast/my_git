<template>
    <div class="proces">
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb></BreadCrumb>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "proces",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang='scss' scoped>
.el-main{
    width: 1200px;
    margin: 0 auto;
}
</style>