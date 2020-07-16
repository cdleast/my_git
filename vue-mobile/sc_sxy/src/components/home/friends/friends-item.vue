<template>
    <div @click="isSlhShow">
        <div class="moments-post" v-for="(item,index) in datas" :key="index">
            <div class="post-left">
                <van-image round width="45" height="45" :src="item.USER_IMG[0].FILE_PATH" />
            </div>
            <div class="post-right">
                <div class="post-username">{{ item.S_USER__NAME }}</div>
                <div class="post-company">{{ item.IMAGES[0] && item.IMAGES[0].S_DNAME }}</div>
                <div class="paragraph">{{ item.CONTENT }}</div>
                <div class="thumbnails">
                    <template v-if="item.IMAGES.length">
                        <van-image
                            fit="cover"
                            width="125"
                            height="200"
                            v-show="item.IMAGES.length<=1"
                            :src="item.IMAGES[0]&&item.IMAGES[0].FILE_PATH"
                            @click="sceneImg(item.IMAGES)"
                        />
                        <van-image
                            fit="cover"
                            width="85"
                            height="90"
                            v-show="item.IMAGES.length>1"
                            v-for="(i,index) in item.IMAGES"
                            :key="index"
                            :src="i.FILE_PATH"
                            @click="sceneImg(item.IMAGES, index)"
                        />
                    </template>

                    <video
                        id="myVideo"
                        class="video-js vjs-default-skin vjs-big-play-centered"
                        controls
                        preload="auto"
                        v-if="item.VIDEO[0]"
                    >
                        <source :src="item.VIDEO[0].FILE_PATH" type="video/mp4" />
                    </video>
                </div>
                <div class="toolbar">
                    <div class="timestamp">{{ item.distanceTime }}</div>
                    <div class="toolbar-right">
                        <div class="toolbar-right-hidden">
                            <transition name="van-slide-right">
                                <div class="slide-right" v-show="cur === index">
                                    <div
                                        @click="item.isItLike === 'false'?onGiveLike(item.ID,item.LIKE_NUM):onCancelLike(item.ID,item.LIKE_NUM)"
                                        class="like like-comments-item"
                                    >
                                        <span class="icon icon-xin"></span>
                                        <span v-if="item.isItLike === 'false'">赞</span>
                                        <span v-else>取消</span>
                                    </div>
                                    <div
                                        class="comment like-comments-item"
                                        @click="onMesShow(item.ID,item.LIKE_NUM)"
                                    >
                                        <span class="icon icon-pinglun"></span>
                                        <span>评论</span>
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <span @click.stop="onSlhShow(index)" class="icon icon-shenglvehao"></span>
                    </div>
                </div>
                <div class="post-footer" v-if="item.likes.length>0">
                    <div class="footer-content">
                        <span class="icon icon-zansel"></span>
                        <span class="nickname">{{ item.likes | likesSplit}}</span>
                    </div>
                </div>
                <div class="comments-content" v-for="i in item.COMMENT.CHILD" :key="i.ID">
                    <span class="name">{{ i.S_UNAME }}:</span>
                    <span class="content">{{ i.NAME }}</span>
                </div>
            </div>
        </div>

        <!-- 评论框 -->
        <van-cell-group class="input-box" v-show="mesShow">
            <van-field v-model="message" center autosize clearable>
                <template #button>
                    <van-button @click="onAddComment" size="small" type="primary">确认</van-button>
                </template>
            </van-field>
        </van-cell-group>
    </div>
</template>

