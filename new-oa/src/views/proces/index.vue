<template>
    <div class="proces">
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb></BreadCrumb>
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
                            <el-menu-item
                                :index="item.router"
                                v-for="item in leftMenu"
                                :key="item.ID"
                            >
                                <i class="el-icon-menu"></i>
                                <span slot="title">{{item.NAME}}</span>
                                <i class="el-icon-arrow-right"></i>
                            </el-menu-item>
                        </el-menu>
                    </el-aside>
                    <el-main>Main</el-main>
                </el-container>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import procesApi from "@/api/proces"; // 导入调取接口api文档
export default {
    name: "proces",
    data() {
        return {
            leftMenu: {}
        };
    },
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
        }
        // 从store里获取左侧导航数据
        // leftMenu() {
        //     return this.$store.getters.leftMenu;
        // }
    },
    created() {
        this.getDataList();
    },
    methods: {
        getDataList() {
            procesApi.getLeftMenu().then(res => {
                const datas = res.data.TOPMENU;
                datas.forEach(res => {
                    if (!res.CHILD) {
                        return true;
                    }
                    if (res.NODE_VIRTUAL == "1") {
                        return true;
                    }
                    if (res.TYPE == 4) {
                        this.leftMenu = res.CHILD.filter(res => {
                            return (
                                res.DSNAME !== "平台首页" &&
                                res.NAME !== "快捷按钮"
                            );
                        });
                        // 把左侧导航数据存储到vuex中
                        // this.$store.commit("getLeftMenu", leftMenu);
                        return false;
                    }
                });
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.el-main {
    width: 1200px;
    margin: 0 auto;
}

/* 竖导航右侧边框去掉 */
.el-menu.el-menu-vertical-demo {
    border-right: none;
    padding: 20px 15px;
}

.el-menu.el-menu-vertical-demo .el-menu-item {
    line-height: 33px;
    height: 35px;
    border-radius: 6px;
    margin-bottom: 10px;
    border: 1px solid #f1f1f1;
    &:last-child {
        margin-bottom: 0;
    }
    i.el-icon-arrow-right {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
}

.el-menu.el-menu-vertical-demo .el-menu-item.is-active,
.el-menu.el-menu-vertical-demo .el-menu-item:hover {
    background: #f6f6f9 !important;
    border: 1px solid #f1f1f1;
    color: #409eff !important;
    i {
        color: #409eff;
    }
}
</style>