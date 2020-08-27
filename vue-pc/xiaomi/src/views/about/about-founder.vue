<template>
    <div class="founder">
        <el-image :src="founderBanner.url" fit="fit"></el-image>
        <div class="founder-main">
            <ul class="clearfix">
                <li v-for="(item,index) in founder" :key="index">
                    <el-image class="avatar" :src="item.avatar" fit="fit"></el-image>
                    <div class="desc">
                        <h2>{{ item.name }}</h2>
                        <h3>{{ item.position }}</h3>
                        <p class="info" v-for="(i,index) in item.info" :key="index">{{ i.text }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "founder",
    data() {
        return {
            founderBanner: [],
            founder: [],
        };
    },
    created() {
        this.getAboutDataList();
    },
    methods: {
        // 获取数据
        async getAboutDataList() {
            await this.$api.getAboutDataList().then((res) => {
                this.founderBanner = res.data.founderBanner;
                this.founder = res.data.founder;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.founder {
    background: #fff;

    .founder-main {
        padding: 60px 186px 60px 186px;

        li {
            margin-top: 60px;
            overflow: hidden;

            &:nth-child(odd) {
                .avatar {
                    float: left;
                }

                .desc {
                    float: right;
                }
            }

            &:nth-child(even) {
                .avatar {
                    float: right;
                }

                .desc {
                    float: left;
                }
            }

            .avatar {
                width: 234px;
            }

            .desc {
                width: 558px;
                display: table-cell;
                vertical-align: middle;

                h2 {
                    font-size: 28px;
                    color: #333;
                }

                h3 {
                    padding-top: 10px;
                    color: #424242;
                    font-size: 20px;
                    font-weight: 400;
                    padding-bottom: 10px;
                }

                .info {
                    margin: 14px 0;
                    color: #757575;
                }
            }
        }
    }
}
</style>