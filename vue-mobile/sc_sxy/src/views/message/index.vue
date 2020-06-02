<template>
    <div class="message">
        <header-bar></header-bar>
        message
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from "@/components/global/headerBar";
import footerBar from "@/components/global/footerBar";
export default {
    name: "message",
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