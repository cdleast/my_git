<template>
    <div class="third-url">
        <header-bar title="首创-商学院"></header-bar>

        <iframe width="100%" height="100%" :src="src"></iframe>
    </div>
</template>

<script>
export default {
    name: "third-url",
    data() {
        return {
            src: this.$route.query.item
        };
    }
};
</script>

<style lang='scss' scoped>
.third-url{
    height: 100%;
}
</style>