<template>
    <div class="swiper-container" :class="swipeid">
        <div class="swiper-wrapper">
            <!-- 存放具体的轮播内容 -->
            <slot name="swiper-con"></slot>
        </div>
        <!-- 分页器 -->
        <div :class="{'swiper-pagination':pagination}"></div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    name: "swiper",
    props: {
        // 轮播容器class属性的类名
        swipeid: {
            type: String,
            default: ""
        },
        // 图片的 切换效果，默认为”slide”，还可设置为”fade”, “cube”, “coverflow”,”flip”
        effect: {
            type: String,
            default: "slide"
        },
        // 设置为true 则开启loop模式。loop模式：会在原本图片前后复制若干个图片并在合适的时候切换，让Swiper看起来是循环的
        loop: {
            type: Boolean,
            default: false
        },
        // 图片的滑动方向，可设置水平(horizontal)或垂直(vertical)
        direction: {
            type: String,
            default: "horizontal"
        },
        // 使用分页导航
        pagination: {
            type: Boolean,
            default: true
        },
        // 分页器样式类型，可设置为”bullets”, “fraction”, “progressbar”, “custom”
        paginationType: {
            type: String,
            default: "bullets"
        },
        // 设置为true启动自动切换，并使用默认的切换设置
        autoPlay: {
            type: Number,
            default: 3000
        }
    },
    mounted() {
        var that = this;
        this.dom = new Swiper("." + that.swipeid, {
            //循环
            loop: that.loop,
            //分页器
            pagination: {
                el: ".swiper-pagination",
                bulletClass: "swiper-pagination-bullet"
            },
            //分页类型
            paginationType: that.paginationType,
            //自动播放
            autoPlay: that.autoPlay,
            //方向
            direction: that.direction,
            //特效
            effect: that.effect,
            //用户操作swiper之后，不禁止autoplay
            disableOnInteraction: false,
            //修改swiper自己或子元素时，自动初始化swiper
            observer: true,
            //修改swiper的父元素时，自动初始化swiper
            observeParents: true
        });
    }
};
</script>

<style lang='scss' scoped>
@import '../../../node_modules/swiper/css/swiper.min.css';
.swiper-container {
    width: 100%;
}
.swiper-slide {
    height: 8rem;
    overflow: hidden;
    position: relative;
}
.swiper-slide {
    div {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        position: absolute;
        background-color: blue;
    }
    img {
        top: 50%;
        position: relative;
        transform: translate(0, -50%);
    }
    h3 {
        width: 70%;
        color: #fff;
        margin: 0;
        font-size: 0.5rem;
        line-height: 1rem;
        right: 5%;
        bottom: 2.6rem;
        text-align: right;
        position: absolute;
        text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        &:before {
            content: "";
            width: 3rem;
            bottom: -0.6rem;
            right: 0;
            display: block;
            position: absolute;
            border: 2px solid yellow;
        }
    }
}
.swiper-pagination-bullet-active {
    background: #fff;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 1rem;
    width: 95%;
    text-align: right;
}
</style>