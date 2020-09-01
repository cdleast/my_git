<template>
    <div class="service">
        <template v-if="$route.meta.show">
            <div @mouseenter="hoverEnter" @mouseleave="hoverLeave">
                <swiper
                    ref="mySwiper"
                    :options="swiperOptions"
                    :auto-update="true"
                    :auto-destroy="true"
                    id="mySwiper"
                >
                    <swiper-slide
                        v-for="(item,index) in carousel"
                        :key="index"
                        :style="{backgroundImage:'url('+item.url+')'}"
                    ></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>

            <div class="service-fquestion">
                <h2>自助服务</h2>
                <ul class="items-list">
                    <li class="transi-up" v-for="(item,index) in fquestion" :key="index">
                        <el-image style="width: 66px; height: 66px" :src="item.url" fit="fit"></el-image>
                        <h3 v-if="item.title">{{ item.title }}</h3>
                        <p class="desp" v-if="item.desp">{{ item.desp }}</p>
                    </li>
                </ul>
            </div>

            <div class="service-fquestion">
                <h2>产品支持</h2>
                <ul class="items-list">
                    <li class="transi-up" v-for="(item,index) in goodslist" :key="index">
                        <div class="image-div">
                            <el-image style="width: 180px; height: 180px" :src="item.url" fit="fit"></el-image>
                        </div>
                        <h3 v-if="item.title">{{ item.title }}</h3>
                        <p class="desp" v-if="item.desp">{{ item.desp }}</p>
                    </li>
                </ul>
            </div>

            <div class="service-fquestion">
                <h2>服务中心</h2>
                <div class="content">
                    <div class="left">
                        <el-image
                            src="https://i1.mifile.cn/f/i/2018/service/serviceCenter_img2.jpg"
                            fit="fit"
                        ></el-image>
                    </div>
                    <div class="right" v-for="(item,index) in serviceCenter" :key="index">
                        <p>{{ item.title }}</p>
                        <div class="desp">{{ item.desp }}</div>
                        <div class="icon-wrap clearfix">
                            <dl v-for="(i,index) in item.iconWrap" :key="index">
                                <dd>
                                    <el-image :src="i.url" fit="fit"></el-image>
                                </dd>
                                <dt>{{ i.name }}</dt>
                            </dl>
                        </div>
                        <el-link class="btn">网点查询 ></el-link>
                    </div>
                </div>
            </div>

            <div class="service-fquestion">
                <h2>常见问题</h2>
                <div class="search-wrap">
                    <el-input placeholder="请输入要搜索的内容" v-model="search">
                        <el-button slot="append" icon="el-icon-search" @click="onSearch(search)"></el-button>
                    </el-input>
                </div>
            </div>

            <div class="service-manage tabs">
                <ul class="tab-title">
                    <li
                        :class="{active:curTab==index}"
                        v-for="(item,index) in manage"
                        :key="index"
                        @mouseenter="hoverTab(index)"
                    >{{ item.title }}</li>
                </ul>
                <div class="tab-content">
                    <ul
                        v-show="curTab==index"
                        class="per clearfix"
                        v-for="(item,index) in manage"
                        :key="index"
                    >
                        <li v-for="(i,index) in item.children" :key="index">
                            <el-link :underline="false">{{ i.name }}</el-link>
                        </li>
                    </ul>
                    <div class="btn">
                        <el-link :underline="false">查看更多 ></el-link>
                    </div>
                </div>
            </div>

            <div class="service-fquestion">
                <h2>联系客服</h2>
                <ul class="items-list" v-if="customer[0]">
                    <li
                        class="transi-up per"
                        v-for="(item,index) in customer[0].up"
                        :key="'index1'+index"
                    >
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

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "service",
    data() {
        return {
            carousel: [], // 轮播图
            fquestion: [], // 自助服务
            goodslist: [], // 产品支持
            serviceCenter: [], // 售后网点
            manage: [], // 管理部分
            customer: [], // 联系客服
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, // 允许点击小圆点跳转
                },
                autoplay: {
                    delay: 3000, // 自动切换的时间间隔
                    disableOnInteraction: false,
                },
                grabCursor: true, // 小手图标
                loop: true,
            },
            search: "", // 搜索常见问题
            curTab: 0, // 管理tab切换
        };
    },
    created() {
        this.getServiceDataList();
    },
    methods: {
        // 获取数据
        async getServiceDataList() {
            await this.$api.getServiceDataList().then((res) => {
                this.carousel = res.data.carousel;
                this.fquestion = res.data.fquestion;
                this.goodslist = res.data.goodslist;
                this.serviceCenter = res.data.serviceCenter;
                this.manage = res.data.manage;
                this.customer = res.data.customer;
            });
        },

        // 鼠标移入
        hoverEnter() {
            this.$refs.mySwiper.$swiper.autoplay.stop();
        },

        // 鼠标移出
        hoverLeave() {
            this.$refs.mySwiper.$swiper.autoplay.start();
        },

        // 搜索常见问题
        onSearch(search) {
            if (search.trim()) {
                this.$message.success(search);
            } else {
                this.$message.error("搜索内容不能为空");
            }
        },

        // 鼠标移入切换tab
        hoverTab(index) {
            this.curTab = index;
        },
    },
};
</script>

<style lang='scss' scoped>
.service /deep/ {
    .swiper-container {
        height: 250px;

        .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
        }
    }

    .service-fquestion {
        h2 {
            font-size: 30px;
            margin-top: 30px;
            color: #666;
            font-weight: 400;
            text-align: center;
            line-height: 106px;
        }
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

    .search-wrap {
        width: 646px;
        background: #fff;
        margin: 0px auto 50px;

        .el-input-group__append {
            background: #007aff;
            color: #fff;
            border-color: #007aff;
        }
    }

    .service-manage {
        .tab-title {
            li {
                border: none;
                margin: 0;
                padding: 25px 0;
                border-bottom: 1px solid #f5f5f5;
            }

            li.active {
                background: #f56600;
                color: #fff;
                border-bottom: 1px solid #f56600;
            }
        }

        .per {
            padding: 30px 0 10px 0;
            text-align: center;
            overflow: hidden;

            li {
                float: left;
                width: 44%;
                margin-left: 6%;
                color: #e2e2e2;
                font-size: 20px;
                line-height: 40px;
                text-align: left;
                list-style: disc;
                cursor: pointer;
            }

            li:hover {
                color: #f60;

                .el-link {
                    color: #f60;
                }
            }
        }

        .btn {
            padding-bottom: 15px;
            text-align: center;
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