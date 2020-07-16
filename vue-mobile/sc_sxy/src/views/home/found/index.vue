<template>
    <div class="home-found">
        <!-- 主题列表 -->
        <div class="selected">
            <div
                class="selected-list"
                v-for="item in colleagueThemeList"
                :key="item.ID"
                @click="tabTheme(item)"
            >
                <van-image width="55" height="55" :src="item.FILE[0].FILE_PATH" />
                <p class="text">{{ item.NAME }}</p>
            </div>
        </div>

        <!-- 同事圈列表 -->
        <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
                v-model="isLoading"
                :finished="isFinished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <friendsItem @appColleagueList="appColleagueList" :datas="colleagueList"></friendsItem>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import friendsItem from "@/components/home/friends/friends-item";
export default {
    name: "home-found",
    components: {
        friendsItem
    },
    data() {
        return {
            isRefresh: false, // 是否处于加载中状态
            isLoading: false, // 是否处于加载状态
            isFinished: false, // 数据是否加载完
            colleagueThemeList: [], // 主题列表
            colleagueList: [], // 同事圈列表
            dataList: {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            }
        };
    },
    created() {
        this.appColleagueThemeList();
        this.appColleagueList();
    },
    methods: {
        // 同事圈主题列表
        async appColleagueThemeList() {
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            };
            await homeApi.appColleagueThemeList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.colleagueThemeList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 同事圈列表
        async appColleagueList() {
            await homeApi.appColleagueList(this.dataList).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.colleagueList = res.data._DATA_;
                    this.isRefresh = false; // 数据查询成功取消加载中状态
                    this.isLoading = false; // 不处于加载状态
                    // 判断不做重复渲染
                    if (this.colleagueList.length >= res.data._OKCOUNT_) {
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

        // 切换主题列表
        tabTheme(item) {
            this.$router.push({
                path: "/home/found/theme-list",
                query: {
                    ID: item.ID,
                    title: item.NAME
                }
            });
        },

        //上拉加载数据
        onLoad() {
            this.dataList.NUM += 5; // 每次加载五条数据
            this.isRefresh = false;
            this.appColleagueList();
        },

        // 下拉刷新时触发
        onRefresh() {
            this.colleagueList = [];
            this.isFinished = false;
            this.isLoading = true; // 表示处于加载状态
            this.isRefresh = true;
            this.dataList.NUM = 5; // 每次加载获取几条数据
            this.appColleagueList();
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>