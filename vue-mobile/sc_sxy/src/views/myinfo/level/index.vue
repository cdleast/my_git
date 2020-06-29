<template>
    <div class="my-level">
        <van-nav-bar title="我的等级" left-arrow @click-left="$router.go(-1)"></van-nav-bar>

        <div class="level-container">
            <div class="header">
                <van-image
                    round
                    class="user-avatar"
                    width="50"
                    height="50"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <div class="user-grade">
                    <span class="user-name">吴章华</span>
                    <span class="user-grade-text">
                        <span class="lv">LV.0</span>
                        <span class="text">当前经验值3050</span>
                    </span>
                </div>
            </div>

            <div class="level-lv">
                <span class="lv">LV.1</span>
                <van-image
                    width="221"
                    height="206"
                    :src="require('@/assets/images/myinfo/wddjhz.png')"
                />
            </div>

            <div class="level-show">
                <div class="level-text">
                    <span>LV.1</span>
                    <span>LV.2</span>
                </div>
                <div class="level-progress">
                    <van-progress :percentage="60" stroke-width="13" pivot-text />
                </div>
                <div class="level-empirical">
                    <span>0经验值</span>
                    <span>0经验值</span>
                </div>
                <div class="today-empirical">
                    今日经验值：<span>150</span>
                </div>
                <div class="upgrade">距Lv.2升级还需1950经验值</div>
            </div>
        </div>

        <div class="level-brisk">
            <div class="brisk-item">
                <div class="brisk-item-left">
                    <span class="title">每日活跃</span>
                    <span class="timer">2019-09-20  00:49</span>
                </div>
                <div class="brisk-item-right">+50</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-level",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>