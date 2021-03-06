<template>
    <div class="myinfo">
        <!-- 头部 -->
        <div class="header">
            <!-- 头部导航标题 -->
            <header-bar title="我的" :leftArrow="false">
                <div slot="right">
                    <span @click="$router.push('/myinfo/set')" class="icon icon-shezhi"></span>
                </div>
            </header-bar>

            <div class="users">
                <van-image
                    v-for="(item,index) in getUser.IMAGE_FILE"
                    :key="index"
                    round
                    class="user-info"
                    :src="item.FILE_PATH"
                />
                <div class="user-desp" v-if="getUser">
                    <h2>{{getUser.USER_NAME}}</h2>
                    <p>{{getUser.EX_ODEPT_CODE__NAME}}</p>
                </div>
            </div>
        </div>

        <div class="part">
            <van-row type="flex" justify="space-around">
                <van-col span="6" @click="$router.push('/home/recommend/course-all')">
                    <p class="num">{{ COURSE_NUM }}</p>
                    <p class="desp">我的课程</p>
                </van-col>
                <van-col span="6" @click="$toast('敬请期待')">
                    <p class="num">0</p>
                    <p class="desp">我的考试</p>
                </van-col>
                <van-col span="6" @click="$router.push('/home/recommend/knowledge-all')">
                    <p class="num">{{ COLLECTION_NUM }}</p>
                    <p class="desp">我的收藏</p>
                </van-col>
            </van-row>
            <van-cell @click="$toast('敬请期待')" title="个人账单" class="icon icon-zhangdan" is-link />
        </div>

        <van-cell-group>
            <van-cell
                to="/myinfo/level"
                title="我的等级"
                class="icon icon-dengji"
                value="LV.0"
                is-link
            />
            <van-cell
                to="/myinfo/charm"
                title="我的魅力值"
                class="icon icon-meili"
                :value="myCharisma"
                is-link
            />
        </van-cell-group>

        <van-cell-group>
            <van-cell to="/myinfo/education" title="我的学历" class="icon icon-xueli" is-link />
            <van-cell to="/myinfo/certificate" title="我的证书" class="icon icon-zhengshu" is-link />
            <van-cell to="/myinfo/achievement" title="我的成就" class="icon icon-zhankai" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell
                to="/myinfo/integral"
                title="我的积分"
                class="icon icon-jifen"
                :value="integralNum"
                is-link
            />
            <van-cell to="/myinfo/task" title="我的任务" class="icon icon-renwu" is-link />
            <van-cell to="/myinfo/photo" title="我的相册" class="icon icon-xiangce" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell to="/myinfo/draft" title="我的草稿" class="icon icon-caogao" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell title="关于版本" class="icon icon-caogao" :value="`版本7.0.8`"/>
        </van-cell-group>

        <!-- 九宫格部分 -->
        <van-grid :column-num="3" class="grid" :border="false">
            <van-grid-item :to="item.router" v-for="(item,index) in gridList" :key="index">
                <span :class="`icon icon-${item.icon}`"></span>
                <p>{{ item.text }}</p>
            </van-grid-item>
        </van-grid>

        <!-- 底部导航 -->
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from "@/components/global/footer-bar";
import myinfoApi from "@/api/myinfo";
export default {
    name: "myinfo",
    components: {
        footerBar
    },
    data() {
        return {
            COURSE_NUM: 0, // 我的课程数量
            COLLECTION_NUM: 0, // 我的收藏数量
            myCharisma: 0, // 我的魅力值数量
            integralNum: 0, // 我的积分总数
            gridList: [
                {
                    text: "我的问题",
                    icon: "wenti",
                    router: "/myinfo/problem"
                },
                {
                    text: "我的回答",
                    icon: "huida",
                    router: "/myinfo/answer"
                },
                {
                    text: "我的分享",
                    icon: "fenxiang",
                    router: "/myinfo/share"
                },
                {
                    text: "我的帖子",
                    icon: "tiezi",
                    router: "/myinfo/post"
                },
                {
                    text: "我的背包",
                    icon: "beibao",
                    router: "/myinfo/backpack"
                },
                {
                    text: "我的下载",
                    icon: "xiazai",
                    router: "/myinfo/download"
                },
                {
                    text: "关注/粉丝",
                    icon: "guanzhu",
                    router: "/myinfo/fans"
                },
                {
                    text: "排行榜",
                    icon: "paihangbang",
                    router: "/home/recommend/ranking"
                }
            ]
        };
    },
    created() {
        this.appCourseSum();
        this.appMyCharisma();
        this.appIntegralSum();
    },
    computed: {
        // 获取用户信息
        getUser() {
            return this.$store.getters.user._DATA_[0];
        }
    },
    methods: {
        // 获取我的课程数量/我收藏的数量
        async appCourseSum() {
            await myinfoApi.appCourseSum().then(res => {
                if (res.status === 200) {
                    this.COURSE_NUM = res.data.COURSE_NUM;
                    this.COLLECTION_NUM = res.data.COLLECTION_NUM;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 我的魅力值数量
        async appMyCharisma() {
            await myinfoApi.appMyCharisma().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.myCharisma = parseInt(res.data._DATA_[0]._PK_);
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

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
        }
    },
    destroyed() {
        // 跳转我的课程的时候显示我的课程列表
        this.EventBus.$emit("tabActive", 2);
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>