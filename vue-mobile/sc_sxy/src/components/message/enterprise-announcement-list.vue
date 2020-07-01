<template>
    <div class="enterprise-announcement-list">
        <div
            v-for="item in dataList"
            :key="item.ID"
            class="list-item van-hairline--bottom"
            @click="onNotice(item.ID)"
        >
            <div class="userinfo">
                <van-image round width="22" height="22" :src="item.USER_IMG[0].FILE_PATH" />
                <span class="username">{{ item.S_USER__NAME }}</span>
            </div>
            <div class="title van-ellipsis">{{ item.NOTICE_THEME }}</div>
            <div class="content van-multi-ellipsis--l2" v-html="item.CONTENT"></div>
            <div class="bottom">
                <span class="time">{{ item.PUBLISH_TIME | comverTime('YYYY/MM/DD HH:mm:ss')}}</span>
                <div class="bottom-right">
                    <span class="type">{{ item.TYPE_ID__NAME }}</span>
                    <span v-if="item.FILE_LIST && item.FILE_LIST.length" class="icon icon-fujian"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "enterprise-announcement-list",
    props: {
        dataList: {
            type: Array
        }
    },
    methods: {
        // 跳转企业公告详情
        onNotice(id) {
            this.$router.push({
                path: "/message/enterprise-details",
                query: {
                    id
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.enterprise-announcement-list {
    padding: 20px 30px;

    .list-item {
        display: flex;
        flex-direction: column;

        .userinfo {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 20px 0 10px;

            .username {
                margin-left: 20px;
                font-size: 24px;
                font-weight: 500;
                color: $text-color;
            }
        }

        .title {
            font-size: 30px;
            font-weight: bold;
            color: $text-color;
            line-height: 60px;
        }

        .content {
            font-size: 24px;
            font-weight: 500;
            color: #767676;
            line-height: 40px;
            padding: 10px 0;
        }

        .bottom {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 5px 0 10px;

            .time,
            .type,
            .icon {
                font-size: 24px;
                font-weight: 500;
                color: #9d9d9d;
            }
        }
    }
}
</style>