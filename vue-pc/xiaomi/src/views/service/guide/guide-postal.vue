<template>
    <div class="guide-sendtime">
        <el-collapse v-model="activeNames">
            <el-collapse-item title="小米商城自营商品邮费一览表" name="1">
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    :span-method="arraySpanMethod"
                >
                    <el-table-column prop="category" label="商品类别"></el-table-column>
                    <el-table-column prop="under" label="99元以下／单"></el-table-column>
                    <el-table-column prop="on" label="99元以上／单"></el-table-column>
                    <el-table-column prop="way" label="配送方式"></el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="为什么自营商品订单满99元还要支付快递费用？" name="2">
                <div>
                    1.“满99元免邮费”是指实际支付金额超过99元。
                    <br />2. 订单中是否有特殊商品需要单独支付邮费。
                    <br />3. 虚拟商品（如安装服务）单独购买不承担运费；虚拟商品和其他商品一起购买时，不参与满99元即免邮的活动。
                </div>
            </el-collapse-item>
            <el-collapse-item title="小米商城自营商品满多少元包邮？" name="3">
                <div>以您实际支付99元为基准包邮，活动期间除外，免邮价格随活动策略制定。特殊商品如体重秤、大家电等单独收取快递费用。</div>
            </el-collapse-item>
            <el-collapse-item title="第三方商家商品包邮政策" name="4">
                <div>
                    1、第三方商家商品由第三方商家负责发货并自行提供配送服务。
                    <br />2、小米自营商品包邮政策不适用于第三方商家商品，第三方卖家商品请您直接联系商家详询配送方式及运费标准。
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
            tableData: [
                {
                    category: "手机、智能、配件等商品",
                    under: "10元／单",
                    on: "免费送货",
                    way: "快递送货上门",
                },
                {
                    category: "小米电视",
                    under: "免费送货",
                    on: "免费送货",
                    way: "快递送货上门",
                },
                {
                    category: "小米电视主机",
                    under: "免费送货",
                    on: "免费送货",
                    way: "快递送货上门",
                },
                {
                    category: "小米低音炮",
                    under: "每件配送费50元",
                    on: "每件配送费50元",
                    way: "快递送货上门",
                },
            ],
        };
    },
    methods: {
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            // if (rowIndex === 1 || rowIndex === 2) {
            //     if (
            //         columnIndex === 1 ||
            //         columnIndex === 2 ||
            //         columnIndex === 3
            //     ) {
            //         return [2, 2];
            //     } else {
            //         return [0, 0];
            //     }
            // }
        },
    },
};
</script>

<style lang='scss' scoped>
.guide-sendtime /deep/ {
    .has-gutter {
        th {
            background: #eee;
            border-color: #e0e0e0;
            text-align: center;
        }
    }

    .el-table__row {
        .cell {
            text-align: center;
        }
    }

    .el-table__row td:first-child {
        .cell {
            font-weight: 700;
        }
    }
}
</style>