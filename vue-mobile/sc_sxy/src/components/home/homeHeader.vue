<template>
    <div class="homeHeader">
        <div class="left">
            <i class="icon icon-zhankai"></i>
        </div>
        <div class="center">
            <router-link to='/home/home-recommend' tag="span">推荐</router-link>
            <router-link to='/home/home-learning' tag="span">发现</router-link>
            <router-link to='/home/home-found' tag="span">学习</router-link>
        </div>
        <div class="right">
            <i class="icon icon-sousuo"></i>
            <i class="icon icon-saoyisao"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "homeHeader",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>