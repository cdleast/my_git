<template>
    <div class="layout">
        <common-header></common-header>

        <div :class="mainBody">
            <div :class="className">
                <common-breadcrumb></common-breadcrumb>
                <router-view></router-view>
            </div>
        </div>

        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader";
import CommonFooter from "@/components/CommonFooter";
import CommonBreadcrumb from "@/components/CommonBreadcrumb";
export default {
    components: {
        CommonHeader,
        CommonFooter,
        CommonBreadcrumb,
    },
    name: "layout",
    data() {
        return {};
    },
    computed: {
        className() {
            return this.$route.fullPath == "/service/quick-repair"
                ? "container-w100"
                : "container";
        },
        mainBody() {
            return this.$route.fullPath == "/service/quick-repair"
                ? "main-body-p0"
                : "main-body";
        },
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

.main-body {
    background: #f5f5f5;
    padding-bottom: 80px;
}

.main-body-p0 {
    padding-bottom: 0;
}
</style>