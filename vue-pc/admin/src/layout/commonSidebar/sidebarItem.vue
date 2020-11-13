<template>
    <fragment>
        <template v-for="(item,index) in menuList">
            <el-menu-item
                v-if="!item.children || item.children.length === 0"
                :key="index"
                :index="item.path"
                @click="clickMenu(item)"
            >
                <template>
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </template>
            </el-menu-item>

            <el-submenu v-else :key="index" :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </template>
                <sidebar-item :menuData="item.children"></sidebar-item>
            </el-submenu>
        </template>
    </fragment>
</template>

<script>
export default {
    name: 'sidebar-item',
    props: {
        menuData: {
            type: Array,
            default: {}
        }
    },
    computed: {
        menuList() {
            // 过滤导航中需要隐藏的属性
            return this.menuData.filter(item => {
                if (item.hidden) {
                    delete item.children
                }
                return item
            })
        }
    },
    methods: {
        // 存储用户访问过的页面
        clickMenu(item) {
            // 把数据存储vuex
            this.$store.dispatch("tagsView/addVisitedView", item)
            this.$router.push({
                path: item.path,
                name: item.name
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.sidebar-item {
    height: 100%;
}
</style>