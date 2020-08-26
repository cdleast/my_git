<template>
    <el-container>
        <el-header height="140px">
            <common-header></common-header>
        </el-header>

        <el-main>
            <div class="container">
                <router-view></router-view>
            </div>
        </el-main>

        <el-footer>
            <common-footer></common-footer>
        </el-footer>
    </el-container>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
export default {
    components: {
        CommonHeader,
        CommonFooter,
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
    padding-bottom: 80px;
}
</style>