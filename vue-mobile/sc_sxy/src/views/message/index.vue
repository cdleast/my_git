<template>
    <div class="message">
        <header-bar title="消息"></header-bar>
        <van-search left-icon="false" shape="round" v-model="value" placeholder="请输入搜索关键词" />

        <div class="notice">
            <div class="notice-item" @click="onGetCapsule">
                <van-image
                    round
                    width="43"
                    height="43"
                    :src="require('@/assets/images/message/gonggao.svg')"
                />
                <div class="notice-item-right van-hairline--bottom">
                    <div class="item-top">
                        <span class="gg">企业公告</span>
                        <span
                            class="time"
                        >{{ unreadQuantity.PUBLISH_TIME | comverTime('MM/DD HH:mm')}}</span>
                    </div>
                    <div class="item-bottom">{{ unreadQuantity.NOTICE_THEME }}</div>
                </div>
            </div>
        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script>
import footerBar from "@/components/global/footer-bar";
import messageApi from "@/api/message";
export default {
    name: "message",
    components: {
        footerBar
    },
    data() {
        return {
            value: "",
            unreadQuantity: []
        };
    },
    created() {
        this.appUnreadQuantity();
    },
    methods: {
        // 企业公告未读数量
        async appUnreadQuantity() {
            await messageApi.appUnreadQuantity().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.unreadQuantity = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 跳转企业公告列表
        onGetCapsule() {
            this.$router.push("/message/enterprise-announcement");
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/message";
</style>