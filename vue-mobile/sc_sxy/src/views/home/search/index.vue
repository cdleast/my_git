<template>
    <div class="search">
        <header-bar title="搜索"></header-bar>

        <!-- 搜索框 -->
        <van-search
            @search="searchGlobal"
            v-model="search"
            shape="round"
            left-icon="false"
            placeholder="请输入搜索关键词"
        />

        <div class="search-box">
            <div class="title">轻触图标可指定搜索范围</div>
            <div class="cate">
                <div class="cate-item" v-for="(item,index) in cateData" :key="index">
                    <van-image round width="40" height="40" :src="item.src" />
                    <div class="cate-name">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "search",
    data() {
        return {
            search: "", // 搜索框内容
            cateData: [
                {
                    text: "课程",
                    src: require("@/assets/images/search/kecheng.png")
                },
                {
                    text: "联系人",
                    src: require("@/assets/images/search/lianxiren.png")
                },
                {
                    text: "同事圈",
                    src: require("@/assets/images/search/tongshiquan.png")
                },
                {
                    text: "知识库",
                    src: require("@/assets/images/search/zhishiku.png")
                }
            ]
        };
    },
    methods: {
        searchGlobal() {}
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>