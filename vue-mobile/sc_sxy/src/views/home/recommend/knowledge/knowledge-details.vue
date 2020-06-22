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
                <div class="file-item">
                    <div class="icon icon-word"></div>
                    <div class="item-box">
                        <div class="item-title van-ellipsis">{{ dTitle }}</div>
                        <div class="item-text-box">
                            <div
                                class="item-text"
                            >更新：{{ knowledgeDetails.S_MTIME | comverTime('YYYY-MM-DD HH:mm') }}</div>
                            <div class="item-text size">大小：{{ fontSize }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 底部操作 -->
            <div class="footer van-hairline--top">
                <div class="footer-item" v-for="(item,index) in footerData" :key="index">
                    <span :class="`icon icon-${item.icon}`"></span>
                    <span class="desp">{{ item.desp }}</span>
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
            footerData: [
                {
                    desp: "收藏",
                    icon: "shoucang1"
                },
                {
                    desp: "评论",
                    icon: "pinglun"
                },
                {
                    desp: "点赞",
                    icon: "zansel"
                }
            ]
        };
    },
    computed: {
        // 标题是否精品
        dTitle() {
            return `${
                this.knowledgeDetails.IS_BOUTIQUE === "1" ? "[精品]" : ""
            } ${this.knowledgeDetails.USER_DEPT_NAME}`;
        },
        // 文件大小
        fontSize() {
            return (
                (this.knowledgeDetails.USER_IMG &&
                    this.knowledgeDetails.USER_IMG[0] &&
                    this.knowledgeDetails.USER_IMG[0].FILE_SIZE) ||
                0
            );
        }
    },
    created() {
        this.appEXEXM_KNOWLEDGE();
    },
    methods: {
        // 知识库详情
        async appEXEXM_KNOWLEDGE() {
            let data = {
                ID: this.$route.query.ID
            };
            await homeApi.appEXEXM_KNOWLEDGE(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.knowledgeDetails = res.data;
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