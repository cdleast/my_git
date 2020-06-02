<template>
    <div class="loginGuide">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in dataList" :key="item.ID">
                <h2>{{item.NAME}}</h2>
                <div class="my-swipe-child" v-for="list in item.FILE" :key="list.DATA_ID">
                    <img :src="list.FILE_PATH" alt="">
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import loginApi from "@/api/login";
export default {
    name: "loginGuide",
    data() {
        return {
            dataList:{}
        };
    },
    created() {
        this.getLoginGuide();
    },
    methods: {
        // 获取登录引导页数据
        getLoginGuide() {
            loginApi.loginGuide().then(res => {
                this.dataList = res.data._DATA_;
                // console.log(res.data._DATA_);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/login";
</style>