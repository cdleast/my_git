<template>
    <div class="guide-sendtime">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="下单后多长时间发货？" name="1">
                <div>亲爱的米粉，通常情况下订单将参照支付顺序在7天内发出，F码购买的商品，无法保证均可在7天内发出（活动期间以活动公告为准），最快情况下我们的商品会在24小时内出库的，受客观因素影响，可能会有部分延迟，请您耐心等待。 注：快递配送可能会因为交通、天气等原因有所延误，建议您登陆小米官网/小米商城APP，到订单详情或者快递公司官网关注配送进度。众筹或其他活动页面另有规定的，以另行规定为准。第三方商家商品由第三方商家负责发货，如第三方商家不能按时发货，请您及时联系第三方商家进行处理。</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: "guide-sendtime",
    data() {
        return {
            activeNames: ["1"],
        };
    },
};
</script>

<style lang='scss' scoped>
.guide-sendtime /deep/ {
    background: #fff;
}
</style>