<template>
    <div class="enterprise-announcement">
        <header-bar title="企业公告">
            <span @click="$router.push('/message/enterprise-search')" slot="right" class="icon icon-sousuo"></span>
        </header-bar>

        <enterpriseAnnouncementList :dataList="getCapsule"></enterpriseAnnouncementList>
    </div>
</template>

<script>
import messageApi from "@/api/message";
import enterpriseAnnouncementList from "@/components/message/enterprise-announcement-list";
export default {
    name: "enterprise-announcement",
    components:{
        enterpriseAnnouncementList
    },
    data() {
        return {
            getCapsule: [] // 企业公告列表
        };
    },
    created() {
        this.appGetCapsule();
    },
    methods: {
        // 企业公告列表
        async appGetCapsule() {
            await messageApi.appGetCapsule().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.getCapsule = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/message";
</style>