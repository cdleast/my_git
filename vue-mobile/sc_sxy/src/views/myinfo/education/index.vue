<template>
    <div class="my-education">
        <header-bar title="我的学历"></header-bar>
        <div class="education">
            <div class="header-avatar">
                <van-image round width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>
            <div class="total">
                <span class="text">总学分</span>
                <span class="number">0</span>
            </div>
            <div class="desp">当前学分：新手上路</div>
            <div class="look-detail-btn">
                <van-button round size="small">查看明细</van-button>
            </div>
        </div>

        <div class="box">
            <div class="scroll-view">
                <div class="view-item">
                    <span class="first-circle"></span>
                </div>
                <div class="view-item" v-for="(item, index) in degreeList" :key="index" :class="{'active': item.active}">
                    <span class="empty-circle"></span>
                    <span class="text">{{ item.title }}</span>
                </div>
            </div>
        </div>

        <div class="hint">
            <div class="title">
                距离下一个学分：
                <span>幼儿园</span>
            </div>
            <div class="score-box">
                <van-circle v-model="currentRate" :rate="rate" :stroke-width="60" text="还需6分" />
                <div class="text">学分值</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-education",
    data() {
        return {
            degreeList: [
                {
                    title: "1",
                    active: false
                },
                {
                    title: "2",
                    active: false
                },
                {
                    title: "3",
                    active: true
                },
                {
                    title: "4",
                    active: false
                },
                {
                    title: "5",
                    active: false
                },
                {
                    title: "6",
                    active: false
                }
            ],
            currentRate: 0
        };
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>