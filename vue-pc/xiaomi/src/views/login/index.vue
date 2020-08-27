<template>
    <div class="login">
        <!-- 头部logo -->
        <div class="h_panel">
            <div class="h_logo"></div>
        </div>

        <!-- 内容部分 -->
        <div class="login_banner_panel">
            <div class="layout_panel">
                <div class="tabs">
                    <ul class="tab-title">
                        <li
                            v-for="(title,index) in tabTitle"
                            @click="cur=index"
                            :class="{active:cur==index}"
                            :key="index"
                        >{{title}}</li>
                    </ul>

                    <div class="tab-content">
                        <!-- 账号登录 -->
                        <div v-if="!cur">
                            <el-form ref="form" :model="form" label-width="auto">
                                <el-form-item>
                                    <el-input v-model="form.email" placeholder="邮箱/手机号码/小米ID"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input v-model="form.password" placeholder="密码"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary">登录</el-button>
                                </el-form-item>
                            </el-form>

                            <!-- 手机短信登录 -->
                            <div class="other_panel">
                                <div class="sms_link">
                                    <el-link type="primary">手机短信登录/注册</el-link>
                                </div>
                                <div class="reverse">
                                    <el-link target="_blank">立即注册</el-link>
                                    <span class="shu">|</span>
                                    <el-link target="_blank">忘记密码</el-link>
                                </div>
                            </div>

                            <!-- 其他登录方式 -->
                            <div class="other_login_type">
                                <el-divider>其他方式登录</el-divider>
                                <div class="oth_type_links">
                                    <el-link>
                                        <i class="icon icon-QQ"></i>
                                    </el-link>
                                    <el-link>
                                        <i class="icon icon-weibo"></i>
                                    </el-link>
                                    <el-link>
                                        <i class="icon icon-zhifubao"></i>
                                    </el-link>
                                    <el-link>
                                        <i class="icon icon-weixin"></i>
                                    </el-link>
                                </div>
                            </div>
                        </div>

                        <!-- 扫码登录 -->
                        <div v-if="cur" class="code_box">
                            <el-image
                                style="width: 180px; height: 180px"
                                :src="require('@/assets/images/login/erweima.png')"
                                fit="fit"
                            ></el-image>
                            <el-divider>小米旗下App</el-divider>
                            <div class="apps_panel">
                                <el-link>
                                    <i class="icon icon-xiaomi"></i>
                                    <p class="text">米家</p>
                                </el-link>
                                <el-link>
                                    <i class="icon icon-xiaomi"></i>
                                    <p class="text">小米商城</p>
                                </el-link>
                                <el-link>
                                    <i class="icon icon-xiaomi"></i>
                                    <p class="text">小爱音箱</p>
                                </el-link>

                                <div class="custom_sub_txt">
                                    <p class="custom-qr-name">
                                        使用
                                        <span>小米商城APP</span>扫一扫
                                    </p>
                                    <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <div class="n-footer">
            <div class="footer-divider">
                <span>简体</span>
                <el-divider direction="vertical"></el-divider>
                <span>繁体</span>
                <el-divider direction="vertical"></el-divider>
                <span>English</span>
                <el-divider direction="vertical"></el-divider>
                <span>常见问题</span>
                <el-divider direction="vertical"></el-divider>
                <span>隐私政策</span>
            </div>
            <div class="f-intro">
                小米公司版权所有-京ICP备10046444-
                <el-link>
                    <el-image
                        style="width: 20px; height: 20px"
                        :src="require('@/assets/images/login/ghs.png')"
                        fit="fit"
                    ></el-image>京公网安备11010802020134号
                </el-link>-京ICP证110507号
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            cur: 0, //默认选中第一个tab
            tabTitle: ["账号登录", "扫码登录"],
            form: {
                email: "",
                password: "",
            },
        };
    },
};
</script>

<style lang='scss' scoped>
.login /deep/ {
    background: #fff;

    .h_panel,
    .layout_panel {
        width: 1130px;
        margin: 0 auto;
    }

    .h_logo {
        width: 200px;
        height: 98px;
        background: url("~@/assets/images/login/mistore_logo.png") no-repeat;
    }

    .login_banner_panel {
        width: 100%;
        height: 588px;
        background: url("~@/assets/images/login/mistore_bg.jpg") no-repeat top
            center;

        .layout_panel {
            padding-top: 30px;

            // 选项卡
            .tabs {
                width: 410px;
                float: right;
                background: #fff;

                .tab-content {
                    padding: 0 30px;
                }
            }

            // 手机短信登录
            .other_panel {
                margin-top: -15px;

                .sms_link {
                    text-align: center;
                    margin-bottom: 30px;
                }

                // 忘记密码
                .reverse {
                    display: flex;
                    justify-content: center;

                    .el-link.el-link--default {
                        color: #999;
                        font-size: 14px;

                        &:hover {
                            color: #409eff;
                        }
                    }

                    .shu {
                        color: #999;
                        margin: 0 5px;
                    }
                }
            }

            // 其他登录方式
            .other_login_type {
                padding-top: 143px;
                text-align: center;

                .el-divider__text {
                    color: #bbb;
                }

                .oth_type_links {
                    padding-bottom: 20px;
                    .el-link {
                        margin: 0 20px;

                        i {
                            font-size: 30px;
                            color: #409eff;
                        }
                    }
                }
            }

            // 扫码登录
            .code_box {
                text-align: center;

                .el-image {
                    margin: 50px 0 30px;
                }

                .el-divider__text {
                    color: #bbb;
                }

                .apps_panel {
                    text-align: center;
                    font-size: 10px;
                    padding-bottom: 20px;

                    .el-link {
                        margin: 0 15px;
                        min-width: 40px;
                        max-width: 60px;

                        .icon {
                            font-size: 32px;
                        }

                        .text {
                            height: 20px;
                            line-height: 20px;
                            font-size: 12px;
                        }
                    }

                    .custom_sub_txt {
                        padding-top: 28px;
                        font-size: 14px;
                        text-align: center;

                        p {
                            color: #757575;
                            font-size: 14px;
                            margin-bottom: 10px;
                        }

                        .custom-qr-name span {
                            padding: 0 5px;
                            color: #ff6700;
                        }
                    }
                }
            }
        }
    }

    // 底部
    .n-footer {
        background: #fff;
        padding-top: 100px;
        padding-bottom: 20px;
        position: relative;
        z-index: 4;

        .footer-divider {
            text-align: center;
            color: #757575;
            font-size: 14px;
        }

        .f-intro {
            padding: 10px;
            color: #757575;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;

            .el-image {
                vertical-align: bottom;
            }
        }
    }
}
</style>