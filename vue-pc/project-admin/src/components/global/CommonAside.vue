<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <!-- 没有子级菜单 -->
        <el-menu-item
            :index="item.path"
            v-for="item in noChildren"
            :key="item.path"
            @click="clickMenu(item)"
        >
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{ item.label }}</span>
        </el-menu-item>

        <!-- 带子级菜单 -->
        <el-submenu :index="item.label" v-for="item in hasChildren" :key="item.path">
            <template slot="title">
                <i :class="'el-icon-' + item.icon"></i>
                <span slot="title">{{ item.label }}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item
                    :index="subItem.path"
                    v-for="(subItem, subIndex) in item.children"
                    :key="subIndex"
                    @click="clickMenu(subItem)"
                >
                    <i :class="'el-icon-' + subItem.icon"></i>
                    <span slot="title">{{ subItem.label }}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: "common-aside",
    data() {
        return {
            asideMenu: [
                {
                    path: "/home",
                    name: "home",
                    label: "首页",
                    icon: "s-home"
                },
                {
                    path: "/video",
                    name: "video",
                    label: "视频管理",
                    icon: "video-play"
                },
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    icon: "user"
                },
                {
                    label: "其他",
                    icon: "user",
                    children: [
                        {
                            path: "/pageOne",
                            name: "pageOne",
                            label: "页面1",
                            icon: "setting"
                        },
                        {
                            path: "/pageTwo",
                            name: "pageTwo",
                            label: "页面2",
                            icon: "setting"
                        }
                    ]
                }
            ]
        };
    },
    computed: {
        // 判断asideMenu数组是否没有子级，并返回没有子级的
        noChildren() {
            return this.asideMenu.filter(item => !item.children);
        },
        // 判断asideMenu数组是否有子级，并返回有子级的
        hasChildren() {
            return this.asideMenu.filter(item => item.children);
        }
    },
    methods: {
        // 点击菜单打开页面
        clickMenu(item) {
            // 把数据存储vuex
            this.$store.commit("selectMenu", item);
        }
    }
};
</script>

<style lang='scss' scoped>
.el-menu {
    height: 100%;
    border-right: none;
}
</style>