<template>
    <div class="message">
        <header-bar title="消息"></header-bar>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from "@/components/global/footer-bar";
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