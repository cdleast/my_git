<template>
    <section class="main-container">
        <div class="app-main">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </section>
</template>

<script>
export default {
    name: 'common-main',
    data() {
        return {
        }
    },
};
</script>

<style lang='scss' scoped>
.main-container /deep/ {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 210px;
    position: relative;

    .app-main {
        width: 100%;
        position: relative;
        padding-top: 84px;
        min-height: calc(100vh - 84px);
        overflow: hidden;
    }
}
</style>