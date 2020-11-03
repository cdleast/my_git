<template>
    <div class="right-panel">
        <el-button
            class="handle-button"
            :class="{'left':drawer}"
            type="primary"
            :icon="drawer?'el-icon-close':'el-icon-setting'"
            @click="drawer = !drawer"
        ></el-button>
        <el-drawer title="我是标题" :with-header="false" :visible.sync="drawer" direction="rtl">
            <h3 class="drawer-title">Page style setting</h3>
            <div class="drawer-item">
                <span>Open Tags-View</span>
                <el-switch v-model="tagsView" active-color="#13ce66" inactive-color="#dcdfe6"></el-switch>
            </div>
            <div class="drawer-item">
                <span>Fixed Header</span>
                <el-switch v-model="fixedHeader" active-color="#13ce66" inactive-color="#dcdfe6"></el-switch>
            </div>
            <div class="drawer-item">
                <span>Sidebar Logo</span>
                <el-switch v-model="sidebarLogo" active-color="#13ce66" inactive-color="#dcdfe6"></el-switch>
            </div>
        </el-drawer>
    </div>
</template>

<script>
export default {
    name: 'right-panel',
    data() {
        return {
            drawer: false
        }
    },
    computed: {
        // 是否显示tagsView导航
        tagsView: {
            get() {
                return this.$store.state.settings.tagsView
            },
            set(val) {
                this.$store.dispatch('settings/changeSetting', {
                    key: 'tagsView',
                    value: val
                })
            }
        },
        // 左侧导航状态-logo部分
        sidebarLogo: {
            get() {
                return this.$store.state.settings.sidebarLogo
            },
            set(val) {
                this.$store.dispatch('settings/changeSetting', {
                    key: 'sidebarLogo',
                    value: val
                })
            }
        },
        // 是否固定头部
        fixedHeader: {
            get() {
                return this.$store.state.settings.fixedHeader
            },
            set(val) {
                this.$store.dispatch('settings/changeSetting', {
                    key: 'fixedHeader',
                    value: val
                })
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.right-panel /deep/ {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 20px;
    z-index: 9999;

    .el-drawer {
        width: 260px !important;

        .el-drawer__body {
            padding: 24px;
            font-size: 14px;
            line-height: 1.5;
            word-wrap: break-word;

            .drawer-title {
                margin: 12px 0;
                color: rgba(0, 0, 0, 0.85);
                font-size: 14px;
                line-height: 22px;
                font-weight: bold;
            }

            .drawer-item {
                color: rgba(0, 0, 0, 0.65);
                font-size: 14px;
                padding: 12px 0;

                .el-switch {
                    float: right;
                }
            }
        }
    }

    .handle-button {
        position: absolute;
        right: -20px;
        top: 150px;
        text-align: center;
        z-index: 99999;
        pointer-events: auto;
        color: #fff;
        padding: 12px;
        border-radius: 6px 0 0 6px;
        transition: all 0.3s;
        cursor: pointer;

        i {
            font-size: 16px;
        }
    }

    .handle-button.left {
        right: 240px;
        transition: all 0.3s;
    }
}
</style>