<template>
    <div class="knowledge-details-comments">
        <header-bar :title="`${commentCount}条评论`"></header-bar>

        <!-- 暂无评论 -->
        <van-empty description="暂无评论" v-if="commentCount<=0" />

        <!-- 下拉刷新 -->
        <van-pull-refresh v-else v-model="isRefresh" @refresh="onRefresh">
            <van-list
                v-model="isLoading"
                :finished="isFinished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <div class="item-box" v-if="commentList.length>0">
                    <div
                        class="item-list van-hairline--bottom"
                        v-for="(item,index) in commentList"
                        :key="index"
                    >
                        <div class="item-cont">
                            <van-image
                                round
                                width="50"
                                height="50"
                                :src="item.USER_IMG[0].FILE_PATH"
                            />
                            <div class="info-right">
                                <div class="info-name">{{ item.S_USER__NAME }}</div>
                                <div
                                    class="info-time"
                                >{{ item.S_MTIME | comverTime('YYYY-MM-DD HH:mm') }}</div>
                            </div>
                        </div>
                        <div class="list-desp">{{item.CONTENT}}</div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>

        <!-- 评论框 -->
        <van-cell-group class="comments-footer">
            <van-field v-model="message" rows="1" autosize type="textarea" placeholder="写评论">
                <template #button>
                    <van-button size="small" @click="onAddKnPl">发送评论</van-button>
                </template>
            </van-field>
        </van-cell-group>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "knowledge-details-comments",
    data() {
        return {
            // 获取评论列表的参数
            data: {
                DATA_ID: this.$route.query.ID,
                PAGE: 1,
                NUM: 10
            },
            commentCount: 0, // 评论人数
            commentList: [], // 评论列表/后台获取
            error: false, // 错误提示状态
            isRefresh: false, // 是否处于加载中状态
            isLoading: false, // 是否处于加载状态
            isFinished: false, // 数据是否加载完
            message: "" // 评论输入内容
        };
    },
    created() {
        this.appCountKnPlCollection();
        this.appQueryKnPl();
    },
    methods: {
        // 获取评论人数
        async appCountKnPlCollection() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appCountKnPlCollection(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.commentCount = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取评论列表
        async appQueryKnPl() {
            await homeApi.appQueryKnPl(this.data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.isRefresh = false; //数据查询成功取消加载中状态
                    // 把查询到的数据赋值给commentList数组，commentList数组用于循环展示
                    this.commentList = res.data._DATA_;
                    this.isLoading = false; //不处于加载状态

                    // 判断不做重复渲染
                    if (this.commentList.length >= this.commentCount) {
                        this.isFinished = true; //数据加载完
                    }
                } else {
                    this.$toast(_MSG_);
                    this.isRefresh = false; // 数据查询失败取消加载中状态
                    this.isLoading = false; // 不处于加载状态
                    this.isFinished = true; // 数据加载完，不会再处于加载状态
                }
            });
        },

        //上拉加载数据
        onLoad() {
            this.data.NUM += 10; // 每次加载五条数据
            this.isRefresh = false;
            this.appQueryKnPl();
        },

        // 下拉刷新时触发
        onRefresh() {
            this.commentList = [];
            this.isFinished = false;
            this.isLoading = true; // 表示处于加载状态
            this.isRefresh = true;
            this.data.NUM = 10; // 每次加载获取几条数据
            this.appQueryKnPl(); // 调用加载数据的方法
        },

        // 提交评论
        async onAddKnPl() {
            let data = {
                DATA_ID: this.$route.query.ID,
                CONTENT: this.message.trim(),
                RATE: 5
            };
            await homeApi.appAddKnPl(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    console.log(res);
                    this.appQueryKnPl();
                    this.appCountKnPlCollection();
                    this.message = "";
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>