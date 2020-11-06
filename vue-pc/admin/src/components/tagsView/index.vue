<template>
    <el-scrollbar class="scroll-container">
        <div class="el-tag-views" v-if="visitedViews">
            <el-tag
                v-for="item in visitedViews"
                :key="item.path"
                :closable="!item.meta.affix"
                :effect="$route.name === item.name ? 'dark' : 'plain'"
                size="small"
                @close="handleClose(item)"
                @click="jumpViews(item)"
            >{{ item.meta.title}}</el-tag>
        </div>
    </el-scrollbar>
</template>

<script>
export default {
    name: '',
    data() {
        return {}
    },
    computed: {
        // 获取用户访问过的页面
        visitedViews() {
            return this.$store.state.tagsView.visitedViews
        },
    },
    methods: {
        // 删除标签
        handleClose(item) {
            // 拿到点击删除标签的前一个元素传给面包屑
            let result = this.visitedViews.findIndex((val) => {
                return val.name === item.name;
            })
            let data = this.visitedViews[result - 1]
            this.$store.dispatch('tagsView/closeTagView', result)
            this.$router.push({ path: data.path })
        },

        // 跳转路由
        jumpViews(item) {
            this.$router.push({ path: item.path })
        }
    }
};
</script>

<style lang='scss' scoped>
.scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    ::v-deep {
        .el-scrollbar__bar {
            bottom: 0px;
        }
        .el-scrollbar__wrap {
            overflow-y: hidden;
        }
    }
}
.el-tag-views /deep/ {
    height: 35px;
    display: flex;
    align-items: center;

    .el-tag {
        margin: 0 3px;
        border-radius: 0;
        cursor: pointer;
    }

    .el-tag--dark {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        .el-tag__close {
            color: #fff;
        }

        .el-tag__close:hover {
            background-color: #b4bccc;
            color: #fff;
        }
    }

    .el-tag--plain {
        border: 1px solid #d8dce5;
        color: #495060;
        background: #fff;

        .el-tag__close {
            color: #495060;
        }

        .el-tag__close:hover {
            background-color: #b4bccc;
            color: #fff;
        }
    }
}
</style>