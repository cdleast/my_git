<template>
    <div class="video">
        <div class="banner-wrap">
            <common-banner :banners="banners"></common-banner>
        </div>
    </div>
</template>

<script>
import CommonBanner from "@/components/global/CommonBanner";
export default {
    name: "VideoManage",
    components: {
        CommonBanner,
    },
    data() {
        return {
            banners: [
                {
                    url: require("../../assets/images/banner/banner1.jpg"),
                },
                {
                    url: require("../../assets/images/banner/banner2.jpg"),
                },
                {
                    url: require("../../assets/images/banner/banner3.jpg"),
                },
            ],
        };
    },
};
</script>

<style lang='scss' scoped>
.banner-wrap{
    width: 500px;
    margin: 0 auto;
}
</style>