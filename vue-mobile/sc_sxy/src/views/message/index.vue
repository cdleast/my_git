<template>
    <div class="message">
        message
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from "@/components/global/footerBar";
export default {
    name: "message",
    components: {
        footerBar
    },
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>