<template>
    <div class="about-contact">
        <el-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c11e79a287cc25b31f120a8462de808.jpeg?w=1226&h=450"
            fit="fit"
        ></el-image>
        <div class="contact">
            <h1>联系方式</h1>
            <h2>小米科技有限责任公司</h2>
            <ul>
                <li>地址：北京市海淀区安宁庄路小米科技园</li>
                <li>邮编：100085</li>
                <li>传真：01060606666-1101</li>
            </ul>
        </div>
        <el-image
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f78d7f01039c8fa11201de939baa66b4.jpg?w=1226&h=452"
            fit="fit"
        ></el-image>
        <div class="contact-list">
            <ul>
                <li>
                    <h3>小米手机</h3>
                    <div class="context-item">
                        <div class="item">
                            <div class="item-name">客服服务</div>
                            <div class="item-temp">
                                <p>
                                    <span class="title">联系电话:</span>
                                    <span>400-100-5678</span>
                                </p>
                                <p>
                                    <span class="title">自助服务:</span>
                                    <span>前往服务频道</span>
                                </p>
                                <p>
                                    <span class="title">在线客服:</span>
                                    <span>开始咨询</span>
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-name">媒体联系</div>
                            <div class="item-temp">
                                <p>
                                    <span class="title">联系人:</span>
                                    <span>李先生</span>
                                </p>
                                <p>
                                    <span class="title">Email:</span>
                                    <span>lilei@xiaomi.com</span>
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-name">售后合作</div>
                            <div class="item-temp">
                                <p>
                                    <span class="title">Email:</span>
                                    <span>shouquanhezuo@xiaomi.com</span>
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-name">品牌合作 / 广告投放</div>
                            <div class="item-temp">
                                <p>
                                    <span class="title">联系人:</span>
                                    <span>梁女士</span>
                                </p>
                                <p>
                                    <span class="title">Email:</span>
                                    <span>shouquanhezuo@xiaomi.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <h3>小米企业团购</h3>
                    <div class="context-item">
                        <div class="item">
                            <div class="item-name">采购及商务合作</div>
                            <div class="item-temp">
                                <p>
                                    <span class="title">Email :</span>
                                    <span>tuangou@xiaomi.com</span>
                                </p>
                                <p>
                                    <span class="title">团购客服 :</span>
                                    <span>开始咨询</span>
                                </p>
                                <p>
                                    <span class="title">官方网址 :</span>
                                    <span>https://qiye.mi.com</span>
                                </p>
                                <p>
                                    <span class="title">微信公众号:</span>
                                    <span>小米企业购</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "about-contact",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.about-contact {
    background: #fff;

    .contact {
        padding: 70px 0 74px 186px;

        h1 {
            font-weight: 400;
            font-size: 28px;
            color: #333;
            padding-bottom: 25px;
        }

        h2 {
            color: #424242;
            font-size: 20px;
            font-weight: 400;
            padding-bottom: 10px;
        }

        li {
            color: #757575;
            line-height: 2.1;
        }
    }

    .contact-list {
        margin: 0 186px 0 186px;

        li {
            list-style: none;
            overflow: hidden;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 15px;
            margin-top: 50px;

            &:last-child {
                border-bottom: none;
            }

            h3 {
                font-weight: 400;
                color: #ff6700;
                font-size: 28px;
            }

            .context-item {
                width: 100%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                -ms-flex-flow: row wrap;
                flex-flow: row wrap;
                -ms-flex-line-pack: start;
                align-content: flex-start;
                margin-top: 30px;

                .item {
                    width: 50%;
                    margin: 20px 0;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    background-color: #fff;
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 50%;
                    flex: 0 0 50%;

                    .item-name {
                        margin-bottom: 10px;
                        color: #424242;
                        font-size: 20px;
                    }

                    .item-temp {
                        margin: 0 0 20px 0;
                        color: #757575;
                        line-height: 2;

                        .title {
                            display: inline-block;
                            min-width: 75px;
                            padding-right: 20px;
                        }
                    }
                }
            }
        }
    }
}
</style>