<template>
    <div class="layout">
        <common-header></common-header>

        <div class="main-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>

        <common-footer></common-footer>
    </div>
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