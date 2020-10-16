<template>
    <div class="home-container">
        <!-- 面板统计组件 -->
        <panel-group :userTotal="userTotal" :articleTotal="articleTotal" :questionTotal="questionTotal"></panel-group>

        <el-row :gutter="40">
            <el-col :xs="24" :sm="24" :lg="12">
                <el-card>
                    <!-- 饼状图：各技术频道文章统计 -->
                    <pie-chart
                        v-if="flag"
                        :legendData="categoryTotal.nameList"
                        :seriesData="categoryTotal.nameAndValueList"
                    ></pie-chart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
                <el-card>
                    <!-- 柱状图：近6个月发布的文章数 -->
                    <bar-chart
                        v-if="flag"
                        :xAxisData="monthArticleTotal.yearMonthList"
                        :seriesData="monthArticleTotal.aritcleTotalList"
                    ></bar-chart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import PanelGroup from './components/PanelGroup'

export default {
    name: 'home',
    components: {
        PieChart,
        BarChart,
        PanelGroup
    },
    data() {
        return {
            userTotal: 0, // 总用户
            articleTotal: 0, //总文章
            questionTotal: 0, // 总提问
            flag: false, // 判断是否显示图表组件
            categoryTotal: {}, // 每个分类下的文章数
            monthArticleTotal: {} // 查询近6个月发布文章数
        }
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    },
    mounted() {
        // 查询面板中相关的总记录数
        this.getTotal()
        // 统计各技术频道文章数和近6个月发布文章数
        this.getAricleTotal()
    },
    methods: {
        async getTotal() {
            //查询总用户。 data取别名userTotal
            await this.$api.getUserTotal().then(res => {
                this.userTotal = res.data
            })

            // 总文章
            await this.$api.getArticleTotal().then(res => {
                this.articleTotal = res.data
            })

            // 总提问
            await this.$api.getQuestionTotal().then(res => {
                this.questionTotal = res.data
            })
        },

        async getAricleTotal() {
            // 统计各技术频道文章数
            await this.$api.getCategoryTotal().then(res => {
                this.categoryTotal = res.data
            })

            // 近6个月发布文章数
            await this.$api.getMonthArticleTotal().then(res => {
                this.monthArticleTotal = res.data
            })

            // 先查询到数据后，再加载图表组件，将数据渲染，
            this.flag = true
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    &-container {
        margin: 30px;
    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
