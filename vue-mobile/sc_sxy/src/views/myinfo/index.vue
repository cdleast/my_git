<template>
    <div class="myinfo">
        <!-- 头部 -->
        <div class="header">
            <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                :border="false"
            />
            <div class="users">
                <div class="user-info"></div>
                <div class="user-desp">
                    <h2>吴章华</h2>
                    <p>北京华展汇元信息技术有限公司</p>
                </div>
            </div>
        </div>

        <div class="part">
            <van-row type="flex" justify="space-around">
                <van-col span="6">
                    <p class="num">4</p>
                    <p class="desp">我的课程</p>
                </van-col>
                <van-col span="6">
                    <p class="num">0</p>
                    <p class="desp">我的考试</p>
                </van-col>
                <van-col span="6">
                    <p class="num">1</p>
                    <p class="desp">我的收藏</p>
                </van-col>
            </van-row>
            <van-cell title="个人账单" class="icon icon-zhangdan" value="来一场奇妙的星际之旅" is-link />
        </div>

        <van-cell-group>
            <van-cell title="我的等级" class="icon icon-dengji" value="LV.3" is-link />
            <van-cell title="我的魅力值" class="icon icon-meili" value="33" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell title="我的学历" class="icon icon-xueli" value="新手上路" is-link />
            <van-cell title="我的证书" class="icon icon-zhengshu" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell title="我的积分" class="icon icon-jifen" value="1470" is-link />
            <van-cell title="我的任务" class="icon icon-renwu" value="3个人未完成" is-link />
            <van-cell title="我的相册" class="icon icon-xiangce" value="3个人未完成" is-link />
        </van-cell-group>

        <van-cell title="我的草稿" class="icon icon-caogao" value="1470" is-link />

        <van-grid :column-num="3" class="grid" :border="false">
            <van-grid-item v-for="(value,index) in gridList" :key="index">
                <span :class="`icon icon-${value.icon}`"></span>
                <p>{{value.text}}</p>
            </van-grid-item>
        </van-grid>

        <!-- 底部导航 -->
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from "@/components/global/footerBar";
export default {
    name: "myinfo",
    components: {
        footerBar
    },
    data() {
        return {
            gridList: [
                {
                    text: "我的问题",
                    icon: "wenti"
                },
                {
                    text: "我的回答",
                    icon: "huida"
                },
                {
                    text: "我的分享",
                    icon: "fenxiang"
                },
                {
                    text: "我的帖子",
                    icon: "tiezi"
                },
                {
                    text: "我的背包",
                    icon: "beibao"
                },
                {
                    text: "我的下载",
                    icon: "xiazai"
                },
                {
                    text: "关注/粉丝",
                    icon: "guanzhu"
                },
                {
                    text: "排行榜",
                    icon: "paihangbang"
                }
            ]
        };
    },
    methods: {
        onClickLeft() {
            this.$toast("返回");
        },
        onClickRight() {
            this.$toast("按钮");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo";
</style>