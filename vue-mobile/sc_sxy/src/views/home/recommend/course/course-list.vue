<template>
    <div class="course-list">
        <van-nav-bar :title="title" left-arrow @click-left="$router.go(-1)"></van-nav-bar>

        <van-empty v-if="!coursesList.length>0" description="暂无课程数据" />

        <course-item v-else :datas="coursesList"></course-item>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import courseItem from "@/components/home/course-item";
import bus from "@/utils/eventBus"; // 全局事件总线,用于传递数据
export default {
    name: "course-list",
    components: {
        courseItem
    },
    data() {
        return {
            title: this.$route.query.NAME, // 标题
            // 获取课程分类下课程列表的参数
            datas: {
                TYPE_ID: this.$route.query.ID,
                PAGE: 1,
                NUM: 10,
                NAME: "",
                SORT: 1,
                STATE: 0,
                NOPAGE: true
            },
            coursesList: [] // 课程分类下课程列表
        };
    },
    created() {
        this.appCoursesList();
    },
    methods: {
        async appCoursesList() {
            await homeApi.appCoursesList(this.datas).then(res => {
                let data = res.data;
                let _MSG_ = data && data._MSG_;
                if (res.status === 200) {
                    this.coursesList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    },
    destroyed() {
        // 返回上一页时并传递1过去给van-tabs组件，让他显示下标为1的数据
        bus.$emit("tabActive", 1);
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>