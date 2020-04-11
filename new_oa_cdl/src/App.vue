<template>
    <div id="app">
        <HeaderNav></HeaderNav>

        <div class="layout">
            <BreadCrumb></BreadCrumb>

            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>

        <!-- <FooterNav></FooterNav> -->

        <!-- 回到顶部 -->
        <el-backtop :bottom="80"></el-backtop>
    </div>
</template>

<script>
import HeaderNav from "@/components/global/HeaderNav"; // 头部导航
import FooterNav from "@/components/global/FooterNav"; // 底部导航
import BreadCrumb from "@/components/global/BreadCrumb"; // 栏目导航

export default {
    name: "app",
    components: {
        HeaderNav,
        FooterNav,
        BreadCrumb
    }
};
</script>

<style lang="scss">
#app {
    width: 100%;
    height: auto;
    overflow-y: scroll;
}
.layout {
    width: 1200px;
    margin: 0 auto;
    padding-top: 60px;
    box-sizing: border-box;
}
.layout > div {
    padding: 20px 0 20px 0;
    height: 100%;
}
</style>
