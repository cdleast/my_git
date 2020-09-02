<template>
    <div class="service-guide">
        <div class="container">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content">
                        <div class="page-front-menu">
                            <h3>购物指南</h3>
                            <ul class="tab-title">
                                <li
                                    v-for="(item,index) in tabTitle"
                                    :key="index"
                                    :class="{active:item.path == $route.path}"
                                    @click="$router.push({ path: item.path })"
                                >{{ item.name }}</li>
                            </ul>
                        </div>
                    </div>
                </el-col>
                
                <el-col :span="18">
                    <div class="grid-content service-guide-view">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "service-guide",
    data() {
        return {
            tabTitle: [],
        };
    },
    created() {
        this.getServiceDataList();
    },
    methods: {
        // 获取数据
        async getServiceDataList() {
            await this.$api.getServiceDataList().then((res) => {
                this.tabTitle = res.data.shoppingTab;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.service-guide {
    .grid-content {
        background: #fff;
    }

    .page-front-menu {
        padding: 36px 0 36px 48px;

        h3 {
            font-size: 16px;
            font-weight: 400;
            line-height: 52px;
            color: #212121;
        }

        li {
            padding: 6px 0;
            color: #757575;
            font-size: 14px;
            cursor: pointer;

            &.active {
                color: #f56600;
            }
        }
    }
}
</style>