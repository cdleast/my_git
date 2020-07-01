<template>
    <div class="enterprise-search">
        <header-bar title="搜索"></header-bar>
        <van-search
            @search="onSearch"
            left-icon="false"
            shape="round"
            v-model="value"
            placeholder="请输入搜索关键词"
        />

        <enterpriseAnnouncementList v-if="search.length" :dataList="search"></enterpriseAnnouncementList>
        <van-empty v-else description="暂无数据" />
    </div>
</template>

<script>
import messageApi from "@/api/message";
import enterpriseAnnouncementList from "@/components/message/enterprise-announcement-list";
export default {
    name: "enterprise-search",
    components: {
        enterpriseAnnouncementList
    },
    data() {
        return {
            value: "",
            search: []
        };
    },
    methods: {
        // 企业公告搜索
        async onSearch() {
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true,
                SEARCH: this.value
            };
            await messageApi.appSearch(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.value = "";
                    this.search = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>