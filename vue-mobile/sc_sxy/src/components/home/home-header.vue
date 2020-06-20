<template>
    <div class="home-header">
        <div class="left">
            <i @click="switchGroup" class="icon icon-zhankai"></i>
        </div>
        <div class="center">
            <router-link to='/home/recommend' tag="span">推荐</router-link>
            <router-link to='/home/found' tag="span">发现</router-link>
            <router-link to='/home/learning' tag="span">学习</router-link>
        </div>
        <div class="right">
            <i class="icon icon-sousuo"></i>
            <i class="icon icon-saoyisao"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-header",
    data() {
        return {};
    },
    methods:{
        // 切换组织，调用父组件弹窗
        switchGroup(){
            this.$parent.onSwitchGroup();
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>