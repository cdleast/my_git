<template>
    <div class="exam-task-list">
        <div class="exam-list-item" v-for="item in datas" :key="item.ID">
            <div class="title">{{ item.NAME }}</div>
            <div
                class="time"
            >{{ item.START_TIME | comverTime('YYYY/MM/DD HH:mm') }} ~ {{ item.END_TIME | comverTime('MM/DD HH:mm') }}</div>
            <div class="info">
                <div class="left">
                    通过分数{{ item.PASS_SCORE }}分 我的最高得分
                    <span class="not">{{ item.MAX_SCORE }}</span>分
                </div>
                <div class="right not" v-show="item.CURRENT_STATE == index" v-for="(state,index) in CURRENT_STATE" :key="index">{{ state }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "exam-task-list",
    props: {
        datas: {
            type: Array
        }
    },
    data() {
        return {
            CURRENT_STATE: {
                1: "考试未开始",
                2: "待通过",
                3: "已通过",
                4: "待评分",
                5: "待考试",
                6: "已结束",
                7: "考试中"
            }
        };
    }
};
</script>

<style lang='scss' scoped>
.exam-task-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-color: #f5f4f4;
    font-size: 30px;
    line-height: 1.8;
    padding-bottom: 40px;
    .exam-list-item {
        width: 696px;
        padding: 30px;
        background: #fff;
        border: 1px solid #ededed;
        border-radius: 10px;
        margin-top: 20px;
        .title {
            font-size: 36px;
            font-weight: bold;
            color: #000;
        }
        .time {
            display: flex;
            align-items: center;
            font-size: 30px;
            font-weight: 500;
            color: #989898;
        }
        .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 28px;
            font-weight: 500;
            color: #1f1f1f;
            .left {
                font-weight: 700;
            }
            .not {
                color: #e00000;
            }
        }
    }
}
</style>