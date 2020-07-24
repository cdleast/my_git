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
                // 图例标题部分
                legend: {
                    textStyle: {
                        color: "#333"
                    }
                },
                // 渲染图表的位置
                grid: {
                    left: "15%"
                },
                // 悬浮显示
                tooltip: {
                    trigger: "axis" // 触发时机
                },
                xAxis: {
                    type: "category",
                    data: [],
                    // 坐标轴线颜色
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3"
                        }
                    },
                    // 坐标轴下文本颜色
                    axisLabel: {
                        color: "#333"
                    }
                },
                yAxis: [
                    {
                        type: "value",
                        // 坐标轴线颜色
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3"
                            }
                        }
                    }
                ],
                // series选择color里的颜色
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
        },

        // 获取左侧导航是否折叠
        isCollapse() {
            return this.$store.state.aside.isCollapse;
        }
    },

    // 监听
    watch: {
        // 监听chartData传进来数据的时候初始化图表
        chartData: {
            handler: function() {
                this.initChart();
            },
            deep: true
        },
        
        // 监听左侧导航栏是否折叠，让图表重新计算尺寸大小
        isCollapse() {
            setTimeout(() => {
                this.resizeChart();
            }, 300);
        }
    },

    mounted() {
        // 注册事件，检测浏览器大小发生变化
        window.addEventListener("resize", this.resizeChart);
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
        },

        // 浏览器大小发生变化，重新计算echart图表尺寸
        resizeChart() {
            this.echart ? this.echart.resize() : "";
        }
    },

    // 组件销毁
    destroyed() {
        // 离开页面时候销毁事件
        window.removeEventListener("resize", this.resizeChart);
    }
};
</script>

<style lang='scss' scoped>
</style>