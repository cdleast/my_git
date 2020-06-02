<template>
    <div class="myinfo">
        <header-bar></header-bar>
        myinfo
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from "@/components/global/headerBar";
import footerBar from "@/components/global/footerBar";
export default {
    name: "myinfo",
    components: {
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