<template>
    <div class="signin">
        <header-bar title="每日签到"></header-bar>

        <!-- 日历签到 -->
        <div class="cumulative-main">
            <calendar
                ref="Calendar"
                :markDate="signInList"
                :futureDayHide="timestamp"
                v-on:changeMonth="changeDate"
            ></calendar>
            <div class="cumulative-cont">
                <span class="cumulative">
                    累计签到
                    <span class="day">{{numDays}}</span>天
                </span>
                <template v-if="showSignin">
                    <span @click="showPopup = true" v-if="!isSignin" class="sign-in">签到</span>
                    <span v-else class="sign-in" :class="isSignin?'yes':''">已签到</span>
                </template>
            </div>
        </div>

        <!-- 心情列表 -->
        <div class="mood van-hairline--top-bottom">
            <div class="total-mood">
                <span class="desp">综合心情</span>
                <van-image
                    v-if="moodList.length == 0"
                    :src="require('@/assets/images/signin/1.png')"
                    width="16"
                    height="16"
                />
                <van-image
                    v-else
                    v-for="(item,index) in imgData"
                    :key="index"
                    v-show="totalMood === index"
                    width="16"
                    height="16"
                    :src="item.src"
                />
            </div>

            <div class="mood-classify">
                <div class="classify-list">
                    <van-image
                        :src="require('@/assets/images/signin/1.png')"
                        width="16"
                        height="16"
                    />
                    <span class="num">{{ colourListLength }}</span>
                </div>
                <div class="classify-list">
                    <van-image
                        :src="require('@/assets/images/signin/2.png')"
                        width="16"
                        height="16"
                    />
                    <span class="num">{{ risusListLength }}</span>
                </div>
                <div class="classify-list">
                    <van-image
                        :src="require('@/assets/images/signin/3.png')"
                        width="16"
                        height="16"
                    />
                    <span class="num">{{ smileListLength }}</span>
                </div>
                <div class="classify-list">
                    <van-image
                        :src="require('@/assets/images/signin/4.png')"
                        width="16"
                        height="16"
                    />
                    <span class="num">{{ pitifulListLength }}</span>
                </div>
                <div class="classify-list">
                    <van-image
                        :src="require('@/assets/images/signin/5.png')"
                        width="16"
                        height="16"
                    />
                    <span class="num">{{ grievedListLength }}</span>
                </div>
            </div>
        </div>

        <div class="line-bg"></div>

        <!-- 月签到奖励 -->
        <div class="month-signin">
            <div class="month-signin-title">月累计签到奖励</div>
            <div class="gift">
                <div class="gift-list" :class="{active: numDays>=1}">
                    <van-image
                        :src="require('@/assets/images/signin/qd.png')"
                        width="24"
                        height="24"
                        v-if="numDays>0"
                    />
                    <van-image
                        :src="require('@/assets/images/signin/notlw.png')"
                        width="40"
                        height="40"
                        v-if="numDays==0"
                    />
                    <span class="text">签到</span>
                    <div class="border-active"></div>
                </div>
                <div
                    class="gift-list"
                    v-for="item in attendanceAward"
                    :key="item.type"
                    :class="{active: numDays >= item.CONDITION_NUM}"
                >
                    <van-image
                        :src="require('@/assets/images/signin/notlw.png')"
                        width="40"
                        height="40"
                        v-if="numDays < item.CONDITION_NUM"
                    />
                    <van-image
                        :src="require('@/assets/images/signin/qdlw.png')"
                        width="40"
                        height="40"
                        v-if="numDays >= item.CONDITION_NUM"
                        @click="getGiftCollection(item.TYPE, item.CONDITION_NUM)"
                    />
                    <span class="text">{{ item.CONDITION_NUM }}</span>
                    <div class="border-active"></div>
                </div>
            </div>

            <div class="hint-text">注：隔月不保留未领取的奖励噢</div>
        </div>

        <!-- 签到弹窗 -->
        <van-popup class="signin-modal" :close-on-click-overlay="false" v-model="showPopup">
            <div class="title">签到拿奖励</div>
            <div class="signin-award-text">今日签到可获得奖励</div>
            <div class="signin-award-box" v-for="(item, index) in signInAwardToday" :key="index">
                <span class="signin-award-item">经验+{{item.EXPERIENCE}}</span>
                <span class="signin-award-item">魅力值+{{item.CHARM}}</span>
                <span class="signin-award-item">积分+{{item.INTEGRAL}}</span>
            </div>
            <div class="signin-award-text extra-award">额外奖励</div>
            <div v-for="(item, index) in signInAdditional" :key="'extra-'+index">
                <div class="signin-hint">本月再坚持签到{{item.DAY}}天，可获得额外奖励</div>
                <div class="signin-award-box">
                    <div class="signin-award-item">积分+{{item.INTEGRAL}}</div>
                    <div class="signin-award-item">魅力值+{{item.CHARM}}</div>
                    <div class="signin-award-item">经验值+{{item.EXPERIENCE}}</div>
                </div>
            </div>
            <van-divider
                :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
            >你今天的心情是？</van-divider>
            <div class="mood-icon">
                <van-image
                    v-for="(item,index) in imgData"
                    :key="index"
                    width="30"
                    height="30"
                    :src="item.src"
                    @click="imgHandClick(index+1)"
                    :class="{active:cur==index+1}"
                />
            </div>

            <div class="btn">
                <van-button @click="onAppSignIn" :disabled="cur===0" round size="small">签到并领取</van-button>
                <div class="cancel" @click="showPopup = false">取消签到</div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import calendar from "vue-calendar-component";
