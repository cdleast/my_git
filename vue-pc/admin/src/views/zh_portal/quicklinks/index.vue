<template>
    <div class="quicklinks">
        <el-carousel trigger="click" height="500px" :autoplay="false">
            <el-carousel-item v-for="item in 4" :key="item">
                <el-row :gutter="20">
                    <el-col :span="3" v-for="i in 24" :key="i">
                        <el-image :src="url"></el-image>
                        <p class="title">个人设置</p>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'quick-links',
    data() {
        return {
            url: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
        }
    },
};
</script>

<style lang='scss' scoped>
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.el-carousel__item {
    padding: 20px 0;
}

.el-col {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
}

.title {
    margin: 5px 0;
}
</style>