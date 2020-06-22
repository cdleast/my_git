<template>
    <div class="knowledge-details">
        <header-bar title="知识详情"></header-bar>
        <div class="details-content" v-for="items in knowledgeDetails" :key="items.ID">
            <div class="details-title">{{ items.NAME }}</div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "knowledge-details",
    data() {
        return {
            ID: this.$route.query.ID, // 传过来的胶囊广告ID
            knowledgeDetails: [] // 知识库详情
        };
    },
    created() {
        this.appEXEXM_KNOWLEDGE();
    },
    methods: {
        // 知识库详情
        async appEXEXM_KNOWLEDGE() {
            await homeApi.appEXEXM_KNOWLEDGE(this.ID).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knowledgeDetails = res.data;
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