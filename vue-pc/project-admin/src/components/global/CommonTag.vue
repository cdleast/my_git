<template>
    <div class="common-tab">
        <el-tag
            :key="index"
            v-for="(tag, index) in tags"
            :closable="tag.name !== 'home'"
            size="medium"
            :disable-transitions="false"
            :effect="$route.name === tag.name ? 'dark' : 'plain'"
            @close="handleClose(tag)"
            @click="changeMenu(tag)"
        >{{ tag.label }}</el-tag>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "common-tab",
    data() {
        return {};
    },
    computed: {
        // 获取vuex中打开的页面
        ...mapState({
            tags: (state) => state.tags.tagsList,
        }),
    },
    methods: {
        // 拿到vuex中定义的关闭删除标签方法
        ...mapMutations({
            close: "closeTag",
        }),

        // 删除标签
        handleClose(item) {
            // 拿到点击删除标签的前一个元素传给面包屑
            let result = this.tags.findIndex((val) => {
                return val.name === item.name;
            });
            let data = this.tags[result - 1]
            this.$store.commit("selectMenu", data);

            // 调用vuex中的删除方法并传入点击的数据
            this.close(item);
        },

        // 点击标签切换路由
        changeMenu(item) {
            this.$router.push({ name: item.name });
            this.$store.commit("selectMenu", item);
        },
    },
};
</script>

<style lang='scss' scoped>
.common-tab {
    margin-bottom: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>