<template>
    <div class="myinfo">
        <!-- 头部 -->
        <div class="header">
            <!-- 头部导航标题 -->
            <van-nav-bar title="我的" right-text="按钮" @click-right="onClickRight" :border="false">
                <template #right>
                    <van-icon name="setting-o" />
                </template>
            </van-nav-bar>

            <div class="users">
                <van-image round class="user-info" src="https://img.yzcdn.cn/vant/cat.jpeg" />
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
            <van-cell
                to="/myinfo/my-level"
                title="我的等级"
                class="icon icon-dengji"
                value="LV.3"
                is-link
            />
            <van-cell
                to="/myinfo/my-charm"
                title="我的魅力值"
                class="icon icon-meili"
                value="33"
                is-link
            />
        </van-cell-group>

        <van-cell-group>
            <van-cell
                to="/myinfo/my-education"
                title="我的学历"
                class="icon icon-xueli"
                value="新手上路"
                is-link
            />
            <van-cell to="/myinfo/my-certificate" title="我的证书" class="icon icon-zhengshu" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell
                to="/myinfo/my-integral"
                title="我的积分"
                class="icon icon-jifen"
                value="1470"
                is-link
            />
            <van-cell
                to="/myinfo/my-task"
                title="我的任务"
                class="icon icon-renwu"
                value="3个人未完成"
                is-link
            />
            <van-cell
                to="/myinfo/my-photo"
                title="我的相册"
                class="icon icon-xiangce"
                value="3个人未完成"
                is-link
            />
        </van-cell-group>

        <van-cell to="/myinfo/my-draft" title="我的草稿" class="icon icon-caogao" value="1470" is-link />

        <van-grid :column-num="3" class="grid" :border="false">
            <van-grid-item :to="item.router" v-for="(item,index) in gridList" :key="index">
                <span :class="`icon icon-${item.icon}`"></span>
                <p>{{item.text}}</p>
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
                    icon: "wenti",
                    router: "/myinfo/my-problem"
                },
                {
                    text: "我的回答",
                    icon: "huida",
                    router: "/myinfo/my-answer"
                },
                {
                    text: "我的分享",
                    icon: "fenxiang",
                    router: "/myinfo/my-share"
                },
                {
                    text: "我的帖子",
                    icon: "tiezi",
                    router: "/myinfo/my-post"
                },
                {
                    text: "我的背包",
                    icon: "beibao",
                    router: "/myinfo/my-backpack"
                },
                {
                    text: "我的下载",
                    icon: "xiazai",
                    router: "/myinfo/my-download"
                },
                {
                    text: "关注/粉丝",
                    icon: "guanzhu",
                    router: "/myinfo/my-fans"
                },
                {
                    text: "排行榜",
                    icon: "paihangbang",
                    router: "/myinfo/my-ranking"
                }
            ]
        };
    },
    methods: {
        // 跳转我的设置
        onClickRight() {
            this.$router.push("/myinfo/my-set");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>