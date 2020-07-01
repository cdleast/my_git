<template>
    <div class="course-details">
        <header-bar title="课程详情"></header-bar>

        <!-- 背景图 -->
        <div class="image-box" :style="{backgroundImage:'url('+ avatar +')'}"></div>

        <!-- tab标签切换 -->
        <van-tabs
            v-model="active"
            scrollspy
            sticky
            :offset-top="246"
            v-for="items in courseDetails"
            :key="items.ID"
        >
            <van-tab class="course-details" title="详情">
                <!-- 表头描述 -->
                <div class="details-describe">
                    <h2 class="details-title">{{items.NAME}}</h2>
                    <div class="details-target">
                        <span>目标：</span>
                        <span
                            v-for="(item, index) in items.CONDITION_TYPE.split(',')"
                            :key="index"
                            class="details-target-learn"
                        >
                            <span v-if="item">{{ item | formatConditionType }}</span>
                        </span>
                    </div>
                    <div class="details-reward">
                        <span>奖励：</span>
                        <div class="parcel" v-if="items.CREDIT">
                            <span class="circle"></span>
                            <span class="item">学分+{{ items.CREDIT }}</span>
                        </div>
                        <div class="parcel" v-if="items.INTEGRAL">
                            <span class="circle"></span>
                            <span class="item">积分+{{ items.INTEGRAL }}</span>
                        </div>
                        <div class="parcel" v-if="items.EXPERIENCE">
                            <span class="circle"></span>
                            <span class="item">经验+{{ items.EXPERIENCE }}</span>
                        </div>
                    </div>
                </div>

                <!-- 课程介绍 -->
                <div class="details-intro">
                    <div class="intro-title">课程介绍</div>
                    <div class="intro-content">{{ items.MEMO || '暂无简介' }}</div>
                    <div class="intro-teacher">老师</div>
                    <div class="teacher-info">
                        <van-image
                            round
                            width="50"
                            height="50"
                            :src="items.LECTURER&&items.LECTURER.IMAGE_FILE&&items.LECTURER.IMAGE_FILE[0]&&items.LECTURER.IMAGE_FILE[0].FILE_PATH"
                        />
                        <div class="teacher-box">
                            <div
                                class="teacher-name"
                            >{{ items.LECTURER && items.LECTURER.SHOW_NAME }}</div>
                            <div
                                class="teacher-intro"
                            >{{ items.LECTURER && items.LECTURER.SHOW_DEPT }}</div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab class="course-directory" title="目录">
                <div class="directory-title">目录</div>
                <van-collapse
                    :border="false"
                    class="directory-collapse"
                    v-model="activeNames"
                    v-for="items in coursewareList"
                    :key="items.ID"
                >
                    <van-collapse-item :title="items.NAME" :name="items._ROWNUM_">
                        <div class="directory-topic">
                            <span class="icon icon-tiezi"></span>
                            <div class="directory-topic-box">
                                <div class="directory-title-text">{{ items.NAME }}</div>
                                <div
                                    class="directory-infomation"
                                    v-for="item in items.FILE"
                                    :key="item.DATA_ID"
                                >
                                    <span
                                        class="status-circle"
                                        :class="[ item.WHETFERLEARN === '3' ? 'finished-status-circle' : 'not-finished-status-circle' ]"
                                    ></span>
                                    <span
                                        class="status-text"
                                    >{{ item.WHETFERLEARN === '3' ? '已完成学习' : item.WHETFERLEARN === '2' ? '学习中' : '未完成学习' }}</span>
                                </div>
                            </div>
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </van-tab>
            <van-tab class="course-evaluation" :title="`评价(${ averageComments.COMMENTS })`">
                <div class="evaluation-title">评价</div>
                <div class="evaluation-score-section">
                    <span class="l-score">{{ averageComments.AVERAGE }}</span>
                    <div class="star-section">
                        <van-rate
                            v-model="score"
                            readonly
                            allow-half
                            void-icon="star"
                            void-color="#ff9f4d"
                            size="28"
                            gutter="8"
                        />
                        <span class="pingjia-text">{{ '共 ' + averageComments.COMMENTS + ' 条评价' }}</span>
                    </div>
                    <div class="r-score">
                        <span class="desp">5.0</span>
                        <span>满分</span>
                    </div>
                </div>
                <!-- 评论 -->
                <div
                    class="comment-list van-hairline--bottom"
                    v-for="items in queryComments"
                    :key="items.ID"
                >
                    <div class="comment-head">
                        <van-image
                            class="comment-portrait"
                            width="50"
                            height="50"
                            round
                            v-if="items.USER_IMG[0]"
                            :src="items.USER_IMG[0].FILE_PATH"
                        />
                        <div class="comment-person">
                            <div class="comment-person-name">{{ items.S_USER__NAME }}</div>
                            <div
                                class="comment-person-time"
                            >{{ items.S_MTIME | comverTime('YYYY-MM-DD HH:mm')}}</div>
                        </div>
                    </div>
                    <div class="comment-content">{{ items.CONTENT }}</div>
                    <div class="comment-footer">
                        <van-rate
                            v-model="commentScore"
                            allow-half
                            readonly
                            void-icon="star"
                            void-color="#eee"
                        />
                        <div class="comment-footer-right">
                            <span
                                v-if="items.SUPPORT_CODE === 'N'"
                                @click="onAddSupport(items.ID)"
                                class="icon icon-zansel no"
                            ></span>
                            <span
                                v-else
                                @click="onDeleteSupport(items.ID)"
                                class="icon icon-zansel"
                            ></span>
                            <span class="num">{{ items.LIKE_COUNT }}</span>
                        </div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>

        <div class="add-comments van-hairline--top">
            <van-button @click="commentsShow = true" round>添加评价</van-button>
        </div>

        <!-- 添加评价弹出层 -->
        <van-popup class="comment-box" v-model="commentsShow" round :close-on-click-overlay="false">
            <van-rate size="40" v-model="comDialogRate" />
            <div class="comment-rate-text">轻触星星来评分</div>
            <van-field v-model="message" rows="2" autosize type="textarea" placeholder="请输入留言" />
            <div class="btn-box">
                <van-button @click="commentsShow = false" class="white" round>取消</van-button>
                <van-button @click="onAddComments" round>提交</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "course-details",
    data() {
        return {
            courseID: this.$route.query.ID, // 课程详情ID
            courseDetails: [], // 课程详情数据
            active: 0, // tab标签默认选择
            activeNames: ["0"], // 目录里折叠面板默认展示
            coursewareList: [], // 目录部分
            averageComments: [], // 评分值
            queryComments: [], // 课程评论列表
            commentsShow: false, // 添加评价弹窗状态
            comDialogRate: 1, // 添加评价弹出层评级
            message: "" // 添加评价弹出层评论内容
        };
    },
    created() {
        this.appCourseDetails();
        this.appCoursewareList();
        this.appAverageComments();
        this.appQueryComments();
    },
    computed: {
        // 提取图片及默认背景图
        avatar() {
            return (
                (this.courseDetails &&
                    this.courseDetails[0] &&
                    this.courseDetails[0].FILE[0] &&
                    this.courseDetails[0].FILE[0].FILE_PATH) ||
                "@/assets/default/default-avatar.png"
            );
        },

        // 老师头像
        teacheravatar() {},

        // 评价分值/星星部分
        score() {
            return (
                (this.averageComments &&
                    this.averageComments.AVERAGE &&
                    !isNaN(this.averageComments.AVERAGE) &&
                    Number(this.averageComments.AVERAGE)) ||
                0
            );
        },

        // 评论底部评分/星星
        commentScore() {
            return (
                (this.queryComments &&
                    this.queryComments[0].RATE &&
                    !isNaN(this.queryComments[0].RATE) &&
                    Number(this.queryComments[0].RATE)) ||
                0
            );
        }
    },
    filters: {
        // 过滤详情部分的目标
        formatConditionType(str) {
            let n = str - 0;
            switch (n) {
                case 1:
                    return "学";
                    break;
                case 2:
                    return "考";
                    break;
                case 3:
                    return "评";
                    break;
                default:
                    return "暂无目标";
            }
        }
    },
    methods: {
        // 获取课程详情数据
        async appCourseDetails() {
            let data = {
                COURSE_ID: this.courseID
            };
            await homeApi.appCourseDetails(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.courseDetails = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取金牌课程详情/目录部分
        async appCoursewareList() {
            let data = {
                COURSE_ID: this.courseID
            };
            await homeApi.appCoursewareList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.coursewareList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 金牌课程详情/评价部分/评分值
        async appAverageComments() {
            let data = {
                COURSE_ID: this.courseID
            };
            await homeApi.appAverageComments(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.averageComments = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 金牌课程详情/课程评论列表
        async appQueryComments() {
            let data = {
                COURSE_ID: this.courseID
            };
            await homeApi.appQueryComments(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.queryComments = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 点赞
        async onAddSupport(comID) {
            let data = {
                COURSE_ID: this.courseID,
                COMMENT_ID: COMID
            };
            await homeApi.appAddSupport(data).then(res => {
                if (res.status === 200) {
                    let data = res.data;
                    let _MSG_ = data && data._MSG_;
                    if (_MSG_.includes("ERROR")) {
                        this.$toast(_MSG_);
                        return;
                    }
                    if (_MSG_.includes("OK")) {
                        // 根据ID查找到点赞的那条数据
                        let curComment = this.queryComments.find(value => {
                            return value.ID === comID;
                        });
                        // 设置那条数据的点赞数据
                        curComment.SUPPORT_CODE = "Y";
                        curComment.SUPPORT_NAME = "当前用户已点赞";
                        curComment.LIKE_COUNT = data.LIKE_COUNT;
                    }
                }
            });
        },

        // 取消点赞
        async onDeleteSupport(comID) {
            let data = {
                COURSE_ID: this.courseID,
                COMMENT_ID: COMID
            };
            await homeApi.appDeleteSupport(data).then(res => {
                if (res.status === 200) {
                    let data = res.data;
                    let _MSG_ = data && data._MSG_;
                    if (_MSG_.includes("ERROR")) {
                        this.$toast(_MSG_);
                        return;
                    }

                    if (_MSG_.includes("OK")) {
                        // 根据ID查找到点赞的那条数据
                        let curComment = this.queryComments.find(value => {
                            return value.ID === comID;
                        });
                        // 设置那条数据的点赞数据
                        curComment.SUPPORT_CODE = "N";
                        curComment.SUPPORT_NAME = "当前用户未点赞";
                        curComment.LIKE_COUNT = data.LIKE_COUNT;
                    }
                }
            });
        },

        // 添加评价
        async onAddComments() {
            let data = {
                COURSE_ID: this.courseID,
                RATE: this.comDialogRate,
                CONTENT: this.message
            };
            await homeApi.appAddComments(data).then(res => {
                let data = res.data;
                let _MSG_ = data && data._MSG_;
                if (_MSG_.includes("ERROR")) {
                    this.$toast(_MSG_);
                    return;
                }
                if (_MSG_.includes("OK")) {
                    this.message = "";
                    this.comDialogRate = 1;
                    this.commentsShow = false; // 关闭弹窗
                    // 重新拉取课程详情数据，1.更新评字颜色状态，2.检查是否需要弹出添加奖励提示窗
                    this.appQueryComments();
                    this.appAverageComments();
                }
            });
        }
    },
    destroyed() {
        // 返回上一页时并传递1过去给van-tabs组件，让他显示下标为1的数据
        this.$EventBus.$emit("tabActive", 2);
    }
};
</script>

<style lang='scss' scoped>
@import "@/styles/home";
</style>