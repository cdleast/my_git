<template>
    <div class="home">
        <home-header></home-header>

        <div class="contaner">
            <router-view />
        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script>
import homeHeader from "@/components/home/homeHeader";
import footerBar from "@/components/global/footerBar";
export default {
    name: "home",
    components:{
        homeHeader,
        footerBar
    },
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>