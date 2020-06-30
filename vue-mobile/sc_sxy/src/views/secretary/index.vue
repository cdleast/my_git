<template>
    <div class="secretary">
        <header-bar title="小秘书"></header-bar>
        <iframe class="iframe" :src="src" width="100%" scrolling="auto"></iframe>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import secretaryApi from "@/api/secretary";
import footerBar from "@/components/global/footer-bar";
export default {
    name: "secretary",
    components: {
        footerBar
    },
    data() {
        return {
            src: secretaryApi.getUrl()
        };
    }
};
</script>

<style lang='scss' scoped>
.secretary {
    width: 100%;
    height: 100%;
}
.iframe {
    width: 100%;
    height: calc(100% - 184px);
    position: relative;
    z-index: 999;
}
</style>