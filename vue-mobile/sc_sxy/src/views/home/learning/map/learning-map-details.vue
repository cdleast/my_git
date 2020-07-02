<template>
    <div class="learning-map-details">
        <header-bar title="学习地图详情"></header-bar>

        <div class="map-details-content" v-for="item in mapDetails" :key="item.ID">
            <div class="content-title">{{ item.NAME }}</div>
            <div class="content-item" v-for="i in item.STAGE" :key="i.ID">
                <div class="level">{{ i.NAME }}</div>
                <div class="reward-text">通关后将获得如下奖励：</div>
                <div class="reward-content">
                    <span>奖励：</span>
                    <div class="reward-item">
                        <span class="dot"></span>
                        <span>学分+{{ i.CREDIT }}</span>
                    </div>
                    <div class="reward-item">
                        <span class="dot"></span>
                        <span>积分+{{ i.INTEGRAL }}</span>
                    </div>
                    <div class="reward-item">
                        <span class="dot"></span>
                        <span>经验+{{ i.EXPERIENCE }}</span>
                    </div>
                </div>
                <div class="icon-container">
                    <van-image
                        width="33"
                        height="33"
                        :src="require('@/assets/images/learning/finish@2x.png')"
                    />
                </div>
                <div
                    class="btn-box"
                    v-for="n in i.STAGE_LEVEL[0].STAGE_LEVEL_COURSE"
                    :key="n.ID"
                    @click="onoverlay(i.STAGE_LEVEL[0])"
                >{{ n.SHOW_COURSE }}</div>
            </div>
        </div>

        <!-- 弹窗部分 -->
        <van-overlay :show="show" @click="show = false">
            <div class="wrapper">
                <!-- @click.stop 让内容部分点击不隐藏 -->
                <div class="block" @click.stop>
                    <div class="block-progress">
                        <span>{{ cur }}/{{ total }}</span>
                    </div>
                    <div class="block-text">要完成以下课程，才能通过该关卡哦~</div>
                    <div class="scroll-height">
                        <div
                            :class="{ active: item.FINISH_COURSE === 'Y' }"
                            class="scroll-height-item"
                            v-for="item in overlayList"
                            :key="item.ID"
                        >
                            <van-image
                                width="72"
                                height="51"
                                class="img"
                                :src="item.COVER[0].FILE_PATH"
                            />
                            <div class="desp van-ellipsis">{{ item.SHOW_COURSE }}</div>
                            <van-image
                                width="26"
                                height="23"
                                class="pic"
                                v-if="item.FINISH_COURSE === 'Y'"
                                :src="require('@/assets/images/learning/miaojie_seller_selected.png')"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "learning-map-details",
    data() {
        return {
            show: false, // 模态框默认状态
            mapDetails: [], // 学习地图详情
            overlayList: [] // 弹窗数据
        };
    },
    computed: {
        // 弹窗完成进程
        cur() {
            return this.overlayList.filter(item => item.FINISH_COURSE === "Y")
                .length;
        },
        // 弹窗总进程
        total() {
            return this.overlayList.length;
        }
    },
    created() {
        this.appMapDetails();
    },
    methods: {
        // 学习地图详情
        async appMapDetails() {
            let data = {
                MAP_ID: this.$route.query.ID
            };
            await homeApi.appMapDetails(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.mapDetails = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 打开模态框
        onoverlay(n) {
            this.overlayList = n.STAGE_LEVEL_COURSE;
            this.show = true;
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>