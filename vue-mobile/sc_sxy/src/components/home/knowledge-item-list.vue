<template>
    <div class="knowledge-item-list">
        <van-cell :title="title" is-link />
        <div
            class="knowledge-item van-hairline--bottom"
            v-for="item in knAllList"
            :key="item.ID"
            @click="onKnowledgeDetails(item.ID)"
        >
            <div class="knowledge-item-top">
                <van-image round width="21" height="21" :src="item.USER_IMG[0].FILE_PATH" />
                <span class="knowledge-item-top-name">{{ item.SHARE_USER__NAME }}</span>
            </div>
            <div class="knowledge-item-desp">{{ item.NAME }}</div>
            <div class="knowledge-item-bottom">
                <div class="bottom-left">
                    <span>{{ item.TYPE_ID__NAME }}</span>
                    <span>{{ item.S_MTIME | comverTime('YYYY-MM-DD HH:mm')}}</span>
                    <span>浏览{{item.BROWSE_TIMES}}</span>
                </div>
                <div class="bottom-right">
                    <span v-if="item.FILE_IFNUM == '存在附件'" class="icon icon-fujian"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "knowledge-item-list",
    props: {
        title: {
            type: String
        },
        knAllList: {
            type: Array
        }
    },
    methods: {
        // 跳转知识详情
        onKnowledgeDetails(ID) {
            this.$router.push({
                path: "/home/recommend/knowledge-details",
                query: {
                    ID: ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.knowledge-item-list {
    border-bottom: 30px solid #f8f8f8;
    &:last-child {
        border-bottom: none;
    }

    .knowledge-item {
        padding: 30px;

        .knowledge-item-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 30px;

            .knowledge-item-top-name {
                margin-left: 20px;
                font-size: 24px;
                font-weight: 500;
                color: $text-color;
            }
        }

        .knowledge-item-desp {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 20px;
            color: $text-color;
            font-weight: 700;
            font-size: 30px;
        }

        .knowledge-item-bottom {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .bottom-left {
                span {
                    font-size: 24px;
                    font-weight: 500;
                    color: rgba(153, 153, 153, 1);
                    margin-right: 30px;
                }
            }

            .bottom-right {
                .icon {
                    font-size: 30px;
                    color: rgba(153, 153, 153, 1);
                }
            }
        }
    }
}
</style>