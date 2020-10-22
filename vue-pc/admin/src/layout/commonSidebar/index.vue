<template>
    <div class="sidebar-container" style="height:100vh">
        <el-scrollbar style="height:100%">
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
                <template v-for="(item,index) in menuList">
                    <el-menu-item :key="index" v-if="item.children.length <= 1" :index="item.children[0].path">
                        <template>
                            <i :class="item.children[0].meta.icon"></i>
                            <span slot="title">{{item.children[0].meta.title}}</span>
                        </template>
                    </el-menu-item>

                    <el-submenu :key="index" v-else :index="item.path">
                        <template slot="title">
                            <i :class="item.meta.icon"></i>
                            <span slot="title">{{item.meta.title}}</span>
                        </template>
                        <el-menu-item :index="ite.path" v-for="ite in item.children" :key="ite.path">
                            <i :class="ite.meta.icon"></i>
                            <span slot="title">{{ite.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import menuList from '@/router/menu' // 布局页面
export default {
    name: 'common-sidebar',
    data() {
        return {
            menuList: menuList, // 导航数据
            isCollapse: false // 展开收起
        }
    },
    created() {
        // console.log(this.menuList)
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