<template>
    <div class="proces">
        <el-container>
            <el-aside width="232px">
                <el-menu
                    :router="true"
                    :default-active="activeChild"
                    class="el-menu-vertical-demo"
                    background-color="#fff"
                    text-color="#454A5B"
                    active-text-color="#409EFF"
                    :unique-opened="true"
                >
                    <el-menu-item :index="item.ROUTER" v-for="item in leftMenu" :key="item.ID">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.NAME}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "proces",
    computed: {
        // 我们使用计算属性来获取到当前点击的菜单的路由路径，然后设置default-active中的值
        // 使得菜单在载入时就能对应高亮
        activeChild() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            // 可以在路由配置文件中设置自定义的路由路径到meta.activeChild属性中，来控制菜单自定义高亮显示
            if (meta.activeChild) {
                return meta.activeChild;
            }
            return path;
        },
        // 从store里获取左侧导航数据
        leftMenu() {
            return this.$store.getters.leftMenu;
        },
    },
    created() {
        this.getDataList();
    },
    methods: {
        getDataList() {
            this.$axios.get("/api/proces_menu").then(res => {
                const datas = res.data.TOPMENU;
                datas.forEach(res => {
                    if (!res.CHILD) {
                        return true;
                    }
                    if (res.NODE_VIRTUAL == "1") {
                        return true;
                    }
                    if (res.TYPE == 4) {
                        const leftMenu = res.CHILD.filter(res => {
                            return (
                                res.DSNAME !== "平台首页" &&
                                res.NAME !== "快捷按钮"
                            );
                        });
                        // 把左侧导航数据存储到vuex中
                        this.$store.commit("getLeftMenu", leftMenu);
                        return false;
                    }
                });
            });
        }
    }
};
</script>