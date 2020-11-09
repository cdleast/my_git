<template>
    <div>
        <template v-for="(item,index) in menuData">
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
    </div>
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
    methods: {
        // 存储用户访问过的页面
        clickMenu(item) {
            // console.log(item)
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