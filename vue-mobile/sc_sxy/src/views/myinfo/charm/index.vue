<template>
    <div class="my-charm">
        <van-nav-bar title="我的魅力" left-arrow @click-left="$router.go(-1)"></van-nav-bar>

        <div class="charm-container">
            <div class="charm-header">
                <div class="average">
                    <span>8</span>
                    <van-image
                        width="16"
                        height="16"
                        :src="require('@/assets/images/myinfo/wdmlztb.png')"
                    />
                </div>
                <div class="recent-text">近七天的魅力值变化</div>
            </div>
        </div>

        <div class="charm-show">
            <div class="charm-show-text">魅力值</div>
            <div class="qiun-columns"></div>

            <div class="charm-introduce">
                <div class="charm-introduce-item">
                    <div class="title">什么是魅力值？</div>
                    <div class="text">魅力值主要用于展示一个学员在App内的受欢迎程度，其更多给予用户荣誉感的满足。同事魅力值的存在更多的去促进异性用户之间交流。</div>
                </div>
                <div class="charm-introduce-item">
                    <div class="title">如何才能增加魅力值？</div>
                    <div class="text">粉丝数量、收到的礼物数量和主页的访问量都可以增加你的魅力值。而且来自异性的贡献会更多噢。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-charm",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>