<script>
import { ImagePreview } from "vant";
import homeApi from "@/api/home";
export default {
    name: "friends-item",
    data() {
        return {
            startPosition: 0, // 图片预览起始位置索引
            cur: -1, // 点赞评论按钮初始下标
            message: "", // 评论内容
            mesShow: false,
            msgInfo: {
                MOMENTS_ID: "",
                COMMENT_NUM: ""
            }
        };
    },
    props: {
        datas: {
            type: Array
        }
    },
    filters: {
        // 把喜欢点赞的名字以逗号进行分隔
        likesSplit(item) {
            let datas = item.map(i => {
                return i.S_USER__NAME;
            });
            return datas.join();
        }
    },
    mounted() {},
    methods: {
        // 图片预览
        sceneImg(images, index) {
            let IMAGES = images.map(item => {
                return item.FILE_PATH;
            });
            ImagePreview({
                images: IMAGES, // 需要预览的图片URL数组
                showIndex: true, // 是否显示页码
                startPosition: index || this.startPosition // 图片预览起始位置索引
            });
        },

        // 点赞评论显示
        onSlhShow(index) {
            if (this.cur === index) {
                this.cur = -1;
            } else {
                this.cur = index;
            }
        },

        // 点击任何地方隐藏点赞取消弹窗
        isSlhShow() {
            this.cur = -1;
        },

        // 点赞
        async onGiveLike(ID, LIKE_NUM) {
            const data = {
                MOMENTS_ID: ID,
                LIKE_NUM: LIKE_NUM
            };
            await homeApi.appGiveLike(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (_MSG_.includes("OK")) {
                    // 重新获取数据
                    this.$emit("appColleagueList");
                    // this.$parent.appColleagueList();
                } else {
                    this.$toast("点赞失败");
                }
            });
        },

        // 取消点赞
        async onCancelLike(ID, LIKE_NUM) {
            const data = {
                MOMENTS_ID: ID,
                LIKE_NUM: LIKE_NUM
            };
            await homeApi.appCancelLike(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (_MSG_.includes("OK")) {
                    // 重新获取数据
                    this.$emit("appColleagueList");
                    // this.$parent.appColleagueList();
                } else {
                    this.$toast("取消点赞失败");
                }
            });
        },

        // 打开评论输入框
        onMesShow(ID, LIKE_NUM) {
            this.mesShow = true;
            this.msgInfo.MOMENTS_ID = ID;
            this.msgInfo.COMMENT_NUM = LIKE_NUM;
        },

        // 添加同事圈评论
        async onAddComment() {
            let data = {
                MOMENTS_ID: this.msgInfo.MOMENTS_ID,
                COMMENT_NUM: this.msgInfo.COMMENT_NUM,
                CONTENT: this.message
            };
            await homeApi.appAddComment(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.mesShow = false;
                    this.message = "";
                    this.$parent.appColleagueList();
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.moments-post /deep/ {
    border-bottom: 1px solid #f2eeee;
    padding: 30px;
    position: relative;
    display: flex;

    .post-left {
    }

    .post-right {
        flex: 1;
        padding: 0 20px 0 30px;

        .post-username {
            font-size: 34px;
            font-weight: 600;
            color: $active-color;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .post-company {
            color: #9a9a9a;
            font-size: 24px;
            line-height: 40px;
        }

        .paragraph {
            margin-top: 14px;
            font-size: 32px;
            line-height: 50px;
            font-weight: 500;
            color: #323232;
            word-break: break-all;
            overflow: hidden;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .van-image {
                margin-bottom: 20px;
            }
        }

        .toolbar {
            position: relative;
            top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .timestamp {
                color: #757575;
                font-size: 22px;
            }

            .toolbar-right {
                position: relative;
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                height: 82px;
                .toolbar-right-hidden {
                    overflow: hidden;
                    position: absolute;
                    right: 40px;
                    height: 100%;
                    width: 400px;
                }
            }

            .slide-right {
                position: absolute;
                right: 5px;
                width: 360px;
                padding: 20px 0;
                background: rgba(80, 85, 89, 1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 999;

                .like-comments-item {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 30px;
                    color: #fff;
                    font-weight: 500;

                    span {
                        margin: 0 4px;
                    }

                    .icon {
                        font-size: 30px;
                        color: #fff;
                    }
                }

                .like {
                    border-right: 1px solid #2c2f32;
                }
            }
        }

        .post-footer {
            margin-top: 30px;
            width: 100%;
            padding: 10px 0;
            background-color: #f3f3f5;

            .footer-content {
                padding: 0 10px;
                position: relative;
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .icon {
                    margin-right: 10px;
                }

                .nickname {
                    color: $active-color;
                    font-size: 30px;
                }
            }
        }

        .comments-content {
            background-color: #f3f3f5;
            padding: 0 6px;
            line-height: 40px;
            .name {
                font-size: 30px;
                color: #409eff;
            }
            .content {
                font-size: 30px;
                color: #000;
                margin-left: 6px;
            }
        }
    }

    .video-js {
        width: 250px;
        height: 400px;
    }

    .van-slide-right-enter-active,
    .van-slide-right-leave-active {
        transition: all 0.2s ease;
    }

    /* 定义进入过渡的开始状态 和 离开过渡的结束状态 */
    .van-slide-right-enter,
    .van-slide-right-leave-to {
        transition: all 0.2s ease;
    }
}

.input-box /deep/ {
    position: fixed;
    bottom: 100px;
    z-index: 999;
    width: 100%;
    .van-cell {
        background: #ededed;
        .van-field__control {
            background: #fff;
            height: 60px;
            border-radius: 5px;
        }
    }
}
</style>