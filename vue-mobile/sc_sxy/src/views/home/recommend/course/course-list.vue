<template>
    <div class="course-list">
        <header-bar :title="title"></header-bar>

        <van-empty v-if="!coursesList.length>0" description="暂无课程数据" />

        <course-item-list v-else :datas="coursesList"></course-item-list>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import courseItemList from "@/components/home/course/course-item-list";
export default {
    name: "course-list",
    components: {
        courseItemList
    },
    data() {
        return {
            title: this.$route.query.NAME, // 标题
            coursesList: [] // 课程分类下课程列表
        };
    },
    created() {
        this.appCoursesList();
    },
    methods: {
        // 获取课程分类下课程列表
        async appCoursesList() {
            let data = {
                TYPE_ID: this.$route.query.ID,
                PAGE: 1,
                NUM: 10,
                NAME: "",
                SORT: 1,
                STATE: 0,
                NOPAGE: true
            };
            await homeApi.appCoursesList(data).then(res => {
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
        this.EventBus.$emit("tabActive", 1);
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>