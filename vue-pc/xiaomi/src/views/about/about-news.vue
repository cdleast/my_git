<template>
    <div class="about-news">
        <div class="xm-about-news">
            <div class="section">
                <div class="title">小米集团申请推迟召开发审委会议的公告</div>
                <div
                    class="context"
                >公司经过反复慎重研究，决定分步实施在香港和境内的上市计划，即先在香港上市之后，再择机通过发行CDR的方式在境内上市。为此，公司将向中国证券监督管理委员会发起申请，推迟召开发审委会议审核公司的CDR发行申请。特此公告</div>
            </div>
            <el-image src="https://i1.mifile.cn/f/i/uc/20180619.jpg" fit="fit"></el-image>
        </div>
    </div>
</template>

<script>
export default {
    name: "about-news",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.about-news {
    background: #fff;

    .xm-about-news {
        padding: 50px 200px 0 200px;

        .section {
            .title {
                text-align: center;
                font-size: 28px;
                font-weight: 700;
            }

            .context {
                line-height: 36px;
                font-size: 19px;
                margin: 1em 0;
            }
        }
    }
}
</style>