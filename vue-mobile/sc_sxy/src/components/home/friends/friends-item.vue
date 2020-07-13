<template>
    <div>
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
                    <span @click="onSlhShow(index)" class="icon icon-shenglvehao">
                        <transition name="van-slide-right">
                            <div class="slide-right" v-show="cur === index">
                                <div class="like like-comments-item">
                                    <span class="icon icon-xin"></span>
                                    <span>赞</span>
                                    <!-- <span>取消</span> -->
                                </div>
                                <div class="comment like-comments-item">
                                    <span class="icon icon-pinglun"></span>
                                    <span>评论</span>
                                </div>
                            </div>
                        </transition>
                    </span>
                </div>
                <div class="post-footer" v-if="item.likes.length>0">
                    <div class="footer-content">
                        <span class="icon icon-zansel"></span>
                        <span class="nickname">{{ item.likes | likesSplit}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
    name: "friends-item",
    data() {
        return {
            startPosition: 0, // 图片预览起始位置索引
            cur: -1
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
            }else{
                this.cur = index
            }
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
        }

        .toolbar {
            height: 60px;
            position: relative;
            top: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .timestamp {
                color: #757575;
                font-size: 22px;
            }

            .slide-right {
                position: absolute;
                right: 40px;
                bottom: -10px;
                width: 360px;
                height: 80px;
                background: rgba(80, 85, 89, 1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;

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
    }
}

.video-js {
    width: 250px;
    height: 400px;
}
</style>