<template>
    <div class="home-recommend">
        <!-- 轮播图 -->
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="items in this.swiperList" :key="items.ID">
                <div
                    @click="jumpUrl(items.DATA)"
                    v-for="item in items.FILE"
                    :key="item.DATA_ID"
                    :style="{backgroundImage:'url('+item.FILE_PATH+')'}"
                ></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!-- banner -->
        <van-row class="banner" type="flex" justify="space-around">
            <van-col @click="jumpBannerItem(item.path)" v-for="(item,index) in banner" :key="index">
                <span :class="`icon icon-${item.icon}`"></span>
                <p>{{item.text}}</p>
            </van-col>
        </van-row>

        <!-- 垂直滚动轮播 -->
        <van-notice-bar
            class
            left-icon="volume-o"
            :scrollable="false"
            color="#1989fa"
            background="#F3F7FA"
        >
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item v-for="item in hotNewsList" :key="item.ID">
                    <van-image round width="35" height="35" :src="item.src" />
                    <span class="title">{{ item.title }}</span>
                    <span class="label">{{ item.typeName }}</span>
                </van-swipe-item>
            </van-swipe>
        </van-notice-bar>

        <!-- 金牌课程 -->
        <div class="king-classes">
            <div class="top">
                <span class="title">金牌课程</span>
                <span @click="allCourse" class="right-all">全部</span>
            </div>

            <van-swipe
                class="my-swipe"
                :autoplay="0"
                indicator-color="white"
                :loop="false"
                :width="280"
                :show-indicators="false"
            >
                <van-swipe-item
                    @click="courseDetails(item)"
                    v-for="item in goldCourse"
                    :key="item.ID"
                >
                    <div class="items">
                        <div
                            class="items-img"
                            :style="{backgroundImage:'url('+item.FILE[0].FILE_PATH+')'}"
                        ></div>
                        <div class="items-info">{{item.NAME}}</div>
                        <div class="items-user">
                            <span>{{ item.LECTURER_ID__NAME }}</span>
                            <span>{{ item.LECTURER.SHOW_DEPT }}</span>
                        </div>
                        <div class="items-bottom">
                            <span>{{ item.price || '免费' }}</span>
                            <span class="right">{{ item.LOOK_COUNT + '人参与' }}</span>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "home-recommend",
    data() {
        return {
            swiperList: {}, // 首页轮播图
            hotNews: [], // 热门头条
            goldCourse: [], // 金牌课程
            swiperOptions: {
                direction: "horizontal", // 水平方向(horizontal)或垂直方向(vertical)
                loop: true, // 开启循环
                autoplay: {
                    delay: 3000, // 切换间隔
                    disableOnInteraction: false // 用户操作swiper后，是否禁止autoplay
                },
                slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)
                spaceBetween: 10, // slide之间的距离单位px
                centeredSlides: true, // 若为真，那么活动块会居中，而非默认状态下的居左
                loopAdditionalSlides: 100,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: ".swiper-pagination" // 分页器
                }
            },
            banner: [
                {
                    icon: "qiandao",
                    text: "签到",
                    path: "/home/home-recommend/recommend-signin"
                },
                {
                    icon: "paihangbang",
                    text: "排行榜",
                    path: "/home/home-recommend/recommend-ranking"
                },
                {
                    icon: "renwu",
                    text: "任务"
                },
                {
                    icon: "shipin",
                    text: "短视频"
                },
                {
                    icon: "zhibo",
                    text: "直播",
                    path: "/home/home-recommend/recommend-teaching"
                }
                // {
                //     icon: "shequ",
                //     text: "我的社区"
                // },
                // {
                //     icon: "kecheng",
                //     text: "我的课程"
                // }
            ]
        };
    },
    created() {
        this.getHomeSwiper();
        this.getHotInfo();
        this.getGoldCourse();
    },
    computed: {
        // 首页轮播图
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },

        // 热门头条整理数据，便于渲染展示
        hotNewsList() {
            const courseArr =
                (this.hotNews.COURSE &&
                    this.hotNews.COURSE.map(item => {
                        item.typeName = this.hotNews.COURSE_NAME;
                        item.type = "course";
                        item.title = item.NAME;
                        // Object.keys方法，成员是参数对象自身的（不含继承的）所有可遍历（ enumerable ）属性的键名
                        if (
                            Object.keys(item).length > 0 &&
                            Object.keys(item.LECTURER).length > 0
                        ) {
                            item.src = item.LECTURER.IMAGE_FILE[0].FILE_PATH;
                        }
                        return item;
                    })) ||
                [];
            const knowledgeArr =
                (this.hotNews.KNOWLEDGE &&
                    this.hotNews.KNOWLEDGE.map(item => {
                        item.typeName = this.hotNews.KNOWLEDGE_NAME;
                        item.type = "knowledge";
                        item.src = item.USER_IMG[0].FILE_PATH;
                        item.title = item.NAME;
                        return item;
                    })) ||
                [];
            const mergeArr =
                (this.hotNews.MERGE &&
                    this.hotNews.MERGE.map(item => {
                        item.typeName = this.hotNews.MERGE_NAME;
                        item.type = "merge";
                        item.src = item.USER_IMG[0].FILE_PATH;
                        item.title = item.CONTENT;
                        return item;
                    })) ||
                [];
            const hotNewsArr = [...courseArr, ...knowledgeArr, ...mergeArr];
            return hotNewsArr;
        }
    },
    mounted() {
        /**
         * 控制Swiper切换到指定slide
         * index 必选 指定将要切换到的slide的索引
         * speed 可选 切换速度(单位ms)
         * runCallbacks 可选 设置为false时不会触发transition回调函数
         */
        this.swiper.slideTo(1, 1000, false);
    },
    methods: {
        // 获取轮播图数据
        async getHomeSwiper() {
            await homeApi.homeSwiper().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.swiperList = res.data._DATA_;
                } else {
                    this.toast(_MSG_);
                }
            });
        },

        // 获取热门头条
        async getHotInfo() {
            await homeApi.hotInfo().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.hotNews = res.data;
                } else {
                    this.toast(_MSG_);
                }
            });
        },

        // 获取金牌课程
        async getGoldCourse() {
            await homeApi.goldCourse().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.goldCourse = res.data._DATA_;
                } else {
                    this.toast(_MSG_);
                }
            });
        },

        // 轮播图跳转第三方链接
        jumpUrl(item) {
            window.location.href = item;
        },

        // banner跳转子页面
        jumpBannerItem(item) {
            if (item) {
                this.$router.push(item);
            } else {
                this.$toast("敬请期待");
            }
        },

        // 跳转全部课程
        allCourse() {
            this.$router.push("/home/home-recommend/recommend-all-course");
        },

        // 跳转课程详情
        courseDetails(item) {
            this.$router.push({
                path: "/home/home-recommend/recommend-course-details",
                query: {
                    ID: item.ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>