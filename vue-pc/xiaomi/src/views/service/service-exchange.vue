<template>
    <div class="service-exchange">
        <div class="container">
            <el-image src="https://c1.mifile.cn/f/i/17/service/exchange.jpg" fit="fit"></el-image>

            <div class="mi-promise">
                <h2>小米承诺</h2>
                <div class="content">
                    <ul class="clearfix">
                        <li>
                            <span class="icon icon01"></span>
                            <span>7日内无理由退货</span>
                        </li>
                        <li>
                            <span class="icon icon02"></span>
                            <span>质量问题15日内包换</span>
                        </li>
                        <li>
                            <span class="icon icon03"></span>
                            <span>1年质保</span>
                        </li>
                    </ul>
                    <p>
                        如因产品质量问题，凭厂商授权服务中心的检测证明，享受7日内退货，手机类15天换货、电视30日内换货，在质保期内享受1年内免费维修等三包服务！
                        <br />（注：部分商品由厂家提供售后，或者服务周期存在日期差异，具体详则请查看对应品类的售后政策说明）
                    </p>
                </div>
            </div>

            <div class="mi-exchange-box">
                <h2>产品售后政策查询</h2>
                <div class="content clearfix">
                    <el-link
                        class="list"
                        :underline="false"
                        v-for="(item,index) in policyQuery"
                        :key="index"
                    >{{ item.name }}</el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "service-exchange",
    data() {
        return {
            policyQuery: [],
        };
    },
    created() {
        this.getServiceDataList();
    },
    methods: {
        // 获取数据
        async getServiceDataList() {
            await this.$api.getServiceDataList().then((res) => {
                this.policyQuery = res.data.policyQuery;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.service-exchange {
    h2 {
        display: block;
        font-size: 30px;
        margin-top: 30px;
        color: #666;
        font-weight: 400;
        text-align: center;
        line-height: 106px;
    }

    .mi-promise {
        .content {
            background: #fff;

            ul {
                text-align: center;

                li {
                    list-style: none;
                    display: inline-block;
                    margin: 67px 80px 62px;

                    .icon {
                        width: 97px;
                        height: 97px;
                        margin-bottom: 24px;
                        background: url("https://c1.mifile.cn/f/i/17/service/exchangeicon.png?12=")
                            0 50% no-repeat;
                    }

                    span {
                        display: block;
                        margin: 0 auto;
                        font-size: 14px;
                    }

                    .icon01 {
                        background-position: 0 50%;
                    }

                    .icon02 {
                        background-position: -100px 50%;
                    }

                    .icon03 {
                        background-position: -200px 50%;
                    }
                }
            }

            p {
                padding: 35px 0;
                text-align: center;
                color: #616161;
                font-size: 14px;
                border-top: 1px solid #f2f2f2;
            }
        }
    }

    .mi-exchange-box {
        margin-bottom: 45px;

        .content {
            padding: 28px 0;
            background: #fff;

            .el-link {
                width: 306px;
                float: left;
                padding: 14px 50px;
                font-size: 14px;
                line-height: 28px;
            }
        }
    }
}
</style>