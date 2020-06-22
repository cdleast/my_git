<template>
    <div class="course-all">
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
                    <div class="total-count">{{ `共${courseAll.length}门课程`}}</div>
                    <div class="screening-bar-right" @click="popupShow = true">
                        {{ `排序: ${ sortData }` }}
                        <span class="icon icon-arrow-down"></span>
                    </div>
                </div>
                <course-item :datas="courseAll"></course-item>
            </van-tab>
            <van-tab title="课程分类">
                <div class="course-category" v-for="items in courseCate" :key="items.ID">
                    <div class="course-category-head" @click="onCoursesList(items.ID)">
                        <span class="name">{{ items.NAME }}</span>
                        <span class="icon icon-arrow-right"></span>
                    </div>
                    <div class="child-cate-box">
                        <span
                            class="child-cate-item"
                            v-for="item in items.CHILD"
                            :key="item.ID"
                            @click="onCoursesList(item)"
                        >{{ item.NAME }}</span>
                    </div>
                </div>
            </van-tab>
            <van-tab title="我的课程">
                <div class="screening">
                    <div class="total-count">{{ `共${courseMy.length}门课程`}}</div>
                    <div class="screening-bar-right" @click="popupShow = true">
                        {{ `排序: ${ sortData }` }}
                        <span class="icon icon-arrow-down"></span>
                    </div>
                </div>
                <course-item :datas="courseMy"></course-item>
            </van-tab>
        </van-tabs>

        <!-- 底部弹出选择排序分类 -->
        <van-popup v-model="popupShow" position="bottom">
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
import courseItem from "@/components/home/course-item";
import bus from "@/utils/eventBus"; // 全局事件总线,用于传递数据
export default {
    name: "course-all",
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
        this.appCoursesCategory();
        this.appCoursesListMy(this.course);
        bus.$on("tabActive", num => {
            this.active = num;
        });
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
                    this.$toast.clear(); // 获取数据成功关闭加载中
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取课程分类
        async appCoursesCategory(NAME) {
            let data = {
                NAME: NAME
            };
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true
            });
            await homeApi.appCoursesCategory(data).then(res => {
                let data = res.data;
                let _MSG_ = data && data._MSG_;
                if (res.status === 200) {
                    this.courseCate = res.data._DATA_.CHILD;
                    this.$toast.clear(); // 获取数据成功关闭加载中
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 获取我的课程
        async appCoursesListMy(course) {
            this.$toast.loading({
                message: "加载中...",
                forbidClick: true
            });
            await homeApi.appCoursesListMy(course).then(res => {
                let data = res.data;
                let _MSG_ = data && data._MSG_;
                if (res.status === 200) {
                    this.courseMy = res.data._DATA_;
                    this.$toast.clear(); // 获取数据成功关闭加载中
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // tab切换事件，改变头部标题
        onClick(name, title) {
            this.title = title;
            this.active = name;
        },

        // 切换排序最新/最火数据
        onConfirm(value, defaultIndex) {
            defaultIndex += 1; // defaultIndex是下标，因为是从0开始所有要+1
            this.course.SORT = defaultIndex;
            this.sortData = value;
            this.popupShow = false;
            // 调用获取课程函数并传入选择值得所有来获取最新/最火数据
            switch (this.active) {
                case 0:
                    this.appCoursesListAll(this.course);
                    break;
                case 2:
                    this.appCoursesListMy(this.course);
                    break;
            }
        },

        // 搜索框搜索课程
        searchCourse(val) {
            this.course.NAME = val.trim();
            switch (this.active) {
                case 0:
                    this.appCoursesListAll(this.course);
                    break;
                case 1:
                    this.appCoursesCategory(val);
                    break;
                case 2:
                    this.appCoursesListMy(this.course);
                    break;
            }
        },

        // 跳转到课程分类下课程列表
        onCoursesList(item) {
            this.$router.push({
                path: "/home/recommend/course-list",
                query: {
                    ID: item.ID,
                    NAME: item.NAME
                }
            });
        }
    },
    // 组件销毁时解除事件总线绑定的事件
    destroyed() {
        bus.$off("tabActive");
    }
};
</script>

<style lang='scss' scoped>
@import "@/styles/home";
</style>