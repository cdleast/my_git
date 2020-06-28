<template>
    <div class="tabs">
         <header-bar :title="title"></header-bar>
        <van-search
            @search="searchContent"
            left-icon="false"
            shape="round"
            v-model="search"
            placeholder="请输入搜索关键词"
        />
        <van-tabs v-model="active" @click="onClick">
            <van-tab title="标签 1">内容 1</van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
    name: "tabs",
    data() {
        return {
            title:'第一个',
            search: "",
            active: 0
        };
    },
    props: {
        
    },
    methods: {
        // 搜索内容
        searchContent() {},
        // tab切换事件，改变头部标题
        onClick(name, title) {
            this.title = title;
            this.active = name;
        }
    }
};
</script>

<style lang='scss' scoped>
</style>