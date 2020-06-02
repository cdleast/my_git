<template>
    <div class="home">
        <header-bar></header-bar>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from "@/components/global/headerBar";
import footerBar from "@/components/global/footerBar";
export default {
    name: "home",
    components:{
        headerBar,
        footerBar
    },
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>