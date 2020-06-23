<template>
    <div class="information-details">
        <header-bar title="企业资讯详情"></header-bar>

        <div class="details-content">
            <div class="details-title">{{ information.TITLE }}</div>
            <div class="details-type-time">
                <span class="details-type">{{ information.CHNL_NAME }}</span>
                <span class="details-time">{{ information.PUBLISH_TIME }}</span>
            </div>
            <div class="details-main" v-html="information.CONTENT"></div>
            <div class="details-img" :style="{backgroundImage:'url('+information.FILE[0].FILE_PATH+')'}"></div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "information-details",
    data() {
        return {
            information: [] // 详情列表
        };
    },
    created() {
        this.appInformation();
    },
    methods: {
        async appInformation() {
            let data = {
                ID: this.$route.query.ID
            };
            await homeApi.appInformation(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.information = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
                console.log(this.information);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "@/styles/home";
</style>