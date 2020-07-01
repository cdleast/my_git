<template>
    <div class="learning">
        <div class="top-background"></div>
        <div class="learn-content">
            <div class="first-section">
                <div class="first-section__item">
                    <div class="nums">
                        <span class="nums-color">{{ finishPlan }}</span>
                        <span class="num">个</span>
                    </div>
                    <div class="item-text">已完成计划</div>
                </div>
                <div class="first-section__item">
                    <div class="nums">
                        <span class="nums-color">{{ finishCSum }}</span>
                        <span class="num">个</span>
                    </div>
                    <div class="item-text">已通过课程</div>
                </div>
                <div class="first-section__item">
                    <div class="nums">
                        <span class="nums-color">{{ totalCredits }}</span>
                        <span class="num">学分</span>
                    </div>
                    <div class="item-text">累计获得</div>
                </div>
            </div>

            <div class="second-section">
                <div
                    class="second-section__item"
                    v-for="(item,index) in secondList"
                    :key="index"
                    @click="item.router?$router.push(item.router):$toast('敬请期待')"
                >
                    <van-image width="26" height="26" :src="item.src" />
                    <div class="second-section__item-text">{{ item.text }}</div>
                </div>
            </div>

            <van-tabs class="third-section" v-model="active">
                <van-tab title="在学课程">
                    <learning-item-list :datas="studyCourse"></learning-item-list>
                </van-tab>
                <van-tab title="学习计划">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import learningItemList from "@/components/home/learning-item-list";
export default {
    name: "learning",
    components: {
        learningItemList
    },
    data() {
        return {
            secondList: [
                {
                    src: require("@/assets/images/learning/icon_xuexi_kechengzhongxin@3x.png"),
                    text: "课程中心",
                    router: "/home/recommend/course-all"
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_kaoshirenwu@3x.png"),
                    text: "考试任务",
                    router: ""
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_zhishiku@3x.png"),
                    text: "知识库",
                    router: "/home/recommend/knowledge-all"
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_peixunban@3x.png"),
                    text: "培训班",
                    router: ""
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_xuexiditu@3x.png"),
                    text: "学习地图",
                    router: ""
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_jiangshiku@3x.png"),
                    text: "讲师库",
                    router: ""
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_tushuguan@3x.png"),
                    text: "图书馆",
                    router: ""
                },
                {
                    src: require("@/assets/images/learning/icon_xuexi_zhibo@3x.png"),
                    text: "直播",
                    router: ""
                }
            ],
            active: 0,
            finishPlan: [], // 已完成计划数量
            finishCSum: [], // 已课程通过数量
            totalCredits: [], // 已累计获得学分
            studyCourse: [] // 学习中课程列表
        };
    },
    created() {
        this.appFinishPlan();
        this.appFinishCSum();
        this.appTotalCredits();
        this.appStudyCourse();
    },
    methods: {
        // 已完成计划数量
        async appFinishPlan() {
            await homeApi.appFinishPlan().then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.finishPlan = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 已课程通过数量
        async appFinishCSum() {
            await homeApi.appFinishCSum().then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.finishCSum = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 已累计获得学分
        async appTotalCredits() {
            await homeApi.appTotalCredits().then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.totalCredits = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 学习中课程列表
        async appStudyCourse() {
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            };
            await homeApi.appStudyCourse(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.studyCourse = res.data._DATA_._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
                console.log(this.studyCourse);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>