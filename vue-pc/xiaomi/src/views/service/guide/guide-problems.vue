<template>
    <div class="guide-problems">
        <el-collapse v-model="activeNames" accordion>
            <el-collapse-item title="在结算页无法使用优惠券？" name="1">
                <div>可能参加活动人数较多，建议刷新网页尝试；有的品类券不支持别的品类商品，所以也不能使用，具体详情可参照优惠券使用详情。</div>
            </el-collapse-item>
            <el-collapse-item title="为什么购物车中显示有货，去结算时无货？" name="2">
                <div>
                    1.可能您未设置查看下单地址中“配送至地区”，如果“结算页面设置的地区”和“购物车中的配送至地区”不同，有些商品在本地区无货，但别的地区还有货，建议去结算前请先核对页面右上角的“配送至地区”，看是否有货；
                    <br />2.当您加入购物车后未及时下单支付，可能被其他排队用户买走，则会出现下单时显示无货、商品失效或无法支付等情况，所以建议您选好商品确认收货信息无误后，尽快下单支付；
                    <br />3.小米商城订单，是否购买成功已订单支付后最终显示结果为准，未购买到的用户，建议您关注官网，参加下次活动。
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: "guide-problems",
    data() {
        return {
            activeNames: [""],
        };
    },
};
</script>

<style lang='scss' scoped>
</style>