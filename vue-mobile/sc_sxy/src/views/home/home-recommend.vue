<template>
    <div class="home-recommend">
        <!-- 轮播图 -->
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide :to="items.DATA" v-for="items in this.swiperList" :key="items.ID">
                <div
                    v-for="item in items.FILE"
                    :key="item.DATA_ID"
                    :style="{backgroundImage:'url('+item.FILE_PATH+')'}"
                ></div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!-- banner -->
        <van-row class="banner" type="flex" justify="space-around">
            <van-col v-for="(item,index) in banner" :key="index">
               <span :class="`icon icon-${item.icon}`"></span>
                <p>{{item.text}}</p>
            </van-col>
        </van-row>


    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "home-recommend",
    data() {
        return {
            swiperList: {}, // 轮播图数据
            swiperOptions: {
                direction: "horizontal", // 水平方向(horizontal)或垂直方向(vertical)
                loop: true, // 开启循环
                autoplay: {
                    delay: 2000, // 切换间隔
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
                    text: "我的签到"
                },
                {
                    icon: "paihangbang",
                    text: "排行榜"
                },
                {
                    icon: "renwu",
                    text: "我的任务"
                },
                {
                    icon: "shequ",
                    text: "我的社区"
                },
                {
                    icon: "kecheng",
                    text: "我的课程"
                }
            ]
        };
    },
    created() {
        this.getHomeSwiper();
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
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
        getHomeSwiper() {
            homeApi.homeSwiper().then(res => {
                this.swiperList = res.data._DATA_;
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>