export default {
    name: "signin",
    components: {
        calendar
    },
    data() {
        return {
            imgData: [
                { src: require("@/assets/images/signin/1.png") },
                { src: require("@/assets/images/signin/2.png") },
                { src: require("@/assets/images/signin/3.png") },
                { src: require("@/assets/images/signin/4.png") },
                { src: require("@/assets/images/signin/5.png") }
            ],
            grievedListLength: 0, // 难过 id: 1
            pitifulListLength: 0, // 可怜 id: 2
            smileListLength: 0, // 微笑 id:3
            risusListLength: 0, // 大笑  id: 4
            colourListLength: 0, // 色  id: 5
            isSignin: false, // 是否签到
            showSignin: true, // 签到是否显示
            numDays: 0, // 当月累计签到天数
            moodList: [], // 当月心情列表
            totalMood: 0, // 综合心情显示的下标
            signInList: [], // 签到列表
            showPopup: false, // 签到弹窗
            signInAwardToday: [], // 今日签到奖励
            signInAdditional: [], // 额外签到奖励
            isActive: false, // 选中心情
            cur: 0, // 心情默认选择第0个
            disabled: true, // 签到按钮状态
            lngStr: 0, //  经度
            latStr: 0, // 纬度
            cityStr: "", // 城市
            addressStr: "", // 具体位置
            defaultTime: this.getNowFormatDate(), // 获取当前日期
            attendanceAward: [] // 月累计签到奖励
        };
    },
    created() {
        this.appDoYouSignIn(this.defaultTime);
        this.appAccumulatedDays(this.defaultTime);
        this.appSignInList(this.defaultTime);
        this.appSignInAwardToday();
        this.appSignInAdditional();
        this.appMoodList(this.defaultTime);
        this.appAttendanceAward(this.defaultTime);
    },
    computed: {
        // 当前时间戳
        timestamp() {
            let time = new Date().getTime().toString();
            return time.slice(0, 10);
        }
    },
    methods: {
        // 是否签到
        async appDoYouSignIn(timer) {
            let data = {
                DATE: this.getNowFormatDate(timer) // 当前日期
            };
            await homeApi.appDoYouSignIn(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.isSignin = res.data._DATA_[0].SIGNIN;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 当月累计签到天数
        async appAccumulatedDays(timer) {
            let data = {
                STARTTIME: this.getCurrentMonthFirst(timer),
                ENDTIME: this.getCurrentMonthLast(timer)
            };
            await homeApi.appAccumulatedDays(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.numDays = Number(res.data._DATA_[0].DAY);
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取签到列表
        async appSignInList(timer) {
            let data = {
                STARTTIME: this.getCurrentMonthFirst(timer),
                ENDTIME: this.getCurrentMonthLast(timer)
            };
            await homeApi.appSignInList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.signInList = res.data._DATA_.map(item => {
                        return item.S_MTIME.slice(0, 10);
                    });
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 今日签到奖励
        async appSignInAwardToday() {
            await homeApi.appSignInAwardToday().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.signInAwardToday = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 额外签到奖励
        async appSignInAdditional() {
            await homeApi.appSignInAdditional().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.signInAdditional = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 当月心情列表
        async appMoodList(timer) {
            let data = {
                STARTTIME: this.getCurrentMonthFirst(timer),
                ENDTIME: this.getCurrentMonthLast(timer)
            };
            await homeApi.appMoodList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.moodList = res.data._DATA_;
                    // 获取数据线清空原来的
                    this.grievedListLength = 0; // 难过 id: 1
                    this.pitifulListLength = 0; // 可怜 id: 2
                    this.smileListLength = 0; // 微笑 id:3
                    this.risusListLength = 0; // 大笑  id: 4
                    this.colourListLength = 0; // 色  id: 5
                    // 无数据的时候
                    if (this.moodList.length == 0) {
                        this.grievedListLength = 0; // 难过 id: 1
                        this.pitifulListLength = 0; // 可怜 id: 2
                        this.smileListLength = 0; // 微笑 id:3
                        this.risusListLength = 0; // 大笑  id: 4
                        this.colourListLength = 0; // 色  id: 5
                    } else {
                        // 有数据
                        for (let i = 0; i < this.moodList.length; i++) {
                            switch (this.moodList[i].MOOD) {
                                case "1":
                                    this.grievedListLength = Number(
                                        this.moodList[i].COUNT_MOOD
                                    );
                                    break;
                                case "2":
                                    this.pitifulListLength = Number(
                                        this.moodList[i].COUNT_MOOD
                                    );
                                    break;
                                case "3":
                                    this.smileListLength = Number(
                                        this.moodList[i].COUNT_MOOD
                                    );
                                    break;
                                case "4":
                                    this.risusListLength = Number(
                                        this.moodList[i].COUNT_MOOD
                                    );
                                    break;
                                case "5":
                                    this.colourListLength = Number(
                                        this.moodList[i].COUNT_MOOD
                                    );
                                    break;
                            }
                        }

                        // 将5组心情放大一个数组里面，查找最大数，来取综合心情
                        let totalArr = [
                            this.colourListLength,
                            this.risusListLength,
                            this.smileListLength,
                            this.pitifulListLength,
                            this.grievedListLength
                        ];
                        /**
                         * Math.max不支持传入数组
                         * apply用来重新改变this指向，传递null是不需要改变this指向
                         * apply可以将一个数组默认的转换为一个参数列表([param1,param2,param3] 转换为 (param1,param2,param3)
                         */
                        let max = Math.max.apply(null, totalArr);
                        // 查找最大数第一次出现的位置
                        switch (totalArr.indexOf(max)) {
                            case 0:
                                this.totalMood = 0;
                                break;
                            case 1:
                                this.totalMood = 1;
                                break;
                            case 2:
                                this.totalMood = 2;
                                break;
                            case 3:
                                this.totalMood = 3;
                                break;
                            case 4:
                                this.totalMood = 4;
                                break;
                        }
                    }
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 签到保存
        async onAppSignIn() {
            let data = {
                LNG: 1,
                LAT: 1,
                POSITION_NAME: 1,
                ADDRESS: 1,
                MOOD: this.cur
            };
            await homeApi.appSignIn(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.$toast("签到成功");
                    this.appDoYouSignIn(this.defaultTime);
                    this.appAccumulatedDays(this.defaultTime);
                    this.appMoodList(this.defaultTime);
                    this.showPopup = false;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 月累计签到奖励
        async appAttendanceAward(timer) {
            let data = {
                STARTTIME: this.getCurrentMonthFirst(timer),
                ENDTIME: this.getCurrentMonthLast(timer)
            };
            await homeApi.appAttendanceAward(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.attendanceAward = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 签到选择心情
        imgHandClick(index) {
            this.cur = index;
        },

        //左右点击切换月份
        changeDate(data) {
            this.appDoYouSignIn(data); // 是否签到
            this.appSignInList(data); // 获取签到列表
            this.appAccumulatedDays(data); // 当月累计签到天数
            this.appMoodList(data); // 当月心情列表
            this.appAttendanceAward(data); // 月累计签到奖励

            // 转换日期格式2020/6/26
            let timer = this.getNowFormatDate();
            let nowdate = new Date(timer).toLocaleDateString();

            // 签到按钮显示和隐藏
            if (nowdate === data) {
                this.showSignin = true;
            } else {
                this.showSignin = false;
            }
        },

        // 领取钱袋礼包
        async getGiftCollection(type, num) {
            let data = {
                TYPE: type,
                CONDITION_NUM: num
            };
            await homeApi.appGiftCollection(data).then(res => {
                let data = res.data._DATA_;
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    if (data.type == true) {
                        this.$toast(data[0].TYPE_NAME);
                    } else {
                        this.$toast(data[0].TYPE_NAME);
                    }
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
.signin /deep/ {
    .wh_content_all {
        background-color: #fff;
        .wh_top_changge {
            width: 260px;
            margin-left: 30px;
            li {
                color: $text-color;
                font-weight: 700;
                font-size: 30px;
                .wh_jiantou1,
                .wh_jiantou2 {
                    width: 20px;
                    height: 20px;
                    border-color: $text-color;
                }

                &.wh_content_li {
                    flex: 4;
                }
            }
        }
    }
    .wh_content {
        position: relative;
        padding: 0;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        &:nth-of-type(2) {
            &:nth-of-type(2)::after {
                position: absolute;
                box-sizing: border-box;
                content: " ";
                pointer-events: none;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
                border: 0 solid #ebedf0;
                -webkit-transform: scale(0.5);
                transform: scale(0.5);
                border-top-width: 1px;
            }
        }
        .wh_content_item {
            width: 98px;
            height: 98px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $text-color;

            .wh_isToday,
            .wh_chose_day {
                background: none;
                color: $text-color;
            }
            .wh_isMark {
                background: $bg-default-color;
                color: #fff;
            }
        }
    }
}
</style>