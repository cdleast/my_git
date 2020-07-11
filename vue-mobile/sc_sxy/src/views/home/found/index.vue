<template>
    <div class="home-found">
        <!-- 主题列表 -->
        <div class="selected">
            <div
                class="selected-list"
                v-for="item in colleagueThemeList"
                :key="item.ID"
                @click="tabTheme(item.ID)"
            >
                <van-image width="55" height="55" :src="item.FILE[0].FILE_PATH" />
                <p class="text">{{ item.NAME }}</p>
            </div>
        </div>

        <!-- 同事圈列表 -->
        <div class="moments-post" v-for="item in colleagueList" :key="item.ID">
            <div class="post-left">
                <van-image round width="45" height="45" :src="item.USER_IMG[0].FILE_PATH" />
            </div>
            <div class="post-right">
                <div class="post-username">{{ item.S_USER__NAME }}</div>
                <div class="post-company">{{ item.IMAGES[0] && item.IMAGES[0].S_DNAME }}</div>
                <div class="paragraph">{{ item.CONTENT }}</div>
                <div class="thumbnails">
                    <!-- <van-image fit="cover" width="125" height="200"  :src="item.IMAGES[0].FILE_PATH"/> -->
                </div>
                <div class="toolbar">
                    <div class="timestamp">{{ item.distanceTime }}</div>
                    <span class="icon icon-shenglvehao"></span>
                </div>
                <div class="post-footer">
                    <div class="footer-content">
                        <span class="icon icon-zansel"></span>
                        <!-- <span
                            class="nickname"
                            v-for="i in item.likes"
                            :key="i.ID"
                        >{{ i.S_USER__NAME }}</span>-->
                        <span class="nickname">{{ item.likes | likesSplit}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "home-found",
    data() {
        return {
            colleagueThemeList: [], // 主题列表
            colleagueList: [] // 同事圈列表
        };
    },
    filters: {
        // 把喜欢点赞的名字以逗号进行分隔
        likesSplit(item) {
            let datas = item.map(i => {
                return i.S_USER__NAME;
            });
            return datas.join();
        }
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
            });
        },

        // 切换主题列表
        tabTheme(ID) {
            console.log(ID);
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>