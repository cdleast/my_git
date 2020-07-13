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
        <friendsItem :datas="colleagueList"></friendsItem>
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
            colleagueThemeList: [], // 主题列表
            colleagueList: [] // 同事圈列表
        };
    },
    created() {
        this.appColleagueThemeList();
        this.appColleagueList();
    },
    mounted() {},
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
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            };
            await homeApi.appColleagueList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.colleagueList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
                console.log(this.colleagueList);
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
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>