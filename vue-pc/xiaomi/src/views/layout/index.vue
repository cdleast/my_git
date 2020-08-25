<template>
    <el-container style="height: 100%">
        <el-header height="140px">
            <common-header></common-header>
        </el-header>

        <el-main>
            <div class="container">
                <router-view></router-view>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
export default {
    components: {
        CommonHeader,
    },
    name: "layout",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.el-header {
    padding: 0;
}

.el-main {
    background: #f5f5f5;
}
</style>