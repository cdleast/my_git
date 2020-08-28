<template>
    <div class="about-history">
        <el-image :src="banner" fit="fit"></el-image>
        <div class="history_timeline">
            <el-timeline v-for="(item,index) in history" :key="'index1'+index">
                <strong>{{ item.time }}</strong>
                <el-timeline-item
                    v-for="(i,index) in item.children"
                    :key="'index2'+index"
                    :timestamp="i.timestamp"
                    :color="i.color"
                >
                    <p v-for="(o,index) in i.content" :key="'index3'+index">{{ o.text }}</p>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
export default {
    name: "about-history",
    data() {
        return {
            banner: "",
            history: [],
        };
    },
    created() {
        this.getAboutDataList();
    },
    methods: {
        // 获取数据
        async getAboutDataList() {
            await this.$api.getAboutDataList().then((res) => {
                this.banner = res.data.history[0].banner;
                this.history = res.data.history.slice(1);
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.about-history /deep/ {
    background: #fff;

    .history_timeline {
        padding: 35px 248px 122px 248px;

        .el-timeline {
            margin-top: 55px;

            strong {
                color: #424242;
                font-size: 24px;
                margin-bottom: 35px;
                display: block;
                text-indent: -50px;
            }

            .el-timeline-item__timestamp {
                position: absolute;
                left: -35px;
                top: 0;
                margin-top: 2px;
            }

            .el-timeline-item__content {
                margin-left: 42px;
                padding-left: 122px;

                p {
                    color: #757575;
                    font-size: 14px;
                    line-height: 1.5;
                    padding-bottom: 20px;
                }
            }

            .el-timeline-item:last-child .el-timeline-item__tail{
                display: block;
            }
        }
    }
}
</style>