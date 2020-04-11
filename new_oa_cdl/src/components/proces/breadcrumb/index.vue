<template>
    <div class="banner">
        <span class="banner_img"></span>

        <div class="banner_div">
            <h3>流程中心</h3>
            <p>
                <span @click="$router.push('/proces')" class="home">首页</span>
                <span class="desp">{{$route.meta.title}}</span>
            </p>
        </div>

        <div class="banner_btn">
            <el-button size="mini">导出</el-button>
            <el-button size="mini">刷新</el-button>
            <el-button size="mini">返回</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "banner",
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
.banner {
    height: 80px;
    background: #ffffff;
    border: 1px solid #ededed;
    border-radius: 6px;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

// logo
.banner_img {
    float: left;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    background: url("../../../assets/proces/liuchnegxiangguan_0.png") no-repeat;
}

// 标题组
.banner_div {
    float: left;
}
.banner_div h3 {
    font-size: 18px;
    color: #191c3d;
    margin-bottom: 5px;
    margin-top: 3px;
}
.banner_div span {
    font-size: 12px;
    color: #8c8d9e;
    margin-right: 10px;
    cursor: pointer;
}
.banner_div span.home {
    color: #409eff;
}

// 按钮组
.banner_btn {
    float: right;
}
</style>