<template>
    <div class="about">
        <div class="main-body">
            <div class="container">
                <div class="tabs">
                    <ul class="tab-title">
                        <li
                            v-for="(item,index) in tabTitle"
                            @click="onTabTitle(item,index)"
                            :class="{active:item.path == $route.path}"
                            :key="index"
                        >{{ item.name }}</li>
                    </ul>

                    <div class="tab-content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
    data() {
        return {
            tabTitle: [],
        };
    },
    created() {
        this.getAboutDataList();
    },
    methods: {
        // 获取数据
        async getAboutDataList() {
            await this.$api.getAboutDataList().then((res) => {
                this.tabTitle = res.data.tabTitle;
            });
        },

        // 点击跳转
        onTabTitle(item, index) {
            this.$router.push({ path: item.path });
        },
    },
};
</script>

<style lang='scss' scoped>
.tab-title {
    background: #fff;

    li {
        font-size: 16px;
    }
}

.tab-content {
    padding: 0;
}
</style>