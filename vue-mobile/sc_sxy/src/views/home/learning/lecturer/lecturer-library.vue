<template>
    <div class="lecturer-library">
        <header-bar title="讲师库">
            <div slot="right">
                <span @click="$router.push('/home/learning/lecturer-focus')" class="icon icon-xin"></span>
            </div>
        </header-bar>

        <div class="lecturer-library-fixed">
            <!-- 搜索框 -->
            <van-search
                class="van-hairline--bottom"
                @search="onSearch"
                v-model="search"
                shape="round"
                left-icon="false"
                placeholder="请输入搜索关键词"
            />

            <div class="lecturer-ranking">
                <div class="lecturer-ranking-title">内部讲师总榜</div>
                <div
                    class="lecturer-ranking-item"
                    @click="$router.push('/home/learning/lecturer-ranking')"
                >
                    <van-image
                        round
                        width="40"
                        height="40"
                        v-for="item of rankingListPhoto"
                        :key="item.ID"
                        :src="item[0].FILE_PATH"
                    />
                    <span class="icon icon-arrow-right"></span>
                </div>
            </div>

            <div class="lecturer-total">
                <div class="total-text">共有{{ lecturerTotal }}名讲师</div>
                <div class="sort" @click="show = true">
                    <span class="screen-item">筛选</span>
                    <span class="icon icon-arrow-down"></span>
                </div>
            </div>
        </div>

        <!-- 讲师列表 -->
        <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
            <van-list
                v-model="isLoading"
                :finished="isFinished"
                finished-text="没有更多了"
                @load="onLoad"
            >
                <lecturer-item-list v-if="teacherList.length>0" :datas="teacherList"></lecturer-item-list>
                <van-empty v-else description="暂无数据" />
            </van-list>
        </van-pull-refresh>

        <van-popup
            class="drawer-mask"
            v-model="show"
            position="right"
            :style="{ width: '318px', height: '100%' }"
        >
            <div class="bottom-btn">
                <van-button plain>清空筛选</van-button>
                <van-button type="info">确定</van-button>
            </div>
        </van-popup>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import lecturerItemList from "@/components/home/lecturer/lecturer-item-list";
export default {
    name: "lecturer-library",
    components: {
        lecturerItemList
    },
    data() {
        return {
            data: {
                PAGE: 1,
                NUM: 5
            },
            isRefresh: false, // 是否处于加载中状态
            isLoading: false, // 是否处于加载状态
            isFinished: false, // 数据是否加载完
            search: "", // 搜索内容
            show: false, // 右侧弹出层状态
            rankingListPhoto: [], // 排行榜前3名
            lecturerTotal: 0, //讲师个数
            teacherList: [] // 讲师列表
        };
    },
    created() {
        this.appTeacherList();
    },
    methods: {
        // 讲师列表/点击筛选
        async appTeacherList() {
            await homeApi.appTeacherList(this.data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.teacherList = res.data._DATA_;
                    this.rankingListPhoto = res.data.THREE_PHOTO;
                    this.lecturerTotal = res.data._OKCOUNT_;
                    this.isRefresh = false; // 数据查询成功取消加载中状态
                    this.isLoading = false; //不处于加载状态
                    // 判断不做重复渲染
                    if (this.teacherList.length >= res.data._OKCOUNT_) {
                        this.isFinished = true; //数据加载完
                    }
                } else {
                    this.$toast(_MSG_);
                    this.isRefresh = false; // 数据查询失败取消加载中状态
                    this.isLoading = false; // 不处于加载状态
                    this.isFinished = true; // 数据加载完，不会再处于加载状态
                }
            });
        },

        onSearch() {},
        //上拉加载数据
        onLoad() {
            this.data.NUM += 5; // 每次加载五条数据
            this.isRefresh = false;
            this.appTeacherList();
        },

        // 下拉刷新时触发
        onRefresh() {
            this.teacherList = [];
            this.isFinished = false;
            this.isLoading = true; // 表示处于加载状态
            this.isRefresh = true;
            this.data.NUM = 5; // 每次加载获取几条数据
            this.appTeacherList();
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>