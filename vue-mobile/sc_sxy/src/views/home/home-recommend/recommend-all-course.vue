<template>
    <div class="recommend-all-course">
        <van-nav-bar :title="title" left-arrow @click-left="$router.go(-1)"></van-nav-bar>
        <van-search
            @search="searchCourse"
            left-icon="false"
            shape="round"
            v-model="search"
            placeholder="请输入搜索关键词"
        />
        <van-tabs @click="onClick" v-model="active" class="van-hairline--top" animated>
            <van-tab title="全部课程">
                <div class="screening">
                    <div class="total-count">{{ `共${totalCount}门课程`}}</div>
                    <div class="screening-bar-right" @click="popupShow = true">
                        {{ `排序: ${ sortData }` }}
                        <span class="icon icon-arrow-down"></span>
                    </div>
                </div>
                <course-item :courseAll="courseAll"></course-item>
            </van-tab>
            <van-tab title="课程分类">内容 2</van-tab>
            <van-tab title="我的课程">
                <div class="screening">123</div>
            </van-tab>
        </van-tabs>

        <!-- 底部弹出选择排序分类 -->
        <van-popup v-model="popupShow" round position="bottom">
            <van-picker
                show-toolbar
                :columns="columns"
                @cancel="popupShow = false"
                @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import courseItem from "@/components/home/home-course-item";
export default {
    name: "recommend-all-course",
    components: {
        courseItem
    },
    data() {
        return {
            // 获取全部课程,默认传入的参数
            course: {
                NAME: "",
                PAGE: 1,
                NUM: 10,
                SORT: 1,
                STATE: 0,
                NOPAGE: true
            },
            title: "全部课程", // 头部标题
            search: "", // 搜索关键字
            active: 0, // tab默认选项
            totalCount: 0, // 共多少门课程
            sortData: "最新", // 排序选择默认最新
            columns: ["最新", "热门"], // 排序分类弹出选项数组
            popupShow: false, // 弹出层状态
            courseAll: [], // 全部课程
            courseCate: [], // 课程分类
            courseMy: [] // 我的课程
        };
    },
    created() {
        this.appCoursesListAll(this.course);
    },
    methods: {
        // 获取全部课程
        async appCoursesListAll(course) {
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true
            });
            await homeApi.appCoursesListAll(course).then(res => {
                let data = res.data;
                let _MSG_ = data && data._MSG_;
                if (res.status === 200) {
                    this.courseAll = res.data._DATA_;
                    this.$toast.clear();
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // tab切换事件，改变头部标题
        onClick(name, title) {
            this.title = title;
        },

        // 切换排序最新/最火数据
        onConfirm(value, defaultIndex) {
            defaultIndex += 1; // defaultIndex是下标，因为是从0开始所有要+1
            this.course.SORT = defaultIndex;
            this.sortData = value;
            this.popupShow = false;
            // 调用获取课程函数并传入选择值得所有来获取最新/最火数据
            this.appCoursesListAll(this.course);
        },

        // 搜索课程
        searchCourse(val) {
            this.course.NAME = val;
            this.appCoursesListAll(this.course);
        }
    }
};
</script>

<style lang='scss' scoped>
@import "@/styles/home";
</style>