<template>
    <div class="exam-task">
        <header-bar title="考试任务"></header-bar>

        <van-tabs v-model="active" @click="onClick">
            <van-tab title="待通过">
                <exam-task-list v-if="examList.length" :datas="examList"></exam-task-list>
                <van-empty v-else description="暂无数据" />
            </van-tab>
            <van-tab title="已通过">
                <exam-task-list v-if="examList.length" :datas="examList"></exam-task-list>
                <van-empty v-else description="暂无数据" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import examTaskList from "@/components/home/exam-task-list";
export default {
    name: "exam-task",
    components: {
        examTaskList
    },
    data() {
        return {
            active: 0, // tab默认数
            examList: []
        };
    },
    created() {
        this.appExamList(1);
    },
    methods: {
        async appExamList(TYPE) {
            let data = {
                NOPAGE: false,
                NUM: 10,
                PAGE: 1,
                TYPE: TYPE
            };
            await homeApi.appExamList(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.examList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },
        // 根据tab栏不同，获取相应的列表数据
        onClick(name) {
            let tabIndex = name + 1;
            this.appExamList(tabIndex);
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>