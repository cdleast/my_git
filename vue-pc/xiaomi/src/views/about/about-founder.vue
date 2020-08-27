<template>
    <div class="founder">
        <!-- <el-image :src="banner.url" fit="fit"></el-image> -->
        founder
    </div>
</template>

<script>
export default {
    name: "founder",
    data() {
        return {
            banner: [],
            founder: [],
        };
    },
    created() {
        // this.getAboutDataList();
    },
    methods: {
        // 获取数据
        async getAboutDataList() {
            await this.$api.getAboutDataList().then((res) => {
                this.banner = res.data.banner;
                this.founder = res.data.founder;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
</style>