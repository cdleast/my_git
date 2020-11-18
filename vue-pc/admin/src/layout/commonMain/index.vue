<template>
    <div class="app-main">
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'common-main',
    data() {
        return {}
    },
    computed: {
        key() {
            return this.$route.path + Math.random()
        }
    }
};
</script>

<style lang='scss' scoped>
.app-main {
    width: 100%;
    position: relative;
    min-height: 100vh;
    padding: 20px;
    overflow: hidden;
}
</style>