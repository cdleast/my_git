<template>
    <div class="about">
        <common-breadcrumb :bread="bread"></common-breadcrumb>

        <div class="service-content">
            <div class="tabs">
                <ul class="tab-title">
                    <li
                        v-for="(title,index) in tabTitle"
                        @click="onTabTitle(title,index)"
                        :class="{active:cur==index}"
                        :key="index"
                    >{{title}}</li>
                </ul>

                <div class="tab-content">
                    <div v-if="cur==0">公司简介</div>
                    <div v-if="cur==1">管理团队</div>
                    <div v-if="cur==2">小米文化</div>
                    <div v-if="cur==3">发展经历</div>
                    <div v-if="cur==4">小米新闻</div>
                    <div v-if="cur==5">加入小米</div>
                    <div v-if="cur==6">投资者关系</div>
                    <div v-if="cur==7">联系我们</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CommonBreadcrumb from "@/components/CommonBreadcrumb";
export default {
    name: "about",
    components: {
        CommonBreadcrumb,
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
            cur: 0, //默认选中第一个tab
            bread:'公司简介' // 面包屑传入参数
        };
    },
    methods:{
        onTabTitle(title,index){
            this.cur = index;
            this.bread = title
        }
    }
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
}
</style>