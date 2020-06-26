<template>
    <div class="recommend-ranking">
        <header-bar>
            <div @click="showPicker = true" slot="title">
                {{ title }}
                <span class="icon icon-icon-test3"></span>
            </div>
        </header-bar>

        <van-tabs v-model="active" @click="onClick" sticky offset-top="46">
            <van-tab
                :title="item.ITEM_NAME | formatTabText"
                v-for="item in RANGE_TYPE"
                :key="item.ID"
            >
                <div
                    class="ranking-top"
                    :style="{backgroundImage:'url('+require('@/assets/images/default/default-cover.png')+')'}"
                >
                    <div class="ranking-top-box" v-if="rankingTop">
                        <van-image width="55" height="55" round :src="rankingTop.avatar" />
                        <span class="ranking-top-name">{{ rankingTop.name }}</span>
                    </div>
                </div>

                <!-- 我的排行榜值 -->
                <div class="my-ranking" v-if="myRanking._DATA_">
                    <van-image
                        width="50"
                        height="50"
                        round
                        :src="myRanking._DATA_[0].IMAGE_FILE[0].FILE_PATH"
                    />
                    <div class="my-info">
                        <div
                            class="my-name"
                        >{{ myRanking._DATA_ && myRanking._DATA_[0].USER_CODE__NAME }}</div>
                        <div class="my-desp">{{ myDesc }}</div>
                    </div>
                    <div class="my-credit-box">
                        <span
                            class="credit"
                        >{{ parseInt(myRanking._DATA_ && myRanking._DATA_[0].NUMBER) || 0}}</span>
                        <span
                            v-show="ListClass == index+1"
                            v-for="(item,index) in unit"
                            :key="index"
                        >{{ item.name }}</span>
                    </div>
                </div>

                <!-- 排行榜列表 -->
                <div
                    class="my-ranking ranking-list van-hairline--bottom"
                    v-for="(item,index) in rankingList"
                    :key="index"
                >
                    <div class="ranking-left">
                        <template v-if="index<3">
                            <van-image
                                v-for="(i,index1) in medalsList"
                                :key="index1"
                                width="30"
                                height="40"
                                round
                                :src="i.src"
                                v-show="index == index1"
                            />
                        </template>

                        <span class="ranking-left-number" v-if="index>=3">{{ index + 1 }}</span>
                    </div>

                    <div class="ranking-right">
                        <van-image
                            width="50"
                            height="50"
                            round
                            :src="item.IMAGE_FILE[0].FILE_PATH"
                        />
                        <div class="my-info">
                            <div class="my-name">{{ item.USER_CODE__NAME }}</div>
                            <div class="my-desp">{{ item.ODEPT_NAME }}</div>
                        </div>
                        <div class="my-credit-box">
                            <span class="credit">{{ parseInt(item.NUMBER) || 0 }}</span>
                            <span
                                v-show="ListClass == index+1"
                                v-for="(item,index) in unit"
                                :key="index"
                            >{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>

        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                show-toolbar
                :columns="INFO_TYPE"
                @cancel="showPicker = false"
                @confirm="onConfirm"
                :default-index="1"
            />
        </van-popup>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "recommend-ranking",
    data() {
        return {
            title: "学霸榜", // 默认显示
            showPicker: false,
            INFO_TYPE: [], // 排行榜类别
            RANGE_TYPE: [], // 排行榜类型
            active: 0, // tab选项默认选择
            ListClass: 2, // 默认取学霸班
            categories: 1, // 默认取周榜
            myRanking: [], // 我的排行榜值
            rankingList: [], //排行榜列表
            medalsList: [
                { src: require("@/assets/images/ranking/first@3x.png") },
                { src: require("@/assets/images/ranking/second@3x.png") },
                { src: require("@/assets/images/ranking/third@3x.png") }
            ],
            unit: [
                { name: "积分" },
                { name: "学分" },
                { name: "魅力值" },
                { name: "课时" },
                { name: "" },
                { name: "经验值" }
            ]
        };
    },
    created() {
        this.EXEXM_LEADERBOARD_TYPE();
        this.EXEXM_LEADERBOARD_RANGE_TYPE();
        this.appMyRanking(this.categories, this.ListClass);
        this.appRankingListClass(this.categories, this.ListClass);
    },
    computed: {
        // 判断谁得了榜首
        rankingTop() {
            let list = {};
            list.name =
                this.rankingList &&
                this.rankingList[0] &&
                this.rankingList[0].USER_CODE__NAME + "获得了榜首";
            list.avatar =
                this.rankingList &&
                this.rankingList[0] &&
                this.rankingList[0].IMAGE_FILE &&
                this.rankingList[0].IMAGE_FILE[0].FILE_PATH;
            return list;
        },

        // 判断我自己是否在榜上
        myDesc() {
            // IF_IN 0 : 在榜上；1 : 不在榜上
            let { IF_IN, NUMBERS } = this.myRanking;
            let desc = "";
            if (IF_IN === "1") {
                desc = `您在获得${NUMBERS}学分就可以上榜了`;
            } else if (IF_IN === "0") {
                desc = `您已在榜上`;
            }
            return desc;
        }
    },
    filters: {
        // 截取榜单名称
        formatTabText(name) {
            return name.substring(0, 1) + "榜";
        }
    },
    methods: {
        // 排行榜类别 例：（积分、学霸）
        async EXEXM_LEADERBOARD_TYPE() {
            let data = {
                DICT_ID: "EXEXM_LEADERBOARD_TYPE"
            };
            await homeApi.SY_COMM_INFO(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.INFO_TYPE = res.data.CHILD.map(item => {
                        return item.ITEM_NAME;
                    });
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 排行榜类型 例：（周、月、季、总）
        async EXEXM_LEADERBOARD_RANGE_TYPE() {
            let data = {
                DICT_ID: "EXEXM_LEADERBOARD_RANGE_TYPE"
            };
            await homeApi.SY_COMM_INFO(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.RANGE_TYPE = res.data.CHILD;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 我的排行榜值
        async appMyRanking(categories, ListClass) {
            let data = {
                TYPE: ListClass,
                LEADERBOARD_TYPE: categories
            };
            await homeApi.appMyRanking(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.myRanking = res.data;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 排行榜列表
        async appRankingListClass(categories, ListClass) {
            let data = {
                TYPE: ListClass, // 2为学霸榜
                LEADERBOARD_TYPE: categories // 1为周排行榜
            };
            await homeApi.appRankingListClass(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.rankingList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 下拉切换榜单
        onConfirm(value, index) {
            this.ListClass = index + 1;
            this.title = value;
            this.showPicker = false;
            this.appRankingListClass(this.categories, this.ListClass);
            this.appMyRanking(this.categories, this.ListClass);
        },

        // tab切换
        onClick(name, title) {
            this.categories = name + 1;
            this.appRankingListClass(this.categories, this.ListClass);
            this.appMyRanking(this.categories, this.ListClass);
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>