<template>
    <div class="guide-sendtime">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="小米商城显示预售活动是指什么？" name="1">
                <div>预售表示库存暂时无货，但厂商会尽快生产和供应，客户可以预订，一旦有货就会马上发货；预售商品的到货时间请以页面显示为准哦！</div>
            </el-collapse-item>
            <el-collapse-item title="活动赠送的产品可选吗？" name="2">
                <div>活动赠送的产品目前不支持用户自行选择，也不支持更换赠品哦，感谢您的理解。</div>
            </el-collapse-item>
            <el-collapse-item title="购买时的赠品退货时需要退回吗？" name="3">
                <div>若您购买的产品有赠品，退货时赠品需要一同退回哦。</div>
            </el-collapse-item>
            <el-collapse-item title="活动期间购买提示排队？" name="4">
                <div>若您在活动期间进行购买遇到排队的情况，可能是商城较为热门，购买用户较多，建议您耐心等待，或更换网络环境后尝试。</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: "guide-sendtime",
    data() {
        return {
            activeNames: [""],
        };
    },
};
</script>

<style lang='scss' scoped>
</style>