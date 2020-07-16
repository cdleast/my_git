<template>
    <div class="my-answer">
        <header-bar title="我的回答"></header-bar>

        <div class="answer-item van-hairline--bottom">
            <div class="user-info">
                <van-image round width="63" height="63" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <div class="user">
                    <div class="user-name">何东洋</div>
                    <div class="user-company">北京首创股份有限公司</div>
                </div>
            </div>
            <div class="answer-text">网上有破解版的Adobe Acrobat DC破解版</div>
            <div class="issue">
                <span class="issue-desp">问题：</span>
                请问哪个软件能免费多次将PDF文件转换成Word? 谢谢
            </div>
        </div>
    </div>
</template>

<script>
import myinfoApi from "@/api/myinfo";
export default {
    name: "my-answer",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/myinfo.scss";
</style>