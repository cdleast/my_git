<template>
    <div class="colleague-details">
        <van-nav-bar title="同事圈详情" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
        <div class="details-box van-hairline--bottom">
            <div class="details-left" v-if="colleagueList.USER_IMG">
                <van-image
                    :src="colleagueList.USER_IMG[0].FILE_PATH"
                    width="45"
                    height="45"
                    fit="contain"
                    round
                />
            </div>
            <div class="details-right">
                <div class="user-box">
                    <div class="user-name">{{ colleagueList.S_USER__NAME }}</div>
                    <div class="user-company">{{ colleagueList.S_ODEPT__NAME }}</div>
                </div>
                <div class="paragraph">{{ colleagueList.CONTENT }}</div>
                <div class="thumbnails" v-for="item in colleagueList.IMAGES" :key="item.ID">
                    <div
                        v-if="item.length=1"
                        class="gallery"
                        :style="{backgroundImage:'url('+ item.FILE_PATH +')'}"
                    ></div>
                    <div v-else class="thumbnail-list">
                        <van-image width="90" height="90" :src="item.FILE_PATH" />
                    </div>
                </div>
                <div class="toolbar">
                    <span class="timestamp">{{ colleagueList.distanceTime }}</span>
                    <div class="toolbar-right">
                        <span
                            v-if="colleagueList.isItLike === 'false'"
                            @click.prevent="onGiveLike(colleagueList.ID, colleagueList.LIKE_NUM)"
                            class="icon icon-zansel no"
                        ></span>
                        <span
                            v-else
                            @click.prevent="onCancelLike(colleagueList.ID, colleagueList.LIKE_NUM)"
                            class="icon icon-zansel"
                        ></span>
                        <span class="icon icon-pinglun"></span>
                    </div>
                </div>
                <div class="details-footer">
                    <div class="footer-content">
                        <span class="icon icon-zansel"></span>
                        <span
                            class="give-nickname"
                            v-for="(item, index) in colleagueList.likes"
                            :key="index"
                        >{{index == colleagueList.likes.length-1 && item.S_USER__NAME || (item.S_USER__NAME + ',') }}</span>
                    </div>

                    <template v-if="colleagueList.COMMENT">
                        <div
                            class="footer-content"
                            v-for="(item,index) in colleagueList.COMMENT.CHILD"
                            :key="index"
                        >
                            <span class="give-nickname">
                                {{ item.S_UNAME }}:
                                <span class="give-content">{{ item.NAME }}</span>
                            </span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "colleague-details",
    data() {
        return {
            colleagueID: this.$route.query.ID, // 传过来的ID
            colleagueList: [] // 同事圈详情数据
        };
    },
    created() {
        this.appColleague();
    },
    methods: {
        // 获取同事圈详情数据
        async appColleague() {
            await homeApi.appColleague(this.colleagueID).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.colleagueList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 点赞
        async onGiveLike(ID, LIKE_NUM) {
            await homeApi.appGiveLike(ID, LIKE_NUM).then(res => {
                let _MSG_ = res.data._MSG_;
                if (_MSG_.includes("OK")) {
                    this.appColleague(); // 重新获取数据
                } else {
                    this.$toast('点赞失败');
                }
            });
        },

        // 取消点赞
        async onCancelLike(ID, LIKE_NUM) {
            await homeApi.appCancelLike(ID, LIKE_NUM).then(res => {
                let _MSG_ = res.data._MSG_;
                if (_MSG_.includes("OK")) {
                    this.appColleague(); // 重新获取数据
                } else {
                    this.$toast('取消点赞失败');
                }
            });
        },


    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>