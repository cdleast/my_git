<template>
    <div class="lecturer-details">
        <header-bar title="讲师详情"></header-bar>

        <div class="lecturer-data-header">
            <van-image
                v-if="teacherDetails.IMAGE_FILE"
                round
                width="62"
                height="62"
                :src="teacherDetails.IMAGE_FILE[0]['FILE_PATH']"
            />
            <div class="user-name">{{ teacherDetails.SHOW_NAME }}</div>
            <div class="user-duty">{{ teacherDetails.SHOW_DEPT }}</div>
            <div class="lecturer-data-category">
                <div class="category-item">
                    <div class="number">{{ teacherDetails.STUDENT_NUM }}</div>
                    <div class="text">学员</div>
                </div>
                <div class="category-item">
                    <div class="number">{{ teacherDetails.GXZ }}</div>
                    <div class="text">贡献值</div>
                </div>
                <div class="category-item">
                    <div class="number">{{ teacherDetails.COURSE_NUM }}</div>
                    <div class="text">授课</div>
                </div>
            </div>
        </div>

        <van-tabs v-model="active">
            <van-tab title="讲师介绍">
                <div class="lecutrer-intr">
                    <div class="course-type">授课类别</div>
                    <div class="course-type-item">
                        <span
                            class="course-type-text"
                            v-for="(tag, index) in (teacherDetails.COURSE_ID__NAME || '').split(',')"
                            :key="index"
                        >{{ tag }}</span>
                    </div>
                </div>
            </van-tab>
            <van-tab title="授课记录">
                <div class="lecturer-grade">
                    讲师综合评
                    <span class="nubmer-text">{{ teachereCords.GRADE }}</span>分
                </div>
                <div class="course-number">
                    <span>在线课程{{ teachereCords._OKCOUNT_ }}</span>
                </div>
                <div v-if="teachereCords._OKCOUNT_>0">
                    <course-item-list :datas="teachereCordsCourse"></course-item-list>
                </div>
                <van-empty v-else description="暂无数据" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import courseItemList from "@/components/home/course/course-item-list";
export default {
    name: "lecturer-details",
    components: {
        courseItemList
    },
    data() {
        return {
            teacherDetails: [], // 讲师档案
            teachereCords: [], // 讲师档案下授课记录
            teachereCordsCourse: [], // 讲师档案下授课课程
            active: 1
        };
    },
    created() {
        this.appTeacherDetails();
        this.appTeachereCords();
    },
    methods: {
        // 讲师档案
        async appTeacherDetails() {
            let data = {
                LECTURER_ID: this.$route.query.ID
            };
            await homeApi.appTeacherDetails(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.teacherDetails = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 讲师档案下授课记录
        async appTeachereCords() {
            let data = {
                LECTURER_ID: this.$route.query.ID,
                PAGE: 1,
                NUM: 10
            };
            await homeApi.appTeachereCords(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.teachereCords = res.data;
                    this.teachereCordsCourse = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>