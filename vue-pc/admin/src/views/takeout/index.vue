<template>
    <div class="takeout">
        <app-header :poiInfo="poiInfo"></app-header>
        <el-tabs class="el-tabs-width">
            <el-tab-pane label="点菜">
                <goods :container="container" :goods="goods" :poiInfo="poiInfo"></goods>
            </el-tab-pane>
            <el-tab-pane label="评价">
                <ratings></ratings>
            </el-tab-pane>
            <el-tab-pane label="商家">
                <seller></seller>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import appHeader from './components/header'
import goods from './goods'
import ratings from './ratings'
import seller from './seller'
export default {
    name: 'takeout',
    components: {
        appHeader, goods, ratings, seller
    },
    data() {
        return {
            goods: [], // 商品信息
            poiInfo: {}, // 头部信息
            container: {}, // 专场数据
        }
    },
    created() {
        this.fetchData()
    },
    computed: {
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            if (meta.childrenMenu) { // 注意这里很重要
                return meta.childrenMenu
            }
            return path
        }
    },
    methods: {
        async fetchData() {
            await this.$api.getGoodsList().then(res => {
                this.container = res.data.data.container_operation_source
                this.goods = res.data.data.food_spu_tags
                this.poiInfo = res.data.data.poi_info
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.router-link-active {
    color: red;
}

.takeout {
    color: #24292e;
    background: #f5f7fa;
}
</style>