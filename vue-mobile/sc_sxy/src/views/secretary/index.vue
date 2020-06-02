<template>
    <div class="secretary">
        <header-bar></header-bar>
        secretary
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from "@/components/global/headerBar";
import footerBar from "@/components/global/footerBar";
export default {
    name: "secretary",
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