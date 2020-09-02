<template>
    <div class="guide-sendtime">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="支付超时后能不能再次选择支付？" name="1">
                <div>不好意思，订单支付超时后，系统会自动释放订单库存，建议您下单后直接支付。</div>
            </el-collapse-item>
            <el-collapse-item title="小米商城下单及支付时效是多久？" name="2">
                <div>
                    1.您将商品添加到购物车后即可进行下单购买（若添加购物车后商品缺货，则会下单失败），为了您可购买到心仪的商品，建议您添加购物车后尽快下单；活动期间下单时效以活动细则为准。
                    <br />2.在线支付的订单以订单详情界面支付时间为准，过期后订单将会自动关闭，无法恢复，建议您尽快支付；活动期间下单时效以活动细则为准。
                </div>
            </el-collapse-item>
            <el-collapse-item title="小米商城支持什么方式支付？" name="3">
                <div>
                    小米商城支持小米钱包，支付宝、微信等第三方平台支付，同时支持国内二十多家主流银行机构的储蓄卡、信用卡的网上付款。暂时不支持货到付款的支付方式，您购买的时候一定要注意哦，以免影响您的正常收货。
                    <br />
                    <br />备注：<br>
                    小米商城所支持的银行机构可能会有变动，以实际支付页面的信息为准。
                    <br />小米商城暂时不支持货到付款业务，所以大家买到货到付款的产品有可能是假货，要提高警惕哦。
                </div>
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