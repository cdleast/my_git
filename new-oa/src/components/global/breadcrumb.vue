<template>
    <div class="breadcrumb">
        <el-tag
            @click="tabClick(item.route)"
            @close="tabRemove(item.route)"
            v-for="item in openTab"
            :key="item.route"
            closable
            :disable-transitions="true"
            :type="item.route === $route.path?'dark':''"
        >{{item.title}}</el-tag>
    </div>
</template>

<script>
export default {
    name: "breadcrumb",
    computed: {
        openTab() {
            return this.$store.getters.openTab;
        },
        activeIndex: {
            get() {
                return this.$store.getters.activeIndex;
            },
            set(val) {
                this.$store.commit("set_active_index", val);
            }
        }
    },
    mounted() {
        // 刷新时以当前路由做为tab加入tabs
        // 当前路由不是档案管理时，添加档案管理以及另一页到store里，并设置激活状态
        // 当当前路由是档案管理时，添加档案管理到store，并设置激活状态
        // if (this.$route.path !== "/dangan") {
        //     this.$store.commit("add_tabs", {
        //         route: "/dangan",
        //         name: "dangan",
        //         title: "档案管理"
        //     });
        //     this.$store.commit("add_tabs", {
        //         route: this.$route.path,
        //         name: this.$route.name,
        //         title: this.$route.meta.title
        //     });
        //     this.$store.commit("set_active_index", this.$route.path);
        // } else {
        //     const openTabs = this.openTab;
        //     openTabs.filter(item => {
        //         if (item.route === "/dangan") {
        //             return;
        //         } else {
        //             this.$store.commit("add_tabs", {
        //                 route: "/dangan",
        //                 name: "dangan",
        //                 title: "档案管理"
        //             });
        //             this.$store.commit("set_active_index", "/dangan");
        //             this.$router.push("/dangan");
        //         }
        //     });
        // }
    },
    watch: {
        $route(to, from) {
            // console.log(to);
            //判断路由是否已经打开
            //已经打开的 ，将其置为active
            //未打开的，将其放入队列里
            let flag = false;
            for (let item of this.openTab) {
                if (item.name === to.name) {
                    this.$store.commit("set_active_index", to.path);
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                this.$store.commit("add_tabs", {
                    route: to.path,
                    name: to.name,
                    title: to.meta.title
                });
                this.$store.commit("set_active_index", to.path);
            }
        }
    },
    methods: {
        //tab标签点击时，切换相应的路由
        tabClick(targetName) {
            this.$router.push(targetName);
        },
        //移除tab标签
        tabRemove(targetName) {
            //首页不删
            if (targetName == "/portal") {
                return;
            } else {
                this.$store.commit("delete_tabs", targetName);
            }

            if (this.activeIndex === targetName) {
                // 设置当前激活的路由
                if (this.openTab && this.openTab.length >= 1) {
                    this.$store.commit(
                        "set_active_index",
                        this.openTab[this.openTab.length - 1].route
                    );
                    this.$router.push({ path: this.activeIndex });
                } else {
                    this.$router.push({ path: "/" });
                }
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.breadcrumb {
    margin-bottom: 10px;
    background: #fff;
    padding: 10px 10px 0 10px;
    border: 1px solid #ededed;
    border-left: 3px solid #409eff;
}
.breadcrumb > span {
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}
</style>