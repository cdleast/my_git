<template>
    <div class="news">
        <ul class="left-nav">
            <li>信息报送</li>
            <li>信息报送查询</li>
            <li>信息发布</li>
            <li>信息浏览</li>
            <li>新闻栏目统计</li>
            <li>栏目管理</li>
        </ul>

        <div class="right-nav">
            <h2>其他公司门户</h2>
            <ul class="column-count-3">
                <li class="item-li" v-for="(item,index) in other" :key="index">{{ item.name }}</li>
            </ul>
            <el-divider></el-divider>
            <h2>分公司门户</h2>
            <ul class="column-count-6">
                <li class="item-li" v-for="(item,index) in child" :key="index">{{ item.name }}</li>
            </ul>
        </div>
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
    display: flex;

    .left-nav {
        width: 50px;
        padding: 10px 0;
        margin-right: 20px;
        background: #d3dce6;

        li {
            color: #000;
            font-size: 12px;
            padding: 10px;
            text-align: center;
            cursor: pointer;
        }

        li:hover {
            background: #fff;
        }
    }

    .right-nav {
        flex: 1;

        h2 {
            color: #333;
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 20px;
        }

        ul.column-count-3 {
            column-count: 3;
            -moz-column-count: 3;
            -webkit-column-count: 3;
        }

        ul.column-count-6 {
            column-count: 6;
            -moz-column-count: 6;
            -webkit-column-count: 6;
        }

        .item-li {
            font-size: 14px;
            color: #000;
            font-weight: 400;
            cursor: pointer;
            line-height: 30px;
        }
    }
}
</style>