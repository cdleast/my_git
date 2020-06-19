<template>
    <div class="home">
        <home-header></home-header>

        <div class="contaner">
            <router-view />
        </div>

        <footer-bar></footer-bar>

        <!-- 切换组织 -->
        <van-popup v-model="showPicker" position="bottom" :style="{ height: '50%' }">
            <van-picker
                @confirm="onConfirm"
                @cancel="showPicker = false"
                show-toolbar
                title="请切换组织机构"
                :columns="columns"
            />
        </van-popup>
    </div>
</template>

<script>
import homeHeader from "@/components/home/home-header";
import footerBar from "@/components/global/footerBar";
export default {
    name: "home",
    components: {
        homeHeader,
        footerBar
    },
    data() {
        return {
            showPicker: false, // 切换组织
            columns: [
                {
                    values: ["周一", "周二", "周三", "周四", "周五"],
                    defaultIndex: 2
                },
                {
                    values: ["上午", "下午", "晚上"],
                    defaultIndex: 1
                }
            ],
            value: "" // 切换组织选择的数据
        };
    },
    methods: {
        // 切换底部组织状态
        onSwitchGroup() {
            this.showPicker = true;
        },

        // 切换底部组织确定按钮
        onConfirm(value) {
            this.value = value;
            this.showPicker = false;
            console.log(this.value);
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>