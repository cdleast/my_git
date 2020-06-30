<template>
    <div class="enterprise-announcement">
        <header-bar title="企业公告">
            <span slot="right" class="icon icon-sousuo"></span>
        </header-bar>

        <div class="list">
            <div
                v-for="item in getCapsule"
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
    </div>
</template>

<script>
import messageApi from "@/api/message";
export default {
    name: "enterprise-announcement",
    data() {
        return {
            getCapsule: [] // 企业公告列表
        };
    },
    computed: {
        // 判断是否有附件
        isShowFile() {
            return item.FILE_LIST && item.FILE_LIST.length;
        }
    },
    created() {
        this.appGetCapsule();
    },
    methods: {
        // 企业公告列表
        async appGetCapsule() {
            await messageApi.appGetCapsule().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.getCapsule = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

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
@import "~@/styles/message";
</style>