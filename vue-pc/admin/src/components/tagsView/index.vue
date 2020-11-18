<template>
    <div style="position: relative;">
        <scroll-pane ref="scrollPane">
            <div class="el-tag-views clearfix" v-if="visitedViews">
                <el-tag
                    ref="tag"
                    v-for="item in visitedViews"
                    :key="item.path"
                    :closable="!isAffix(item)"
                    :effect="isActive(item) ? 'dark' : 'plain'"
                    size="small"
                    @close="closeSelectedTag(item)"
                    @click="jumpViews(item)"
                    @contextmenu.prevent.native="openMenu(item,$event)"
                >{{ item.meta.title}}</el-tag>
            </div>
        </scroll-pane>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">刷新</li>
            <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags(selectedTag)">关闭所有</li>
        </ul>
    </div>
</template>

<script>
import ScrollPane from './scrollPane'
export default {
    name: 'tags-view',
    components: {
        ScrollPane
    },
    inject: ['reload'],
    data() {
        return {
            visible: false, // 右键页面状态
            top: 0, // 头部距离
            left: 0, // 左侧距离
            selectedTag: {}, // 右键选择的那一个
        }
    },
    computed: {
        // 获取用户访问过的页面
        visitedViews() {
            return this.$store.state.tagsView.visitedViews
        }
    },
    watch: {
        // 监听路由变化
        $route() {
            // this.addTags()
            // this.moveToCurrentTag()
        },

        // 监听右键页面
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },
    methods: {
        // 判断是否当前路由页
        isActive(route) {
            return route.path === this.$route.path
        },

        // 判断是否有删除x号
        isAffix(tag) {
            return tag.meta && tag.meta.affix
        },

        // 删除标签
        closeSelectedTag(view) {
            this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
                if (this.isActive(view)) {
                    this.toLastView(visitedViews, view)
                }
            })
        },

        // 删除标签操作判断下一个跳转路由
        toLastView(visitedViews, view) {
            // 获取tagsView数组的最后一个标签
            const latestView = visitedViews.slice(-1)[0]
            // 判断删除的标签是否为当前路由标签
            if (latestView) {
                this.$router.push(latestView.path)
            } else {
                // 现在，如果没有标记视图，默认情况下是重定向到主页,
                // 您可以根据您的需要进行调整.
                if (view.name === 'home') {
                    // 重新加载主页
                    this.$router.replace({ path: view.path })
                } else {
                    this.$router.push('/')
                }
            }
        },

        // 点击跳转路由
        jumpViews(item) {
            this.$router.push({ path: item.path })
        },

        // 鼠标刷新方法
        refreshSelectedTag(view) {
            this.reload()
            this.$nextTick(() => {
                this.$router.replace({
                    path: view.path
                })
            })
        },

        // 鼠标右键方法
        openMenu(item, e) {
            const menuMinWidth = 105 // 最小宽度
            const offsetLeft = this.$el.getBoundingClientRect().left // 元素左边距离页面左边的距离
            const offsetWidth = this.$el.offsetWidth // 容器的宽度
            const maxLeft = offsetWidth - menuMinWidth // 左边界
            const left = e.clientX - offsetLeft // 容器显示的位置

            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }

            this.top = e.offsetY
            this.visible = true
            this.selectedTag = item
        },


        // 关闭右键展示页面
        closeMenu() {
            this.visible = false
        },


        // 右键关闭其他
        closeOthersTags() {
            this.$router.push(this.selectedTag) // 跳转右键选择的那一个标签路由
            this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
                this.moveToCurrentTag()
            })
        },


        // 右键关闭所有
        closeAllTags(view) {
            this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
                // if (this.affixTags.some(tag => tag.path === view.path)) {
                //     return
                // }
                this.toLastView(visitedViews, view)
            })
        },



        // 切换路由时触发此方法
        moveToCurrentTag() {
            const tags = this.$refs.tag
            this.$nextTick(() => {
                for (const tag of tags) {
                    // console.log(this.$route.path)

                    // if (tag.to.path === this.$route.path) {
                    //     this.$refs.scrollPane.moveToTarget(tag)
                    //     // when query is different then update
                    //     if (tag.to.fullPath !== this.$route.fullPath) {
                    //         this.$store.dispatch('tagsView/updateVisitedView', this.$route)
                    //     }
                    //     break
                    // }
                }
            })
        }
    }
};
</script>

<style lang='scss' scoped>
.el-tag-views /deep/ {
    height: 35px;

    .el-tag {
        margin: 5px 3px 0;
        border-radius: 0;
        cursor: pointer;

        &:first-of-type {
            margin-left: 15px;
        }

        &:last-of-type {
            margin-right: 15px;
        }
    }

    .el-tag--dark {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;

        &::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
        }

        .el-tag__close {
            top: 1px;
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

        .el-icon-close {
            top: 1px;
            color: #495060;
        }

        .el-tag__close:hover {
            background-color: #b4bccc;
            color: #fff;
        }
    }
}

.tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
        margin-left: 15px;
    }
    &:last-of-type {
        margin-right: 15px;
    }
    &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
            content: "";
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
        }
    }
}

// 鼠标右键
.contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;

        &:hover {
            background: #eee;
        }
    }
}
</style>