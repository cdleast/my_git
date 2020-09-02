<template>
    <div class="service-repair">
        <div class="container">
            <div class="section section-top">
                <div class="content">
                    <h1 class="webfont">
                        <em class="webfont">1</em>小时快修
                    </h1>
                    <p>免费开启“预约维修”</p>
                    <p>免排队特权等你来享</p>
                    <el-link class="btn-check" :underline="false">预约快修服务</el-link>
                </div>
                <div class="bg-pic"></div>
            </div>
        </div>

        <div class="section section-flow">
            <div class="container">
                <h3>轻松3步 完成预约</h3>
                <ul>
                    <li class="step-first">
                        <span class="icon"></span>
                        <span class="text">登录 mi.com 服务页面</span>
                    </li>
                    <li class="step-second">
                        <span class="icon"></span>
                        <span class="text">申请售后服务</span>
                    </li>
                    <li class="step-third">
                        <span class="icon"></span>
                        <span class="text">填写信息&预约维修时间</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="section section-yuyue">
            <div class="container">
                <h3>预约特权</h3>
                <ul class="clearfix">
                    <li>
                        <span class="icon icon-1"></span>
                        <span class="text">
                            到店前
                            <br />专人提前电话关怀
                        </span>
                    </li>
                    <li>
                        <span class="icon icon-2"></span>
                        <span class="text">
                            到店后
                            <br />专属通道，专人服务
                        </span>
                    </li>
                    <li>
                        <span class="icon icon-3"></span>
                        <span class="text">
                            排队时间短
                            <br />到店即办理
                        </span>
                    </li>
                    <li>
                        <span class="icon icon-4"></span>
                        <span class="text">
                            保内用户，到店后
                            <br />享受一小时快修服务
                        </span>
                    </li>
                    <li>
                        <span class="icon icon-5"></span>
                        <span class="text">
                            保内用户维修时间
                            <br />超1小时，即享砸蛋抽奖
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="section section-question">
            <h3>常见问题</h3>
            <ul>
                <li>
                    <p class="question">什么是1小时快修服务？</p>
                    <p>对于保内的小米手机用户，我们向已预约的客户承诺，从取号到取机，一小时内完成，向未预约的客户承诺，从受理后一小时内完成维修。</p>
                </li>
                <li>
                    <p class="question">什么是预约服务？</p>
                    <p>小米手机用户，可以根据您的日程安排，在小米官网上预约到店维修的时间。</p>
                </li>
                <li>
                    <p class="question">除手机外，其他产品也能一小时快修吗？</p>
                    <p>目前为止，一小时快修只针对保内的小米/红米手机产品。</p>
                </li>
                <li>
                    <p class="question">什么样的产品可以预约服务？</p>
                    <p>目前为止，预约维修服务只针对小米/红米手机产品。</p>
                </li>
                <li>
                    <p class="question">预约有哪些好处？</p>
                    <p>
                        a. 预约后，有专人为您服务，提前打电话给您了解情况，到店后有专人接待。
                        <br />b. 预约后，网点可以根据您的机型和故障，提前准备材料，节约到店的维修时间。
                        <br />c. 您按预约时间到店后，可以直接取号，有专属的预约通道，减少排队时间。
                        <br />d. 保内用户，还享受一小时快修服务。
                        <br />e. 保内用户，如果从取号到取机时间超出一小时，您还有机会获得意外的惊喜。
                    </p>
                </li>
                <li>
                    <p class="question">我是米粉既有手机又有其他产品，我能用小米手机的串号给其他产品预约维修服务吗？</p>
                    <p>除手机外，目前无法支持其他产品预约服务。</p>
                </li>
                <li>
                    <p class="question">我错过预约的时间，那还能享受预约服务的待遇吗？</p>
                    <p>不能，错过预约时间后，需要您按照非预约重新取号。</p>
                </li>
                <li>
                    <p class="question">我预约的时间提前到店，是否可以提前取号？</p>
                    <p>不能提前取预约号但到店可以选择非预约取号，还能待您预约时段到后再取预约号。</p>
                </li>
                <li>
                    <p class="question">预约需要提前多长时间？</p>
                    <p>最少需要提前三小时预约。</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "service-repair",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.service-repair {
    width: 100%;
    background: #fff;

    .section {
        h3 {
            padding-top: 138px;
            text-align: center;
            font-size: 54px;
            color: #fff;
        }
    }

    .section-top {
        height: 500px;

        .content {
            margin: 143px 0 0 206px;
            float: left;
            color: #333;
            font-size: 24px;

            h1 {
                font-size: 72px;
                padding-bottom: 30px;
                font-weight: 400;

                em {
                    color: #ff6709;
                }
            }

            p {
                text-indent: 42px;
                line-height: 40px;
            }

            .btn-check {
                margin: 22px 0 0 42px;
                width: 222px;
                height: 55px;
                line-height: 55px;
                text-align: center;
                color: #fff;
                font-size: 16px;
                background: #ff6709;

                &:hover {
                    color: #fff !important;
                }
            }
        }

        .bg-pic {
            float: left;
            margin: 96px 0 0 145px;
            width: 335px;
            height: 336px;
            background: url("https://c1.mifile.cn/f/i/16/service/fast/bg-top.png")
                no-repeat 50%;
        }
    }

    .section-flow {
        height: 713px;
        background: url("https://c1.mifile.cn/f/i/16/service/fast/bg-flow.jpg")
            no-repeat 50%;

        ul {
            width: 1026px;
            height: 223px;
            margin: 116px auto 0;

            li {
                float: left;
                min-width: 164px;

                .icon {
                    display: block;
                    margin: 0 89px;
                    width: 164px;
                    height: 163px;
                    background-image: url("https://c1.mifile.cn/f/i/16/service/fast/bg-icon.png");
                }

                .icon:after {
                    content: "";
                    display: inline-block;
                    margin: 57px 54px 0 222px;
                    width: 68px;
                    height: 68px;
                    background-image: url("https://c1.mifile.cn/f/i/16/service/fast/bg-icon.png");
                    background-position: -222px -57px;
                }

                .text {
                    display: block;
                    margin-top: 33px;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                }

                &.step-first .icon {
                    background-position: 0 0;
                }

                &.step-second .icon {
                    background-position: -340px 0;
                }

                &.step-third .icon {
                    background-position: -685px 0;
                }

                &.step-third .icon::after {
                    display: none;
                }
            }
        }
    }

    .section-yuyue {
        height: 603px;
        font-size: 18px;
        color: #000;

        h3 {
            padding-top: 130px;
            color: #000;
        }

        ul {
            width: 1160px;
            margin: 76px auto 0;

            li {
                float: left;
                min-width: 128px;

                .icon {
                    display: block;
                    margin: 0 52px;
                    width: 128px;
                    height: 128px;
                    background-image: url("https://c1.mifile.cn/f/i/16/service/fast/icon-all.png");
                }

                .text {
                    display: block;
                    margin-top: 22px;
                    text-align: center;
                }

                .icon-1 {
                    background-position: 0 0;
                }

                .icon-2 {
                    background-position: -128px 0;
                }

                .icon-3 {
                    background-position: -256px 0;
                }

                .icon-4 {
                    background-position: -384px 0;
                }

                .icon-5 {
                    background-position: -512px 0;
                }
            }
        }
    }

    .section-question {
        height: 1607px;
        background: url("https://c1.mifile.cn/f/i/16/service/fast/bg-question.jpg")
            no-repeat 50%;

        ul {
            padding: 0 73px 0;
            margin: 30px auto 0;
            width: 853px;
            color: #ffdbb7;
            font-size: 18px;

            li {
                padding: 25px 0 25px 12px;
                border-bottom: 1px solid #f7c3a6;

                .question {
                    padding-bottom: 20px;
                    font-size: 22px;
                    color: #fff;
                }
            }
        }
    }
}
</style>