<template>
    <el-container style="height: 100%">
        <!-- 左侧导航 -->
        <el-aside width="200px">
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
                <common-tab></common-tab>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonHeader from "@/components/global/CommonHeader";
import CommonAside from "@/components/global/CommonAside";
import CommonTab from "@/components/global/CommonTab";
export default {
    components: {
        CommonHeader,
        CommonAside,
        CommonTab
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