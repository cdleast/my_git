<template>
    <div class="bamner-container" @mouseenter="autoStop" @mouseleave="autoStart">
        <!-- 图片容器 -->
        <ul
            class="images"
            :style="{
            width: banners.length * 100 + '%',
            marginLeft: -cur * 100 + '%'
            }"
        >
            <li v-for="(item,index) in banners" :key="index">
                <!-- <div :style="{backgroundImage:'url('+item.url+')',height:100+'%'}"></div> -->
                <img :src="item.url" />
            </li>
        </ul>

        <!-- 指示器 -->
        <ul class="dots">
            <li
                v-for="(item,index) in banners"
                :key="index"
                :class="{active:index===cur}"
                @click="cur=index"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "common-banner",
    props: {
        // 数据数组
        banners: {
            type: Array, // 属性类型是数组
            required: true, // 必须要传递该属性
        },
        // 切换时间
        duration: {
            type: Number,
            default: 2000, // 属性默认值
        },
    },
    data() {
        return {
            cur: 0, // 当前显示第几张
            timer: null,
        };
    },
    created() {
        this.autoStart();
    },
    methods: {
        // 自动开始切换
        autoStart() {
            // 判断是否启动计时器，如果启动不走下面的
            if (this.timer) {
                return;
            }

            this.timer = setInterval(() => {
                this.cur = (this.cur + 1) % this.banners.length;
            }, this.duration);
        },

        // 停止自动切换
        autoStop() {
            clearInterval(this.timer);
            this.timer = null;
        },
    },
    destroyed() {
        this.autoStop();
    },
};
</script>

<style lang='scss' scoped>
.bamner-container {
    height: 300px;
    position: relative;
    overflow: hidden;
}
.bamner-container li {
    display: block;
    float: left;
    width: 500px;
}
.images {
    height: 100%;
    transition: 0.5s;
}
.dots {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
}
.dots li {
    width: 10px;
    height: 10px;
    margin: 0 3px;
    border-radius: 50%;
    border: 1px solid #fff;
    cursor: pointer;
}
.dots li.active {
    background: #fff;
}
</style>