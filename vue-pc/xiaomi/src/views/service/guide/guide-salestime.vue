<template>
    <div class="guide-activity">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="缺货的产品什么时间能下单购买？" name="1">
                <div>小米商城的部分商品，当您选择的收货区域无货时，可以点选到货通知。开启到货通知功能后，产品开售前，小米商城APP会分批以PUSH的形式通知您。设置成功后支持取消。 注：快递配送可能会因为交通、天气等原因有所延误，建议您登陆小米官网/小米商城APP，到订单详情或者快递公司官网关注配送进度。众筹或其他活动页面另有规定的，以另行规定为准。第三方商家商品由第三方商家负责发货，如第三方商家不能按时发货，请您及时联系第三方商家进行处理。</div>
            </el-collapse-item>
            <el-collapse-item title="什么时候能购买小米商城活动的产品？" name="2">
                <div>登陆小米商城，选择您所喜爱的产品，点击“立即购买”之后，在商品详情页会有本产品的销售时间提示哦，预祝您买到自己心仪的产品。</div>
            </el-collapse-item>
            <el-collapse-item title="新品没买到下次什么时间可以购买？" name="3">
                <div>本次活动结束后，官网稍后会在产品界面显示下次购买时间，敬请关注。</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: "guide-activity",
    data() {
        return { 
            activeNames: [""] 
        };
    },
};
</script>

<style lang='scss' scoped>
</style>