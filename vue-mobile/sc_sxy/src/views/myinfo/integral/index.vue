<template>
    <div class="my-integral">
        <header-bar title="我的积分"></header-bar>

        <div class="integral-bg"></div>
        <div class="integral-show">
            <div class="integral-show-left">
                <div class="now">当前积分</div>
                <div class="now-number">{{ integralNum }}</div>
                <div class="totla-integral">
                    <span>共获得{{ integralNum }}</span>
                    <span>已消耗0</span>
                </div>
            </div>
            <div class="integral-show-right">
                <van-button round size="small" @click="$toast('敬请期待')">去商城兑换</van-button>
            </div>
        </div>

        <van-pull-refresh class="everyday-login" v-model="isRefresh" @refresh="onRefresh">
            <van-list
                v-model="isLoading"
                :finished="isFinished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <div
                    class="everyday-item van-hairline--top-bottom"
                    v-for="item in myIntegral"
                    :key="item.ID"
                >
                    <div class="everyday-item-left">
                        <div class="title">每日活跃</div>
                        <div class="timer">{{ item.S_MTIME }}</div>
                    </div>
                    <div class="everyday-item-right">+{{ item.INTEGRAL }}</div>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-integral",
    data() {
        return {
            data: {
                PAGE: 1,
                NUM: 1
            },
            integralNum: 0, // 我的积分总数
            myIntegral: [], // 我的积分
            isRefresh: false, // 是否处于加载中状态
            isLoading: false, // 是否处于加载状态
            isFinished: false // 数据是否加载完
        };
    },
    created() {
        this.appIntegralSum();
        this.appMyIntegral();
    },
    methods: {
        // 我的积分总数
        async appIntegralSum() {
            await myinfoApi.appIntegralSum().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.integralNum = parseInt(res.data._DATA_[0]._PK_);
                } else {
                    this.$toast(_MSG_);
                }
            });
        },
        // 我的积分
        async appMyIntegral() {
            await myinfoApi.appMyIntegral(this.data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.isRefresh = false; //数据查询成功取消加载中状态
                    this.myIntegral = res.data._DATA_;
                    this.isLoading = false; //不处于加载状态
                    // // 判断不做重复渲染
                    if (this.myIntegral.length >= res.data._OKCOUNT_) {
                        this.isFinished = true; //数据加载完
                    }
                } else {
                    this.$toast(_MSG_);
                    this.isRefresh = false; // 数据查询失败取消加载中状态
                    this.isLoading = false; // 不处于加载状态
                    this.isFinished = true; // 数据加载完，不会再处于加载状态
                }
            });
        },

        //上拉加载数据
        onLoad() {
            this.data.NUM += 5; // 每次加载五条数据
            this.isRefresh = false;
            this.appMyIntegral();
        },

        // 下拉刷新时触发
        onRefresh() {
            this.myIntegral = [];
            this.isFinished = false;
            this.isLoading = true; // 表示处于加载状态
            this.isRefresh = true;
            this.data.NUM = 5; // 每次加载获取几条数据
            this.appMyIntegral(); // 调用加载数据的方法
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>