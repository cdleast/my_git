<template>
    <div class="knowledge-details">
        <header-bar title="知识详情"></header-bar>
        <div class="details-content">
            <div class="details-title">{{ dTitle }}</div>
            <div class="details-info">
                <div class="info-left">
                    <van-image
                        round
                        width="22"
                        height="22"
                        :src="knowledgeDetails.USER_IMG&&knowledgeDetails.USER_IMG[0]&&knowledgeDetails.USER_IMG[0].FILE_PATH"
                    />
                    <span class="info-text info-left-name">{{ knowledgeDetails.SHARE_USER__NAME }}</span>
                    <span
                        class="info-text info-left-time"
                    >{{ knowledgeDetails.S_MTIME | comverTime('YYYY-MM-DD HH:mm') }}</span>
                </div>
                <div class="info-right">
                    <span
                        class="info-text info-desp"
                        v-if="knowledgeDetails.BROWSE_TIMES"
                    >浏览{{ knowledgeDetails.BROWSE_TIMES }}</span>
                    <span class="icon icon-fujian" v-if="knowledgeDetails.FILE_NUM>0"></span>
                    <span
                        class="info-text info-desp"
                        v-if="knowledgeDetails.FILE_NUM>0"
                    >{{ knowledgeDetails.FILE_NUM }}</span>
                </div>
            </div>

            <!-- 附件文档 -->
            <div class="file" v-if="knowledgeDetails.FILE_NUM > 0">
                <div
                    class="file-item"
                    @click="onPdfPreview(knowledgeDetails.FILES_FILE[0].FILE_PATH)"
                >
                    <div class="icon icon-word"></div>
                    <div class="item-box">
                        <div class="item-title van-ellipsis">{{ dTitle }}</div>
                        <div class="item-text-box">
                            <div
                                class="item-text"
                            >更新：{{ knowledgeDetails.SHARE_TIME | comverTime('YYYY-MM-DD HH:mm') }}</div>
                            <div class="item-text size">大小：{{ fontSize }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 底部操作 -->
            <div class="footer van-hairline--top">
                <div
                    class="footer-item"
                    v-for="(item,index) in footerData"
                    :key="index"
                    @click="onOperation(item,index)"
                >
                    <span :class="[`icon icon-${item.icon}`,item.is?'active':'']"></span>
                    <span :class="item.is?'active':''" class="desp">{{ item.desp }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "knowledge-details",
    data() {
        return {
            knowledgeDetails: [], // 知识库详情
            countKnOt: 0, // 浏览人数统计
            footerData: [
                {
                    desp: "收藏",
                    icon: "shoucang",
                    is: false
                },
                {
                    desp: "评论",
                    icon: "pinglun",
                    is: false
                },
                {
                    desp: "点赞",
                    icon: "zansel",
                    is: false
                }
            ]
        };
    },
    computed: {
        // 标题是否精品
        dTitle() {
            return `${
                this.knowledgeDetails.IS_BOUTIQUE === "1" ? "[精品]" : ""
            } ${this.knowledgeDetails.NAME}`;
        },

        // 文件大小
        fontSize() {
            let size =
                (this.knowledgeDetails.FILES_FILE &&
                    this.knowledgeDetails.FILES_FILE[0] &&
                    this.knowledgeDetails.FILES_FILE[0].FILE_SIZE) ||
                0;
            // kb单位格式转换函数
            return this.unitConverter(size);
        }
    },
    created() {
        this.appAddKnLl();
        this.appCountKnOt();
        this.appEXEXM_KNOWLEDGE();
        this.appKnScCollection();
        this.appIsLike();
    },
    methods: {
        // 浏览人数添加
        async appAddKnLl() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appAddKnLl(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 浏览人数统计
        async appCountKnOt() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appCountKnOt(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.countKnOt = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 知识库详情
        async appEXEXM_KNOWLEDGE() {
            let data = {
                _PK_: this.$route.query.ID
            };
            await homeApi.appEXEXM_KNOWLEDGE(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knowledgeDetails = res.data;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 是否收藏
        async appKnScCollection() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appKnScCollection(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    if (res.data.COLLECTION === "Y") {
                        this.footerData[0].is = true;
                    }
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 添加收藏
        async onAddKnScCollection() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appAddKnScCollection(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.footerData[0].is = true;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 取消收藏
        async onKnDeleteCollection() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appKnDeleteCollection(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.footerData[0].is = false;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 是否点赞
        async appIsLike() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appIsLike(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    if (res.data.COLLECTION === "Y") {
                        this.footerData[2].is = true;
                    }
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 点赞
        async onAppLike() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appLike(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.footerData[2].is = true;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 取消点赞
        async onCancelLike() {
            let data = {
                DATA_ID: this.$route.query.ID
            };
            await homeApi.appCancelLike(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.footerData[2].is = false;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 跳转知识详情评论列表
        onComments() {
            this.$router.push({
                path: "/home/recommend/knowledge-details-comments",
                query: {
                    ID: this.$route.query.ID
                }
            });
        },

        // 底部操作判断
        onOperation(item, index) {
            switch (index) {
                case 0:
                    item.is
                        ? this.onKnDeleteCollection()
                        : this.onAddKnScCollection();
                    break;
                case 1:
                    this.onComments();
                    break;
                case 2:
                    item.is ? this.onCancelLike() : this.onAppLike();
                    break;
            }
        },

        // pdf预览
        onPdfPreview(item) {
            this.$router.push({
                path: "/pdf",
                query: {
                    src: item
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>