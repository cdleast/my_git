<template>
    <div class="company-profile">
        <div class="page-video">
            <el-image class="video-bg" src="http://i1.mifile.cn/f/i/18/about/about_3.jpg" fit="fit"></el-image>
            <div class="btn-play" @click="dialogVisible = true">
                <el-image src="http://c1.mifile.cn/f/i/17/aispeaker/index/btn-play.png" fit="fit"></el-image>
            </div>
        </div>
        <div class="service-page-html">
            <div class="section">
                <h2>永远相信美好的事情即将发生</h2>
                <p>小米公司正式成立于2010年4月，是一家以手机、智能硬件和 IoT 平台为核心的互联网公司。创业仅7年时间，小米的年收入就突破了千亿元人民币。截止2018年，小米的业务遍及全球80多个国家和地区。</p>
                <p>小米的使命是，始终坚持做“感动人心、价格厚道”的好产品，让全球每个人都能享受科技带来的美好生活。</p>
            </div>
        </div>
        <div class="image_one_col">
            <el-image
                src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/510d5f68e56e60f583bbbb0c12bd1b1d.jpg?w=1226&h=690"
                fit="fit"
            ></el-image>
        </div>
        <div class="service-page-html">
            <div class="section">
                <p>“和用户交朋友，做用户心中最酷的公司”的愿景都在驱动着我们努力创新，不断追求极致的产品和效率，成就了一个不断缔造成长奇迹的小米。</p>
            </div>
        </div>
        <div class="image_one_col">
            <el-image
                src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3fb39b908a57ae925f870277a07526a2.jpg?w=1226&h=634"
                fit="fit"
            ></el-image>
        </div>
        <div class="service-page-html">
            <div class="section">
                <p>目前，小米是全球第四大智能手机制造商，在30余个国家和地区的手机市场进入了前五名，特别是在印度，连续5个季度保持手机出货量第一。通过独特的“生态链模式”，小米投资、带动了更多志同道合的创业者，同时建成了连接超过1.3亿台智能设备的IoT平台。</p>
                <p>2018年7月9日，小米成功在香港主板上市，成为了港交所首个同股不同权上市公司，创造了香港史上最大规模科技股IPO，以及当时历史上全球第三大科技股IPO。</p>
                <p>感谢您关注小米，和我们并肩投身于创造商业效率新典范，用科技改善人类生活的壮丽事业。许商业以敦厚，许科技以温暖，许大众以幸福，我们的征途是星辰大海，请和我们一起，永远相信美好的事情即将发生。</p>
            </div>
        </div>
        <div class="image_one_col">
            <el-image
                src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c4ec0786726524f2d4d436c811d799e.jpg?w=1226&h=672"
                fit="fit"
            ></el-image>
        </div>

        <el-dialog
            title="视频播放"
            v-if="dialogVisible"
            :visible.sync="dialogVisible"
            width="880px"
            :destroy-on-close="true"
            :before-close="handleClose"
            top="10vh"
        >
            <video
                class="video-js vjs-default-skin vjs-big-play-centered"
                controls
                preload="auto"
                autoplay="autoplay"
                poster="http://i1.mifile.cn/f/i/18/about/about_3.jpg"
                ref="myvideo"
                @click="playAndPause"
            >
                <source
                    src="https://v.mifile.cn/b2c-mimall-media/71fa48c0e68fe732a3b7c28e1b33278d.mp4"
                    type="video/mp4"
                />
            </video>

            <!-- 自定义播放图标 -->
            <div ref="btnPlay" class="btn-play btn-play-child" @click="playBtn" v-if="isBtnPlay">
                <el-image src="http://c1.mifile.cn/f/i/17/aispeaker/index/btn-play.png" fit="fit"></el-image>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "company-profile",
    data() {
        return {
            dialogVisible: false,
            isBtnPlay: false,
        };
    },
    methods: {
        handleClose(done) {
            done();
        },
        // video的播放暂停
        playAndPause() {
            let state = this.$refs.myvideo.paused;
            if (state) {
                this.$refs.myvideo.pause();
                this.isBtnPlay = false;
            } else {
                this.$refs.myvideo.play();
                this.isBtnPlay = true;
            }
        },
        // 按钮播放
        playBtn() {
            this.$refs.myvideo.play();
            this.isBtnPlay = false;
        },
    },
};
</script>

<style lang='scss' scoped>
// 公司简介
.company-profile /deep/ {
    .el-dialog {
        height: 500px;

        .el-dialog__body {
            height: 100%;
            padding: 0;
            position: relative;

            .video-js {
                background: none;
                width: 100%;
                height: 100%;
            }
        }
    }

    .page-video {
        position: relative;
    }

    // 自定义播放图标
    .btn-play {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90px;
        height: 90px;
        margin-left: -60px;
        margin-top: -45px;
        cursor: pointer;
    }

    .service-page-html {
        padding: 20px 0;
        background-color: #fff;

        .section {
            padding: 67px 310px;

            h2 {
                font-size: 28px;
                color: #333;
                font-weight: 400;
            }

            p {
                color: #757575;
                font-size: 14px;
                line-height: 1.7;
                margin: 10px 0 0 0;
            }
        }
    }
}
</style>