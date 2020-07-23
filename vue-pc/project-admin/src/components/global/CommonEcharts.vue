<template>
    <div style="height: 100%" ref="echart"></div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "common-echarts",
    // 父组件传过来的数据
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: [],
                    series: []
                };
            }
        },
        // 判断是否有坐标轴的数据
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            echart: null, // 初始化图表
            // 有坐标轴的配置
            axisOption: {
                legend: {
                    textStyle: {
                        color: "#333"
                    }
                },
                grid: {
                    left: "20%"
                },
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    type: "category",
                    data: [],
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3"
                        }
                    },
                    axisLabel: {
                        color: "#333"
                    }
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3"
                            }
                        }
                    }
                ],
                color: [
                    "#2ec7c9",
                    "#b6a2de",
                    "#5ab1ef",
                    "#ffb980",
                    "#d87a80",
                    "#8d98b3",
                    "#e5cf0d",
                    "#97b552",
                    "#95706d",
                    "#dc69aa",
                    "#07a2a4",
                    "#9a7fd1",
                    "#588dd5",
                    "#f5994e",
                    "#c05050",
                    "#59678c",
                    "#c9ab00",
                    "#7eb00a",
                    "#6f5553",
                    "#c14089"
                ],
                series: []
            },
            // 没有坐标轴的配置
            normalOption: {
                tooltip: {
                    trigger: "item"
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf"
                ],
                series: []
            }
        };
    },

    // 计算属性
    computed: {
        // 根据 isAxisChart 判断使用哪个配置，有坐标轴或者无坐标轴
        options() {
            return this.isAxisChart ? this.axisOption : this.normalOption;
        }
        // isCollapse() {
        //     return this.$store.state.tab.isCollapse;
        // }
    },

    // 监听
    watch: {
        // chartData传进来数据的时候初始化图表
        chartData: {
            handler: function() {
                this.initChart();
            },
            deep: true
        }
        // isCollapse() {
        //     setTimeout(() => {
        //         this.resizeChart();
        //     }, 300);
        // }
    },

    methods: {
        // 初始化图表渲染
        initChart() {
            this.initChartData();
            
            // 判断容器是否存在,如果存在，使用刚指定的配置项和数据显示图表
            if (this.echart) {
                // this.options是computed里面的
                this.echart.setOption(this.options);
            } else {
                // 不存在就初始化echarts，在插入配置项
                this.echart = echarts.init(this.$refs.echart);
                this.echart.setOption(this.options);
            }
        },

        // 图表的数据方法，因为有坐标轴或者无坐标轴是不一样的
        initChartData() {
            // 判断是否有坐标轴的图表
            if (this.isAxisChart) {
                // 把传进来的有坐标轴数据赋值给axisOption数组
                this.axisOption.xAxis.data = this.chartData.xData;
                this.axisOption.series = this.chartData.series;
            } else {
                // 把传进来的无坐标轴数据赋值给normalOption数组
                this.normalOption.series = this.chartData.series;
            }
        }
    }
};
</script>

<style lang='scss' scoped>
</style>