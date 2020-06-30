<template>
    <div class="enterprise-details">
        <header-bar title="公告详情"></header-bar>

        <div class="details-content">
            <div class="details-name">{{ notice.NOTICE_THEME }}</div>
            <div class="details-userinfo">
                <div class="userinfo-img-name">
                    <div class="left" v-if="notice.USER_IMG">
                        <van-image
                            round
                            width="25"
                            height="25"
                            :src="notice.USER_IMG[0].FILE_PATH"
                        />
                        <span class="name">{{ notice.S_USER__NAME }}</span>
                    </div>
                    <div class="right">{{ notice.S_ATIME | comverTime('YYYY/MM/DD HH:mm:ss')}}</div>
                </div>
            </div>
            <div class="details-bottom van-hairline--bottom">
                <div class="left">{{ notice.READ_NUM }}人已读，{{ notice.UNREAD_NUM }}人未读</div>
                <div class="right">
                    {{ notice.TYPE_ID__NAME }}
                    <span v-if="isShowFile" class="icon icon-fujian"></span>
                </div>
            </div>
        </div>
        <div class="details-text" v-html="notice.CONTENT">人事招聘广告</div>
        <div class="attachment-file" v-if="isShowFile">
            <div class="type">{{ fileType }}</div>
            <div class="right">
                <div class="filename">{{ fileName }}</div>
                <div class="fileinfo">
                    <span class="time">{{ notice.PUBLISH_TIME | comverTime('YYYY/MM/DD') }}</span>
                    <span class="size">{{ fileSize }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import messageApi from "@/api/message";
export default {
    name: "enterprise-details",
    data() {
        return {
            notice: [] // 企业公告详情
        };
    },
    computed: {
        // 判断是否有附件
        isShowFile() {
            return this.notice.FILE_LIST && this.notice.FILE_LIST.length;
        },
        // 附件文件名
        fileName() {
            if (!this.isShowFile) return;
            let n = this.notice.FILE_LIST[0].FILE_NAME;
            return n;
        },
        // 切割文件后缀名
        fileType() {
            if (!this.isShowFile) return;
            //  lastIndexOf 是查某个指定的字符串在字符串最后一次出现的位置
            let lastDotIndex = this.fileName && this.fileName.lastIndexOf(".");
            // 从最后一次出现位置的后面1个开始切割
            let s = this.fileName.slice(lastDotIndex + 1);
            return s;
        },
        // 附件文件大小
        fileSize() {
            if (!this.isShowFile) return;
            let s = this.notice.FILE_LIST[0].FILE_SIZE;
            let r = s && this.unitConverter(s);
            return r;
        }
    },
    created() {
        this.appNotice();
    },
    methods: {
        // 企业公告详情
        async appNotice() {
            let data = {
                ID: this.$route.query.id
            };
            await messageApi.appNotice(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.notice = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/message";
</style>