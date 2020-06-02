<template>
    <div class="addres">
        <header-bar></header-bar>
        address
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import headerBar from "@/components/global/headerBar";
import footerBar from "@/components/global/footerBar";
export default {
    name: "addres",
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