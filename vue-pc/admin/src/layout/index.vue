<template>
    <el-container>
        <el-aside fixed width="210px">
            <common-sidebar></common-sidebar>
        </el-aside>
        <el-container>
            <el-header style="height: 85px">
                <common-header></common-header>
            </el-header>
            <el-main>
                <common-main></common-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import commonHeader from './commonHeader'
import commonSidebar from './commonSidebar'
import commonMain from './commonMain'
export default {
    name: 'layout',
    components: {
        commonHeader, commonSidebar, commonMain
    },
    data() {
        return {}
    },
};
</script>

<style lang='scss' scoped>
.el-container {
    height: 100%;

    .el-header {
        position: fixed;
        top: 0;
        right: 0;
        padding: 0;
        width: calc(100% - 210px);
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
        z-index: 9;
    }

    .el-aside {
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
        width: 210px !important;
        background-color: #304156;
        height: 100%;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
}
</style>