<template>
    <div class="lecturer-item-list">
        <div class="item-list" v-for="item in datas" :key="item.ID">
            <van-image round width="45" height="45" :src="item.IMAGE_FILE[0]['FILE_PATH']" />
            <div class="item-list-info van-hairline--bottom">
                <div class="user-info">
                    <div class="user-name">{{ item.SHOW_NAME }}</div>
                    <div class="user-company">{{ item.SHOW_DEPT }}</div>
                    <div class="user-type">{{ item.TYPE__NAME }}</div>
                </div>
                <div
                    class="subscribe-btn"
                    v-if="item.IF_FOLLOWT === '2'"
                    @click="onAddTeFollow(item)"
                >关注</div>
                <div class="subscribe-btn active" v-else @click="onKnDelTeFollow(item)">已关注</div>
            </div>
        </div>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "lecturer-item-list",
    props: {
        datas: {
            type: Array
        }
    },
    methods: {
        // 关注讲师
        onAddTeFollow(item) {
            let data = {
                LECTURER_ID: item.ID
            };
            homeApi.appAddTeFollow(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    item.IF_FOLLOWT = "1";
                    this.$toast("关注成功");
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 取消关注讲师
        onKnDelTeFollow(item) {
            let data = {
                LECTURER_ID: item.ID
            };
            homeApi.appKnDelTeFollow(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    item.IF_FOLLOWT = "2";
                    this.$toast("取消关注成功");
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.lecturer-item-list {
    padding-top: 30px;
    .item-list {
        padding-left: 30px;
        padding-bottom: 30px;
        display: flex;
        align-items: center;
        .item-list-info {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 20px;
            padding-bottom: 20px;
            padding-right: 30px;
            .user-info {
                .user-name {
                    font-size: 32px;
                    line-height: 32px;
                    font-weight: 500;
                    color: $text-color;
                }
                .user-company {
                    font-size: 28px;
                    line-height: 28px;
                    font-weight: 500;
                    color: #999;
                    margin-top: 24px;
                    margin-bottom: 24px;
                }
                .user-type {
                    display: inline-block;
                    padding: 0 18px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: $bg-default-color;
                    border-radius: 18px;
                    font-size: 26px;
                    font-weight: 500;
                    color: #fff;
                }
            }
            .subscribe-btn {
                width: 132px;
                height: 60px;
                border: 1px solid $bg-default-color;
                border-radius: 28px;
                text-align: center;
                line-height: 60px;
                font-size: 28px;
                font-weight: 500;
                color: $bg-default-color;
                &.active {
                    background: $bg-default-color;
                    color: #fff;
                }
            }
        }
    }
}
</style>