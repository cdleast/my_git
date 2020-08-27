<template>
    <div class="about-culture">
        <div v-for="(item,index) in culture" :key="index">
            <el-image :src="item.url" fit="fit" v-if="item.url"></el-image>
            <div class="text" v-if="item.title">
                <h2 >{{ item.title }}</h2>
                <p v-for="(i,index) in item.children" :key="index">{{ i.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about-culture",
    data() {
        return {
            culture: [],
        };
    },
    created() {
        this.getAboutDataList();
    },
    methods: {
        // 获取数据
        async getAboutDataList() {
            await this.$api.getAboutDataList().then((res) => {
                this.culture = res.data.culture;
                console.log(this.culture);
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.about-culture {
    background: #fff;

    .text {
        padding: 80px 0;
        width: 800px;
        margin: 0 auto;

        h2 {
            font-size: 28px;
            color: #333;
            font-weight: 400;
            text-align: center;
            padding: 0 0 20px 0;
        }

        p {
            color: #757575;
            font-size: 14px;
            line-height: 1.71;
            padding-top: 10px;
            text-align: left;
        }
    }
}
</style>