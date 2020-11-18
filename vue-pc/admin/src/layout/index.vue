<template>
    <div class="layout" :class="{'hideSidebar':isCollapse}">
        <common-sidebar class="sidebar"></common-sidebar>
        <div class="main-container">
            <common-header :class="classObj"></common-header>
            <common-main class="main"></common-main>
        </div>
        <right-panel v-if="showSettings"></right-panel>
    </div>
</template>

<script>
import commonHeader from './commonHeader'
import commonSidebar from './commonSidebar'
import commonMain from './commonMain'
import rightPanel from '@/components/rightPanel' // 设置按钮面板
import { mapState } from 'vuex'
export default {
    name: 'layout',
    components: {
        commonHeader, commonSidebar, commonMain, rightPanel
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            isCollapse: state => state.sidebar.isCollapse,
            showSettings: state => state.settings.showSettings,
            tagsView: state => state.settings.tagsView,
            fixedHeader: state => state.settings.fixedHeader
        }),
        // 根据状态绑定class
        classObj() {
            return {
                'fixed-header': this.fixedHeader,
                'hideTagsView': !this.tagsView
            }
        },
    }
};
</script>

<style lang='scss' scoped>
.layout {
    position: relative;
    height: 100%;
    width: 100%;

    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        font-size: 0;
        overflow: hidden;
        background-color: #304156;
    }

    .main-container {
        min-height: 100%;
        -webkit-transition: margin-left 0.28s;
        transition: margin-left 0.28s;
        margin-left: 210px;
        position: relative;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - 210px);
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
    }

    .fixed-header + .main {
        padding-top: 105px;
    }

    .fixed-header.hideTagsView + .main {
        padding-top: 70px;
    }

    // 收起左侧sidebar之后的状态
    &.hideSidebar .main-container {
        margin-left: 64px;

        .fixed-header {
            width: calc(100% - 64px);
        }
    }
}
</style>