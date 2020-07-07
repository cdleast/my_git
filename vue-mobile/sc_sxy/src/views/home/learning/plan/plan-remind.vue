<template>
    <div class="plan-remind">
        <header-bar title="计划提醒"></header-bar>
        <template v-if="planList.length">
            <div class="remind-container" v-if="overdueList.length != 0">
                <div class="ramind-text">{{ overdueList.length }}个计划已逾期</div>
                <div class="ramind-box">
                    <ramind-item-list :datas="overdueList"></ramind-item-list>
                </div>
            </div>

            <div class="remind-container" v-if="soonList.length != 0">
                <div class="ramind-text">{{ soonList.length }}个计划已逾期</div>
                <div class="ramind-box">
                    <ramind-item-list :datas="soonList"></ramind-item-list>
                </div>
            </div>
        </template>

        <van-empty v-else description="暂无数据" />

    </div>
</template>

<script>
import homeApi from "@/api/home";
import ramindItemList from "@/components/home/plan/ramind-item-list";
export default {
    name: "plan-remind",
    components: {
        ramindItemList
    },
    data() {
        return {
            studyPlan: [], // 筛选/逾期计划
            planList: [], // 筛选过后临时存放
            soonList: [], // 即将到期
            overdueList: [] // 已逾期
        };
    },
    created() {
        this.appStudyPlan();
    },
    methods: {
        // 学习计划/筛选/逾期计划
        async appStudyPlan() {
            await homeApi.appStudyPlan().then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.studyPlan = res.data._DATA_;
                    this.studyPlan.forEach((val, key) => {
                        switch (val.TYPE) {
                            case "2":
                                this.planList.push(val);
                                break;
                        }
                    });
                    this.planList.forEach(val => {
                        // 即将到期
                        if (val.IF_SOON == "1") {
                            this.soonList.push(val);
                        }
                        //  逾期
                        if (val.IF_OVERDUE == "1") {
                            this.overdueList.push(val);
                        }
                    });
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>