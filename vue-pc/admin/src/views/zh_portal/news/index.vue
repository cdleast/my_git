<template>
    <div class="news">
        <el-row :gutter="20">
            <el-col :span="2">1</el-col>
            <el-col :span="22">
                <h2>其他公司门户</h2>
                <el-row :gutter="20">
                    <el-col class="item-li" :span="6" v-for="(item,index) in other" :key="index">{{ item.name }}</el-col>
                </el-row>
                <el-divider></el-divider>
                <h2>分公司门户</h2>
                <el-row :gutter="20">
                    <el-col class="item-li" :span="4" v-for="(item,index) in child" :key="index">{{ item.name }}</el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'zh_portal-news',
    data() {
        return {
            other: [], // 其他公司门户
            child: [] // 分公司门户
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 分页条件查询列表
        async fetchData() {
            await this.$api.getPortalNewsList().then(res => {
                this.other = res.data.other
                this.child = res.data.child
            })
        },
    }
};
</script>

<style lang='scss' scoped>
.news {
    h2 {
        color: #333;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .item-li {
        font-size: 14px;
        color: #000;
        font-weight: 400;
        cursor: pointer;
        line-height: 30px;
    }
}
</style>