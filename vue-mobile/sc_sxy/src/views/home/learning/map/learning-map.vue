<template>
    <div class="learning-map">
        <header-bar title="学习地图"></header-bar>

        <van-tabs v-model="active">
            <van-tab title="待通过">
                <ramind-item-list v-if="nothrough.length" :datas="nothrough"></ramind-item-list>
                <van-empty v-else description="暂无待通过数据" />
            </van-tab>
            <van-tab title="已通过">
                <ramind-item-list v-if="through.length" :datas="through"></ramind-item-list>
                <van-empty v-else description="暂无通过数据" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import ramindItemList from "@/components/home/plan/ramind-item-list";
export default {
    name: "learning-map",
    components: {
        ramindItemList
    },
    data() {
        return {
            active: 0,
            studyMapList: [], // 学习地图
            through: [], // 已通过
            nothrough: [] // 未通过
        };
    },
    created() {
        this.appStudyMapList();
    },
    methods: {
        // 学习地图
        async appStudyMapList() {
            await homeApi.appStudyMapList().then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.studyMapList = res.data._DATA_;
                    this.through = this.studyMapList.filter(item => {
                        return item.TYPE === "1";
                    });
                    this.nothrough = this.studyMapList.filter(item => {
                        return item.TYPE !== "1";
                    });
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