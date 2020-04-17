<template>
    <div id="app">
        <div class="layout">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="scss">
#app,
.layout{
    width: 100%;
    height: 100%;
}
</style>
