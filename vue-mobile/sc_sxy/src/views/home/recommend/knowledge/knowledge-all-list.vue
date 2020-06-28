<template>
    <div class="knowledge-all-list">
        <header-bar :title="title"></header-bar>

        <knowledge-item-list :knAllList="knAllList"></knowledge-item-list>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import knowledgeItemList from "@/components/home/knowledge-item-list";
export default {
    name: "knowledge-all-list",
    components: {
        knowledgeItemList
    },
    data() {
        return {
            title: this.$route.query.NAME, // 标题
            knAllList: [] // 知识分类下知识列表
        };
    },
    created() {
        this.appKnAllList();
    },
    methods: {
        // 获取知识分类下知识列表
        async appKnAllList() {
            let data = {
                PAGE: "1",
                NUM: "10",
                IS_BOUTIQUE: "1"
            };
            await homeApi.appKnAllList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knAllList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.knowledge-all-list /deep/{
    .van-cell{
        display: none;
    }
}
</style>