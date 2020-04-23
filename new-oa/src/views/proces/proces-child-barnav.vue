<template>
    <div class="proces-child-barnav">
        <div class="leftImg"></div>
        <h3>{{childText.meta.title}}</h3>
        <ul>
            <li>首页</li>
            <li>{{childText.meta.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "proces-child-barnav",
    props: {
        childText: {
            type: Object
        }
    }
};
</script>

<style lang='scss' scoped>
.proces-child-barnav {
    height: 80px;
    background: #fff;
    position: relative;
}
.leftImg {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 50px;
    height: 50px;
    background: url("../../assets/proces/liuchnegxiangguan_0.png") no-repeat;
}
h3 {
    position: absolute;
    left: 80px;
    top: 18px;
    font-size: 18px;
    color: #191c3d;
    font-weight: 700;
}
ul {
    position: absolute;
    left: 80px;
    bottom: 15px;
}
ul > li {
    font-size: 12px;
    color: #8c8d9e;
    line-height: 17px;
    float: left;
    margin-right: 5px;
    cursor: pointer;
}
ul > li:first-child {
    color: #409eff;
}
</style>