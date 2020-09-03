<template>
    <div class="service-customer">
        <h2>联系客服</h2>
        <ul class="items-list" v-if="customer[0]">
            <li class="transi-up per" v-for="(item,index) in customer[0].up" :key="'index1'+index">
                <p class="main" :class="item.hoverUrl?'qr-img-main':''">
                    <el-image style="width: 49px; height: 44px" :src="item.url" fit="fit"></el-image>
                    <span>{{ item.desp }}</span>
                </p>
                <el-image
                    v-if="item.hoverUrl"
                    :src="item.hoverUrl"
                    :class="item.hoverUrl?'qr-img':''"
                    style="width: 140px; height: 140px"
                ></el-image>
            </li>

            <li
                class="transi-up per"
                v-for="(item,index) in customer[1].buttom"
                :key="'index2'+index"
            >
                <p class="main">
                    <el-image style="width: 49px; height: 44px" :src="item.url" fit="fit"></el-image>
                    <span class="two-line">
                        {{ item.lineTop }}
                        <br />
                        {{ item.lineBottom }}
                    </span>
                </p>
                <p class="tip">
                    {{ item.tipTop }}
                    <br />
                    {{ item.tipBottom }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "service-contact",
    data() {
        return {
            customer: [], // 联系客服
        };
    },
    created() {
        this.getServiceDataList();
    },
    methods: {
        // 获取数据
        async getServiceDataList() {
            await this.$api.getServiceDataList().then((res) => {
                this.customer = res.data.customer;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.service-customer {
    h2 {
        font-size: 30px;
        margin-bottom: 30px;
        color: #666;
        font-weight: 400;
        text-align: center;
    }

    // 服务中心
    .content {
        display: flex;

        & > div {
            flex: 1;
        }

        .right {
            background: #fff;
            text-align: center;
        }

        p {
            margin: 64px auto 15px;
            color: #000;
            font-size: 20px;
        }

        .desp {
            color: #000;
            font-size: 16px;
            opacity: 0.6;
        }

        .icon-wrap {
            width: 500px;
            margin: 24px auto;
            opacity: 0.6;

            dl {
                float: left;
                width: 100px;
            }
        }

        .btn {
            margin: 15px auto;
            font-size: 16px;
            display: inline-block;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all 0.4s;
            transition: all 0.4s;
        }
    }
}

// 列表通用
.items-list /deep/ {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .transi-up {
        width: 296px;
        height: 277px;
        text-align: center;
        background-color: #fff;
        margin-bottom: 18px;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        .el-image {
            margin-top: 76px;
        }

        h3 {
            color: #000;
            font-size: 18px;
            font-weight: 700;
            opacity: 0.87;
            line-height: 46px;
        }

        .desp {
            color: #757575;
            font-size: 14px;
            line-height: 14px;
        }

        .image-div {
            height: 180px;
            line-height: 180px;
            margin: 45px auto 13px;

            .el-image {
                margin-top: 0;
            }
        }
    }

    .transi-up:hover {
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        -webkit-transform: translate3d(0, -10px, 0);
        transform: translate3d(0, -10px, 0);

        h3,
        .desp {
            color: #ff6700;
        }
    }

    .transi-up.per {
        .main {
            margin: 0;
            padding-top: 116px;
            color: #000;
            font-size: 18px;
            text-align: center;
            opacity: 0.87;

            .el-image {
                margin-top: 0;
            }

            span {
                position: relative;
                top: -14px;
                display: inline-block;
                margin-left: 20px;
            }

            span.two-line {
                top: -5px;
            }
        }

        .el-image.qr-img {
            margin: 80px auto 0;
            display: none;
        }

        .tip {
            margin-top: 50px;
            color: #000;
            font-size: 14px;
            text-align: center;
            opacity: 0.54;
        }
    }

    .transi-up.per:hover {
        .qr-img-main {
            display: none;
        }

        .el-image.qr-img {
            display: block;
        }
    }
}
</style>