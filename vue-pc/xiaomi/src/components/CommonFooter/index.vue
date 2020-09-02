<template>
    <div class="common-footer">
        <div class="container">
            <div class="footer-service">
                <ul class="list-service clearfix">
                    <li v-for="(item,index) in footerService" :key="index">
                        <el-link :underline="false" :href="item.router" target="_blank">
                            <span :class="'icon ' + item.icon"></span>
                            <span class="name">{{ item.name }}</span>
                        </el-link>
                    </li>
                </ul>
            </div>

            <div class="footer-links clearfix">
                <dl class="col-links" v-for="(item,index) in footerLinks" :key="index">
                    <dt>{{ item.name }}</dt>
                    <dd v-for="(i,index) in item.children" :key="index">{{ i.name }}</dd>
                </dl>

                <div class="col-contact">
                    <p class="phone">400-100-5678</p>
                    <p>8:00-18:00（仅收市话费）</p>
                    <el-button size="small">主要按钮</el-button>
                    <div class="follow">
                        关注小米：
                        <span class="icon icon-weibo"></span>
                        <span class="icon icon-weixin"></span>
                    </div>
                </div>
            </div>

            <div class="site-info">
                <p class="sites clearfix">
                    <el-link
                        v-for="(item,index) in infoText"
                        :key="index"
                        target="_blank"
                    >{{ item.name }}</el-link>
                </p>
                <p class="record">
                    ©
                    <el-link>mi.com</el-link>京ICP证110507号
                    <el-link>京ICP备10046444号</el-link>
                    <el-link>京公网安备11010802020134号</el-link>
                    <el-link>京网文[2020]0276-042号</el-link>
                    <br />
                    <el-link>（京）网械平台备字（2018）第00005号</el-link>
                    <el-link>互联网药品信息服务资格证 (京)-非经营性-2014-0090</el-link>
                    <el-link>营业执照</el-link>
                    <el-link>医疗器械质量公告</el-link>
                    <br />
                    <el-link>增值电信业务许可证</el-link>网络食品经营备案 京食药网食备201810017
                    <el-link>食品经营许可证</el-link>
                    <br />违法和不良信息举报电话：171-5104-4404&nbsp;
                    <el-link>知识产权侵权投诉</el-link>本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                </p>
                <div class="info-links">
                    <el-image src="http://i1.mifile.cn/f/i/17/site/truste.png" fit="fit"></el-image>
                    <el-image src="http://s01.mifile.cn/i/v-logo-2.png" fit="fit"></el-image>
                    <el-image src="http://s01.mifile.cn/i/v-logo-1.png" fit="fit"></el-image>
                    <el-image
                        src="http://i8.mifile.cn/b2c-mimall-media/ba10428a4f9495ac310fd0b5e0cf8370.png"
                        fit="fit"
                    ></el-image>
                </div>
            </div>

            <div class="slogan">探索黑科技，小米为发烧而生</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "common-footer",
    data() {
        return {
            footerService: [],
            footerLinks: [],
            infoText: [],
        };
    },
    created() {
        this.getFooterDataList();
    },
    methods: {
        // 获取数据
        async getFooterDataList() {
            await this.$api.getFooterDataList().then((res) => {
                this.footerService = res.data.footerService;
                this.footerLinks = res.data.footerLinks;
                this.infoText = res.data.infoText;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.common-footer /deep/ {

    .footer-service {
        padding: 27px 0;
        border-bottom: 1px solid #e0e0e0;

        .list-service {
            display: flex;

            li {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #616161;
                transition: color 0.2s;
                font-size: 16px;
                border-left: 1px solid #e0e0e0;
                cursor: pointer;

                .icon {
                    font-size: 24px;
                    vertical-align: text-bottom;
                    margin-right: 5px;
                }

                .name {
                    vertical-align: 5px;
                }

                &:first-child {
                    border-left: none;
                }

                &:hover {
                    color: #ff6700;
                }
            }
        }
    }

    .footer-links {
        padding: 40px 0 20px 0;

        .col-links {
            width: 160px;
            float: left;

            dt {
                margin: -1px 0 26px;
                font-size: 14px;
                line-height: 1.25;
                color: #424242;
            }

            dd {
                margin: 10px 0 0;
                font-size: 12px;
                color: #757575;
                cursor: pointer;

                &:hover {
                    color: #ff6700;
                }
            }
        }

        // 人工客服
        .col-contact {
            float: right;
            width: 251px;
            border-left: 1px solid #e0e0e0;
            text-align: center;
            color: #616161;

            p {
                margin: 0 0 5px 0;
                font-size: 12px;
            }

            .phone {
                font-size: 22px;
                line-height: 1;
                color: #ff6700;
            }

            .el-button {
                width: 120px;
            }

            .follow {
                font-size: 12px;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                align-items: center;

                .icon {
                    margin: 0 3px;
                    cursor: pointer;

                    &:hover {
                        color: #ff6700;
                    }
                }
            }
        }
    }

    .site-info {
        p {
            margin: 14px 0;
        }

        .sites {
            .el-link {
                float: left;
                color: #757575;
                line-height: 1;
                padding-right: 8px;
                margin-right: 8px;
                border-right: 1px solid #606266;

                &:last-child {
                    border-right: none;
                }
            }
        }

        .record {
            .el-link {
                margin: 0 3px;
            }
        }
    }

    .slogan {
        display: block;
        text-align: left;
        text-indent: -9999em;
        overflow: hidden;
    }
}
</style>