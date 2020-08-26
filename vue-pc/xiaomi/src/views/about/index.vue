<template>
    <div class="about">
        <common-breadcrumb :bread="bread"></common-breadcrumb>

        <div class="service-content">
            <div class="tabs">
                <ul class="tab-title">
                    <li
                        v-for="(title,index) in tabTitle"
                        @click="onTabTitle(title,index)"
                        :class="{active:titleCur==index}"
                        :key="index"
                    >{{title}}</li>
                </ul>

                <div class="tab-content">
                    <!-- 公司简介 -->
                    <company-profile v-if="titleCur == 0"></company-profile>
                    <!-- 管理团队 -->
                    <management-team v-if="titleCur == 1"></management-team>

                    <div v-if="titleCur == 2">小米文化</div>
                    <div v-if="titleCur == 3">发展经历</div>
                    <div v-if="titleCur == 4">小米新闻</div>
                    <div v-if="titleCur == 5">加入小米</div>
                    <div v-if="titleCur == 6">投资者关系</div>
                    <div v-if="titleCur == 7">联系我们</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonBreadcrumb from "@/components/CommonBreadcrumb";
import companyProfile from "@/views/about/company-profile";
import managementTeam from "@/views/about/management-team";
export default {
    name: "about",
    components: {
        CommonBreadcrumb,
        companyProfile,
        managementTeam
    },
    data() {
        return {
            tabTitle: [
                "公司简介",
                "管理团队",
                "小米文化",
                "发展经历",
                "小米新闻",
                "加入小米",
                "投资者关系",
                "联系我们",
            ],
            titleCur: 0, // 默认选中第一个tab
            bread: "公司简介", // 面包屑传入参数
        };
    },
    watch: {
        $route() {
            this.titleCur = 0;
        },
    },
    methods: {
        onTabTitle(title, index) {
            this.titleCur = index;
            this.bread = title;
        },
    },
};
</script>

<style lang='scss' scoped>
.service-content {
    .tab-title {
        background: #fff;

        li {
            font-size: 16px;
        }
    }
    .tab-content {
        padding: 0;
    }
}
</style>