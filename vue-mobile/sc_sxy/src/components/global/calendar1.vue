<template>
    <div class="calendar">
        <Calendar ref="Calendar" v-on:choseDay="clickDay" v-on:changeMonth="changeDate"></Calendar>
    </div>
</template>

<script>
import Calendar from "vue-calendar-component";
export default {
    name: "calendar",
    components: {
        Calendar
    },
    data() {
        return {};
    },
    methods: {
        clickDay(data) {
            console.log(data); //选中某天
        },
        changeDate(data) {
            console.log(data); //左右点击切换月份
        },
        clickToday(data) {
            console.log(data); //跳到了本月
        }
    }
};
</script>

<style lang='scss' scoped>
.calendar /deep/ {
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
            .wh_isToday {
                background-color: $bg-default-color;
                color: #fff;
            }
        }
    }
}
</style>