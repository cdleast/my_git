<template>
    <div class="ceshi">
        <!-- 右滑进入 -->
        <van-button @click="isShow" type="info">显示隐藏</van-button>

        <div class="div">
            <van-icon name="setting-o" />
            <div class="div1"></div>
            <transition name="van-slide-right">
                <div class="slide-Right" v-show="visible">Slide Right</div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            visible: false
        };
    },
    methods: {
        isShow() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style lang='scss' scoped>
.div {
    display: flex;
    i{
        position: absolute;
        right: 100px;
    }
    .div1{
        margin-right: 100px;
    }

}
.slide-Right {
    background: green;
    width: 300px;
    height: 100px;
}
</style>