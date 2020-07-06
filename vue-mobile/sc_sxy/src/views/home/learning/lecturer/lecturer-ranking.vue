<template>
    <div class="lecturer-ranking">
        <header-bar title="讲师榜"></header-bar>

        <van-tabs v-model="active" sticky :offset-top="50">
            <van-tab title="周榜">
                <lecturer-ranking-list :datas="weekList"></lecturer-ranking-list>
            </van-tab>
            <van-tab title="月榜">
                <lecturer-ranking-list :datas="monthList"></lecturer-ranking-list>
            </van-tab>
            <van-tab title="总榜">
                <lecturer-ranking-list :datas="generalList"></lecturer-ranking-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import lecturerRankingList from "@/components/home/lecturer-ranking-list";
export default {
    name: "lecturer-ranking",
    components: {
        lecturerRankingList
    },
    data() {
        return {
            title: [{ text: "周榜" }, { text: "月榜" }, { text: "总榜" }],
            active: 0, // 默认周榜显示
            weekList: [], // 周榜
            monthList: [], // 月榜
            generalList: [] // 总榜
        };
    },
    computed: {},
    created() {
        this.appWeekList();
        this.appMonthList();
        this.appGeneralList();
    },
    methods: {
        // 讲师排行榜（周榜）
        async appWeekList() {
            let data = {
                NUM: 10,
                PAGE: 1,
                TYPE: 1
            };
            await homeApi.appWeekList(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.weekList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 讲师排行榜（月榜）
        async appMonthList() {
            let data = {
                NUM: 10,
                PAGE: 1,
                TYPE: 1
            };
            await homeApi.appMonthList(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.monthList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 讲师排行榜（总榜）
        async appGeneralList() {
            let data = {
                NUM: 10,
                PAGE: 1,
                TYPE: 1
            };
            await homeApi.appGeneralList(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.generalList = res.data._DATA_;
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