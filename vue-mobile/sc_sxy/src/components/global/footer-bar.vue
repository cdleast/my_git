<template>
    <van-tabbar class="footerBar" v-model="active" placeholder>
        <van-tabbar-item to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/message" name="message" icon="chat-o">消息</van-tabbar-item>
        <van-tabbar-item to="/addres" name="addres" icon="friends-o">通信录</van-tabbar-item>
        <van-tabbar-item to="/secretary" name="secretary" icon="cluster-o">小秘书</van-tabbar-item>
        <van-tabbar-item to="/myinfo" name="myinfo" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    name: "footerBar",
    data() {
        return {
            active: this.$route.matched[0].name
        };
    },
    // mounted(){
    //     this.getPath();
    // },
    // methods:{
    //     // 获取主路由
    //     getPath(){
    //         const path = this.$route.matched[0].name;
    //         this.active = path;
    //     }
    // }
};
</script>

<style lang='scss' scoped>
</style>