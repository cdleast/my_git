<template>
    <div class="service-acceptstore">
        <div class="container acceptstore">
            <h1>小米售后 县区受理网点查询</h1>
            <div class="box">
                <p class="desp">天津 天津市 附近的受理网点</p>
                <div class="distpicker">
                    <v-distpicker
                        hide-area
                        @province="onChangeProvince"
                        @city="onChangeCity"
                        :placeholders="{ province: '请选择省', city: '请选择市' }"
                    ></v-distpicker>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "service-acceptstore",
    data() {
        return {
            linkage: {
                province: "", // 省的名字
                city: "", // 市的名字
            },
        };
    },
    methods: {
        // 选择省
        onChangeProvince(item) {
            this.linkage.province = item;
        },

        // 选择市
        onChangeCity(item) {
            this.linkage.city = item;
        },
    },
};
</script>

<style lang='scss' scoped>
.acceptstore {
    padding: 38px 0;

    h1 {
        margin: 30px auto 15px;
        font-size: 36px;
        line-height: 40px;
        font-weight: 400;
        text-align: center;
    }

    .box {
        .desp {
            margin: 0 0 35px;
            font-size: 20px;
            text-align: center;
        }

        .distpicker{
            display: flex;
            justify-content: center;
        }
    }
}
</style>