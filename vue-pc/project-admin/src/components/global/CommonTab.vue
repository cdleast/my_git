<template>
    <div class="common-tab">
        <el-tag
            :key="index"
            v-for="(tag, index) in tags"
            :closable="tag.name !== 'home'"
            size="medium"
            :disable-transitions="false"
            @close="handleClose(tag)"
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
            tags: state => state.tags.tagsList
        })
    },
    methods: {
        // 拿到vuex中定义的关闭删除标签方法
        ...mapMutations({
            close: "closeTag"
        }),
        handleClose(tag) {
            // 调用vuex中的删除方法并传入点击的数据
            this.close(tag);


        }
    }
};
</script>

<style lang='scss' scoped>
.common-tab {
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>