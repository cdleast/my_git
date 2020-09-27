<template>
    <el-container style="height: 100%">
        <!-- 左侧导航 -->
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>

        <!-- 右侧内容 -->
        <el-container>
            <!-- 头部 -->
            <el-header>
                <common-header></common-header>
            </el-header>

            <!-- 内容主体 -->
            <el-main class="wrapper">
                <common-tag></common-tag>
                <router-view></router-view>
                <el-backtop target=".wrapper" :visibility-height="200" :right="40" :bottom="40"></el-backtop>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonHeader from "@/components/global/CommonHeader";
import CommonAside from "@/components/global/CommonAside";
import CommonTag from "@/components/global/CommonTag";
export default {
    components: {
        CommonHeader,
        CommonAside,
        CommonTag,
    },
    name: "layout",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.el-header {
    background-color: #333;
}
.el-backtop {
    background-color: #409eff;
    color: #fff;
}
</style>