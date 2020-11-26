<template>
    <div class="excel">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'excel',
    data() {
        return {}
    },
};
</script>

<style lang='scss' scoped>
.excel /deep/ {
    .export-excel-header {
        margin-bottom: 20px;

        > div {
            display: inline-block;
            margin-right: 20px;
        }

        .radio-label {
            font-size: 14px;
            color: #606266;
            line-height: 40px;
            padding: 0 12px 0 0;
        }
    }
}
</style>