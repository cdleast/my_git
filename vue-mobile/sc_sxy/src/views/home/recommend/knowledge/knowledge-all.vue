<template>
    <div class="knowledge-all">
        <header-bar :title="title"></header-bar>
        <van-search
            @search="searchContent"
            left-icon="false"
            shape="round"
            v-model="search"
            placeholder="请输入搜索关键词"
        />
        <van-tabs v-model="active" @click="onClick" class="van-hairline--top" animated>
            <van-tab title="全部知识">
                <!-- 精品知识 -->
                <knowledge-item-list
                    v-if="searchKnAllList.length<=0"
                    :knAllList="knAllList3"
                    :title="'精品知识'"
                ></knowledge-item-list>

                <!-- 最新知识 -->
                <knowledge-item-list
                    v-if="searchKnAllList.length<=0"
                    :knAllList="knAllList10"
                    :title="'最新知识'"
                ></knowledge-item-list>

                <!-- 搜索返回的全部知识 -->
                <knowledge-item-list
                    :isShow="false"
                    v-if="searchKnAllList.length>0"
                    :knAllList="searchKnAllList"
                ></knowledge-item-list>
            </van-tab>
            <van-tab title="知识分类">
                <div
                    class="all-list"
                    v-for="(item,index) in KnowledgeCification.CHILD"
                    :key="index"
                >
                    <template v-if="!isCification">
                        <van-cell :title="item.NAME" is-link />
                        <div class="tag-content van-hairline--bottom" v-if="item.CHILD">
                            <van-tag
                                v-for="tag in item.CHILD"
                                :key="tag.ID"
                                round
                                type="primary"
                                size="large"
                                @click="onKnowledgeList(tag)"
                            >{{ tag.NAME }}</van-tag>
                        </div>
                    </template>

                    <template v-if="isCification">
                        <div class="tag-content van-hairline--bottom">
                            <van-tag
                                round
                                type="primary"
                                size="large"
                                @click="onKnowledgeList(item)"
                            >{{ item.NAME }}</van-tag>
                        </div>
                    </template>
                </div>
            </van-tab>
            <van-tab title="我的知识">
                <div class="tabs">
                    <van-tag
                        @click="cur=0"
                        size="large"
                        round
                        class="collection"
                        :plain="!cur==0"
                        type="primary"
                    >我的收藏</van-tag>
                    <van-tag
                        @click="cur=1"
                        size="large"
                        round
                        class="share"
                        :plain="!cur==1"
                        type="primary"
                    >我的分享</van-tag>
                </div>

                <div class="tabs-content" v-show="cur==0">
                    <div class="main" v-if="myCollections.length>0">111</div>

                    <div class="knowledge-empty" v-else>
                        <div class="line-1">你还没有收藏知识</div>
                        <div class="line-2">把知识收藏到我的知识，离线也可以查看噢！</div>
                        <div class="line-3">
                            <van-button @click="active=0" round>去看看</van-button>
                        </div>
                    </div>
                </div>

                <div class="tabs-content" v-show="cur==1">
                    <div class="main" v-if="myCollections.length>0">222</div>

                    <div class="knowledge-empty" v-else>
                        <div class="line-1">你还没有分享知识</div>
                        <div class="line-2">把知识收藏到我的知识，离线也可以查看噢！</div>
                        <div class="line-3">
                            <van-button @click="active=0" round>去看看</van-button>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import knowledgeItemList from "@/components/home/knowledge/knowledge-item-list";
export default {
    name: "knowledge-all",
    components: {
        knowledgeItemList
    },
    data() {
        return {
            title: "全部知识",
            search: "", // 搜索关键字
            active: 0, // tab默认选项
            knAllList3: [], // 精品知识3条
            knAllList10: [], // 获取最新知识1页10条
            KnowledgeCification: [], // 知识库分类
            cur: 0, // 我的知识选中
            myCollections: [], // 我的知识列表(我收藏的)
            myShare: [], // 我的知识列表(我分享的)
            searchKnAllList: [], // 搜索返回的全部知识
            isCification: false // 是否搜索知识分类
        };
    },
    created() {
        this.appKnAllList3();
        this.appKnAllList10();
        this.appKnowledgeCification();
        this.appMyCollections();
        this.appMyShare();
        this.EventBus.$on("tabActive", num => {
            this.active = num;
        });
    },
    methods: {
        // 获取精品知识3条
        async appKnAllList3() {
            let data = {
                PAGE: "1",
                NUM: "3",
                IS_BOUTIQUE: "1"
            };
            await homeApi.appKnAllList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knAllList3 = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取最新知识1页10条
        async appKnAllList10() {
            let data = {
                PAGE: "1",
                NUM: "10",
                IS_TOP: true
            };
            await homeApi.appKnAllList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knAllList10 = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取知识分类
        async appKnowledgeCification(NAME) {
            let data = {
                NAME: NAME
            };
            await homeApi.appKnowledgeCification(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.KnowledgeCification = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 我的知识列表(我收藏的)
        async appMyCollections() {
            let data = {
                NUM: 10,
                PAGE: 1
            };
            await homeApi.appMyCollections(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.myCollections = res.data;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 查询全部知识
        async searchAppKnAllList(NAME) {
            let data = {
                NUM: 10,
                PAGE: 1,
                NAME: NAME
            };
            await homeApi.appKnAllList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.isCification = false;
                    this.searchKnAllList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 我的知识列表(我分享的)
        async appMyShare() {
            let data = {
                NUM: 10,
                PAGE: 1
            };
            await homeApi.appMyShare(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.myShare = res.data;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 搜索内容
        searchContent(val) {
            if (val != "") {
                this.search = val.trim();
                switch (this.active) {
                    case 0:
                        this.searchAppKnAllList(this.search);
                        break;
                    case 1:
                        this.isCification = true; // 开启搜索
                        this.appKnowledgeCification(this.search);
                        break;
                    case 2:
                        console.log(2);
                        // this.appCoursesListMy(this.course);
                        break;
                }
            } else {
                this.$toast('内容为空');
                return;
            }
        },

        // tab切换事件，改变头部标题
        onClick(name, title) {
            this.title = title;
            this.active = name;
        },

        // 跳转到知识分类下知识列表
        onKnowledgeList(item) {
            this.$router.push({
                path: "/home/recommend/knowledge-all-list",
                query: {
                    TYPE_ID: item.ID,
                    NAME: item.NAME
                }
            });
        }
    },
    // 组件销毁时解除事件总线绑定的事件
    destroyed() {
        this.EventBus.$off("tabActive");
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>