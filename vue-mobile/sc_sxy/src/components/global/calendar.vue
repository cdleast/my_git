<template>
    <div class="calendar">
        <!-- 年份 月份 -->
        <div class="month van-hairline--bottom">
            <ul>
                <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
                <li class="arrow" @click="pickPre(currentYear,currentMonth)">
                    <span class="icon icon-arrow-lift"></span>
                </li>
                <li class="year-month" @click="pickYear(currentYear,currentMonth)">
                    <!-- <span class="choose-year">{{ currentYear }}</span> -->
                    <span class="choose-month">{{ currentYear+'年'+currentMonth }}月</span>
                </li>
                <li class="arrow" @click="pickNext(currentYear,currentMonth)">
                    <span class="icon icon-arrow-right"></span>
                </li>
            </ul>

            <span class="cumulative">
                累计签到
                <span class="day">{{numDays}}</span>天
            </span>
            <span @click="onAppSignIn" v-if="!isSignin" class="sign-in">签到</span>
            <span v-else class="sign-in" :class="isSignin?'yes':''">已签到</span>
        </div>
        <!-- 星期 -->
        <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ul>
        <!-- 日期 -->
        <ul class="days">
            <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
            <li v-for="(dayobject,index) in days" :key="index">
                <!--本月-->
                <!--如果不是本月  改变类名加灰色-->

                <span
                    v-if="dayobject.day.getMonth()+1 != currentMonth"
                    class="other-month"
                >{{ dayobject.day.getDate() }}</span>

                <!--如果是本月  还需要判断是不是这一天-->
                <template v-else>
                    <!--今天  同年同月同日-->
                    <span
                        :class="dayobject.isSign===true?'active':''"
                        class="days-ri"
                    >{{ dayobject.day.getDate() }}</span>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "calendar",
    props: {
        isSignin: Boolean, // 是否签到
        numDays: Number, // 累计签到数
        signInList: Array // 签到列表
    },
    data() {
        return {
            currentDay: 1, // 当前日期
            currentMonth: 1, // 当前月份
            currentYear: 1970,
            currentWeek: 1, // 当前周
            days: [], // 日历数组
            arrDate: [1, 2, 3, 4, 5, 6]
        };
    },
    computed: {},
    created() {
        //在vue初始化时调用
        this.initData(null);
    },
    methods: {
        initData(cur) {
            let leftcount = 0; //存放剩余数量
            let date;
            if (cur) {
                date = new Date(cur);
            } else {
                let now = new Date();
                let d = new Date(
                    this.formatDate(now.getFullYear(), now.getMonth(), 1)
                );
                d.setDate(42);
                date = new Date(
                    this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
                );
            }
            this.currentDay = date.getDate();
            this.currentYear = date.getFullYear();
            this.currentMonth = date.getMonth() + 1;

            this.currentWeek = date.getDay(); // 1...6,0
            if (this.currentWeek == 0) {
                this.currentWeek = 7;
            }
            let str = this.formatDate(
                this.currentYear,
                this.currentMonth,
                this.currentDay
            );
            this.days.length = 0;
            // 今天是周日，放在第一行第7个位置，前面6个
            //初始化本周
            for (let i = this.currentWeek - 1; i >= 0; i--) {
                let d = new Date(str);
                d.setDate(d.getDate() - i);
                let dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
                dayobject.day = d;
                this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
            }
            //其他周
            for (let i = 1; i <= 42 - this.currentWeek; i++) {
                let d = new Date(str);
                d.setDate(d.getDate() + i);
                let dayobject = {};
                // dayobject.day=d;
                dayobject = { day: d, isSign: this.isVerDate(d.getDate()) };
                this.days.push(dayobject);
            }
        },
        isVerDate(v) {
            return this.arrDate.includes(v);
        },
        pickPre(year, month) {
            // setDate(0); 上月最后一天
            // setDate(-1); 上月倒数第二天
            // setDate(dx) 参数dx为 上月最后一天的前后dx天
            var d = new Date(this.formatDate(year, month, 1));
            d.setDate(0);
            this.initData(
                this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
            );
        },
        pickNext(year, month) {
            var d = new Date(this.formatDate(year, month, 1));
            d.setDate(42);
            this.initData(
                this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
            );
        },
        pickYear(year, month) {
            alert(year + "," + month);
        },
        // 返回 类似 2016-01-02 格式的字符串
        formatDate(year, month, day) {
            var y = year;
            var m = month;
            if (m < 10) m = "0" + m;
            var d = day;
            if (d < 10) d = "0" + d;
            return y + "-" + m + "-" + d;
        },

        // 签到保存
        async onAppSignIn() {
            let data = {
                LNG: 1,
                LAT: 1,
                POSITION_NAME: 1,
                ADDRESS: 1,
                MOOD: 1
            };
            await homeApi.appSignIn(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.$toast("签到成功");
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.calendar {
    width: 100%;
    .month {
        width: 100%;
        padding: 30px 0;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 20px;
        ul {
            width: auto;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            li {
                text-transform: uppercase;
                letter-spacing: 3px;
            }
            .year-month {
                font-weight: 700;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                .choose-month {
                    text-align: center;
                }
                .choose-year {
                    padding-left: 20px;
                    padding-right: 20px;
                }
            }
            .arrow {
                .icon {
                    color: $text-color;
                    font-weight: 700;
                }
            }
        }
        .cumulative {
            margin-left: 10px;
            display: flex;
            align-items: center;
            .day {
                color: orange;
            }
        }
        .sign-in {
            padding: 6px 20px;
            background: $bg-default-color;
            border-radius: 10px;
            color: #fff;
            &.yes {
                background-color: #ccc;
            }
        }
    }

    .weekdays {
        padding: 0 20px;
        font-size: 30px;
        color: #999;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            width: 98px;
            text-align: center;
        }
    }

    .days {
        padding: 0 20px;
        background: #fff;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            width: 98px;
            height: 98px;
            display: flex;
            align-items: center;
            justify-content: center;
            .days-ri {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                &.active {
                    background: $active-color;
                    color: #fff;
                }
            }
        }
        .other-month {
            color: #999;
            font-size: 24px;
        }
    }
}
</style>