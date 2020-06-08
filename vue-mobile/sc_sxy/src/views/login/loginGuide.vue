<template>
    <div class="loginGuide">
        <div class="count-down" v-show="back">
            <span class="jump" @click="jump()">
                点击跳转
                <b>{{num}}</b>
            </span>

            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(items,index) in loginGuideList" :key="index">
                    <div class="shopImg" :style="{backgroundImage:'url('+items.FILE[0].FILE_PATH+')'}"></div>
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import loginApi from "@/api/login";
export default {
    name: "loginGuide",
    data() {
        return {
            loginGuideList: [], // 开屏广告数据
            timer: null, // 开屏广告定时器
            back: true, // 开屏广告状态
            num: 5 // 开屏广告倒计时
        };
    },
    created() {
        this.getLoginGuide();
    },
    methods: {
        // 获取开屏广告数据
        getLoginGuide() {
            loginApi.loginGuide().then(res => {
                this.loginGuideList = res.data._DATA_;
            });
            this.theTail();
        },
        // 开始开屏广告
        theTail() {
            this.back = true;
            this.timer = setInterval(this.play, 1000);
        },
        // 开始倒计时
        play() {
            this.num--;
            if (this.num == 0) {
                this.jump();
            }
        },
        // 关闭开屏广告
        jump() {
            this.back = false;
            clearInterval(this.timer); // 清除定时器
            this.$router.push("/home");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/login";
</style>