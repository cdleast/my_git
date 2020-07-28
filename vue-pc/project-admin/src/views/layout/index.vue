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
            <el-main>
                <common-tag></common-tag>
                <router-view></router-view>
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
        CommonTag
    },
    name: "layout",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
.el-header {
    background-color: #333;
}
</style>