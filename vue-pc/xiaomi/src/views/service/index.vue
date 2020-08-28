<template>
    <div class="service">
        <div @mouseenter="hoverEnter" @mouseleave="hoverLeave">
            <swiper
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
            >
                <swiper-slide
                    v-for="(item,index) in carousel"
                    :key="index"
                    :style="{backgroundImage:'url('+item.url+')'}"
                ></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: "service",
    data() {
        return {
            carousel: [], // 轮播图
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, // 允许点击小圆点跳转
                },
                autoplay: {
                    delay: 3000, // 自动切换的时间间隔
                    disableOnInteraction: false,
                },
                grabCursor: true, // 小手图标
                loop: true,
            },
        };
    },
    created() {
        this.getServiceDataList();
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        this.swiper.slideTo(3, 1000, false);
    },
    methods: {
        // 获取数据
        async getServiceDataList() {
            await this.$api.getServiceDataList().then((res) => {
                this.carousel = res.data.carousel;
            });
        },

        // 鼠标移入
        hoverEnter() {

        },

        // 鼠标移出
        hoverLeave() {

        },
    },
};
</script>

<style lang='scss' scoped>
.service /deep/ {
    .swiper-container {
        height: 250px;

        .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
        }
    }
}
</style>