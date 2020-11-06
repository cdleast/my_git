<template>
    <div class="sidebar-container" :class="{'has-logo':sidebarLogo}" style="height:100vh">
        <logo v-if="sidebarLogo" :collapse="isCollapse" />
        <el-scrollbar>
            <el-menu
                :router="true"
                :default-active="$route.path"
                :unique-opened="true"
                :collapse="isCollapse"
                class="el-menu-vertical-demo"
                background-color="#304156"
                text-color="#bfcbd9"
                active-text-color="#409EFF"
            >
                <!-- <template v-for="(item,index) in menuList">
                    <el-menu-item
                        v-if="!item.children || item.children.length === 0"
                        :key="index"
                        :index="item.path+''"
                        @click="clickMenu(item)"
                    >
                        <template>
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{item.meta.title}}</span>
                        </template>
                    </el-menu-item>

                    <el-submenu v-else :key="index" :index="item.path+''">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{item.meta.title}}</span>
                        </template>
                        <el-menu-item
                            :index="subItem.path"
                            v-for="subItem in item.children"
                            :key="subItem.path"
                            @click="clickMenu(subItem)"
                        >
                            <i :class="subItem.meta.icon"></i>
                            <span slot="title">{{subItem.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>-->
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import logo from './logo' // logo页面
import menuList from '@/router/menu'
export default {
    name: 'common-sidebar',
    components: {
        logo
    },
    data() {
        return {
            menuList: menuList
        }
    },
    computed: {
        // 获取左侧导航栏数组
        // sidebars() {
        //     return this.$store.state.sidebar.sidebars;
        // },
        // 左侧导航状态-展开收起
        isCollapse() {
            return this.$store.state.sidebar.isCollapse;
        },
        // 左侧导航状态-logo部分
        sidebarLogo() {
            return this.$store.state.settings.sidebarLogo
        }
    },
    created() {
        console.log(this.menuList)
    },
    methods: {
        // 存储用户访问过的页面
        clickMenu(item) {
            // 把数据存储vuex
            this.$store.dispatch("tagsView/addVisitedView", item)
            this.$router.push({ name: item.name });
        }
    }
};
</script>

<style lang='scss' scoped>
.sidebar-container /deep/ {
    // 隐藏横向滚动条
    .el-scrollbar__wrap {
        overflow-x: hidden;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 210px;
        min-height: 400px;
    }
}
</style>