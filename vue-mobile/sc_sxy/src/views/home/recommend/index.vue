<template>
    <div class="recommend">
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

        <!-- 热门头条垂直滚动轮播 -->
        <van-notice-bar
            class
            left-icon="volume-o"
            :scrollable="false"
            color="#1989fa"
            background="#F3F7FA"
        >
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item
                    @click="hotHandleClick(item)"
                    v-for="item in hotNewsList"
                    :key="item.ID"
                >
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
                    @click="onCourseDetails(item.ID)"
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

        <!-- 胶囊广告 -->
        <div class="ad-section">
            <van-swipe :autoplay="0" :show-indicators="false">
                <van-swipe-item
                    v-for="items in getCapsule"
                    :key="items.ID"
                    :style="{backgroundImage:'url('+items.FILE[0].FILE_PATH+')'}"
                    @click="tapCapsule(items)"
                ></van-swipe-item>
            </van-swipe>
        </div>

        <!-- 行业优秀课程 -->
        <div class="king-classes">
            <div class="top">
                <span class="title">行业优秀课程</span>
                <span @click="allCourse" class="right-all">全部</span>
            </div>
            <div class="course-list" v-for="items in excellentCourse" :key="items.ID">
                <div class="course-list-item" @click="courseDetails(items.ID)">
                    <div
                        class="course-pic-box van-hairline--surround"
                        :style="{backgroundImage:'url('+items.FILE[0].FILE_PATH+')'}"
                    ></div>
                    <div class="course-list-item-content">
                        <div class="course-title van-ellipsis">{{ items.NAME }}</div>
                        <div class="course-name">{{ items.LECTURER | formatCourseItem }}</div>
                        <div class="course-bottom">
                            <span class="left-price">{{ items.price || '免费' }}</span>
                            <span class="right-count">{{ items.LOOK_COUNT + '人参与' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 企业资讯 -->
        <div class="king-classes">
            <div class="top top-0">
                <span class="title">企业资讯</span>
                <span class="right-all">全部</span>
            </div>

            <van-tabs @click="onChnlList" class="company-info" v-model="active" :ellipsis="false">
                <van-tab v-for="items in chnlList" :key="items.ID">
                    <div
                        class="tab-title"
                        slot="title"
                        @click="onChnlList(items.ID)"
                    >{{ items.CHNL_NAME }}</div>
                    <div class="company-content" v-for="items in inforList" :key="items.ID">
                        <van-image
                            class="item-pic"
                            v-if="items.FILE[0]"
                            width="155"
                            height="100"
                            :src="items.FILE[0].FILE_PATH"
                        />
                        <div class="item-right">
                            <div class="title van-multi-ellipsis--l2">{{ items.TITLE }}</div>
                            <div class="bottom">
                                <span class="left">{{ items.CHNL_NAME }}</span>
                                <span class="right">{{ items.PUBLISH_TIME }}</span>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "recommend",
    data() {
        return {
            swiperList: {}, // 首页轮播图
            hotNews: [], // 热门头条
            goldCourse: [], // 金牌课程
            excellentCourse: [], // 行业优秀课程
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
                    path: "/home/recommend/signin"
                },
                {
                    icon: "paihangbang",
                    text: "排行榜",
                    path: "/home/recommend/ranking"
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
                    path: "/home/recommend/teaching"
                }
                // {
                //     icon: "shequ",
                //     text: "我的社区"
                // },
                // {
                //     icon: "kecheng",
                //     text: "我的课程"
                // }
            ],
            getCapsule: [], // 胶囊广告
            chnlList: [], // 企业资讯顶部根栏目列表
            active: 1, // 企业资讯顶部根栏目列表默认选中项
            CHNL: "", // 企业资讯顶部根栏目列表栏目id
            inforList: [] // 企业资讯列表
        };
    },
    created() {
        this.appGetPicture();
        this.appHotHeadlines();
        this.appGoldCourse();
        this.appGetCapsule();
        this.appExcellentCourse();
        this.appChnlList();
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
    filters: {
        // 过滤行业优秀课程名字以便好渲染
        formatCourseItem(item) {
            const showName = item.SHOW_NAME || "";
            const showDept = item.SHOW_DEPT || "";
            if (showName && showDept) {
                return `${showName}·${showDept}`;
            } else if (showName) {
                return `${showName}`;
            } else if (showDept) {
                return `${showDept}`;
            }
        }
    },
    methods: {
        // 获取轮播图数据
        async appGetPicture() {
            await homeApi.appGetPicture().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.swiperList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取热门头条
        async appHotHeadlines() {
            await homeApi.appHotHeadlines().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.hotNews = res.data;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取金牌课程
        async appGoldCourse() {
            await homeApi.appGoldCourse().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.goldCourse = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取胶囊广告
        async appGetCapsule() {
            await homeApi.appGetCapsule().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.getCapsule = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取行业优秀课程
        async appExcellentCourse() {
            await homeApi.appExcellentCourse().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.excellentCourse = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取企业资讯顶部根栏目列表
        async appChnlList() {
            await homeApi.appChnlList().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.chnlList = res.data._DATA_;
                    this.CHNL = this.chnlList[1] && this.chnlList[1].ID; // 拿到id
                    this.appInforList(this.CHNL); // 拿到id后调用方法
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取企业资讯列表
        async appInforList(ID) {
            const data = {
                PAGE: 1,
                CHNL: ID
            };
            await homeApi.appInforList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.inforList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 轮播图跳转第三方链接
        jumpUrl(item) {
            window.location.href = item;
        },

        // 热门头条点击跳转页面
        hotHandleClick(item) {
            const type = item.type;
            switch (type) {
                case "course":
                    this.courseDetails(item.ID);
                    break;
                case "knowledge":
                    break;
                case "merge":
                    this.colleagueDetails(item.ID);
                    break;
                default:
                    this.$toast("敬请期待");
            }
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
            this.$router.push("/home/recommend/course-all");
        },

        // 跳转课程详情
        onCourseDetails(ID) {
            this.$router.push({
                path: "/home/recommend/course-details",
                query: {
                    ID: ID
                }
            });
        },

        // 跳转同事圈详情
        colleagueDetails(ID) {
            this.$router.push({
                path: "/home/found/colleague-details",
                query: {
                    ID: ID
                }
            });
        },

        // 胶囊广告跳转
        tapCapsule(item) {
            switch (item.TYPE) {
                // case "LINK": // 超链接
                //     break;
                case "EXEXM_COURSE_TRAINING_PLAN": // 课程
                    this.onCourseDetails(item.ID);
                    break;
                case "EXEXM_KNOWLEDGE_LIST": // 知识库
                    this.$router.push({
                        path: "/home/recommend/knowledge-details",
                        query: {
                            ID: item.ID
                        }
                    });
                    break;
                // case "EXEXM_REPOSITORY_TYPE": // 知识分类
                //     break;
            }
        },

        // 企业资讯切换标签更改id
        onChnlList(ID) {
            setTimeout(() => {
                this.appInforList(ID);
            }, 10);
        }
    }
};
</script>

<style lang='scss' scoped>
</style>