<template>
    <div class="service-sitelist">
        <div class="sitelist-header">
            <el-image src="http://i1.mifile.cn/f/i/cc9mt/maintain.jpg" fit="fit"></el-image>
            <div class="link">
                <el-link :underline="false" target="_blank">预约维修服务 ></el-link>
                <el-link :underline="false" target="_blank">服务商招商 ></el-link>
            </div>
        </div>

        <div class="location-top clearfix">
            <div class="location-cur-pos">
                <span class="location-col-red">北京,北京市</span> 附近共有
                <span class="location-col-red">9</span>个 服务网点
            </div>

            <div class="location-section">
                <el-select v-model="select.value1" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-select v-model="select.value2" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-select v-model="select.value3" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
            </div>
        </div>

        <div class="location-main"></div>

        <div class="location-bot">
            <p>没有找到附近的服务网点？了解 <el-link :underline="false">县区受理网点></el-link> </p>
        </div>

        <!-- <baidu-map class="map" @ready="mapReady" :scroll-wheel-zoom="true" :mapStyle="mapStyle">
            <bm-marker :position="point" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        </baidu-map> -->
    </div>
</template>

<script>
export default {
    name: "service-sitelist",
    data() {
        return {
            point: "",
            // 自定义样式
            mapStyle: {
                styleJson: [
                    {
                        featureType: "water",
                        elementType: "geometry",
                        // stylers: {
                        //     color: "#20ab6a",
                        // },
                    },
                ],
            },
            select: {
                value1: "",
                value2: "",
                value3: "",
            },
        };
    },
    methods: {
        mapReady({ BMap, map }) {
            // 选择一个经纬度作为中心点
            this.point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(this.point, 12);
        },
    },
};
</script>

<style lang='scss' scoped>
.service-sitelist /deep/ {
    .sitelist-header {
        width: 100%;
        height: 250px;
        position: relative;

        .link {
            position: absolute;
            left: 50%;
            bottom: 50px;
            transform: translateX(-50%);

            .el-link {
                color: #ff6709;
                margin: 0 5px;
            }
        }
    }

    .location-top {
        padding: 10px 35px 10px 45px;
        margin-top: 20px;
        background: #fff;

        .location-cur-pos {
            position: relative;
            float: left;
            line-height: 50px;
            padding-left: 40px;
            font-size: 16px;
            color: #212121;
            letter-spacing: 1px;
            background: url("https://c1.mifile.cn/f/i/16/service/familyLocation/pos.png")
                left 8px no-repeat;

            .location-col-red {
                color: #ff6709;
            }
        }

        .location-section {
            float: right;

            .el-select {
                margin-left: 15px;
                .el-input__inner {
                    height: 50px;
                    line-height: 50px;
                }
            }
        }
    }

    .location-main{
        
    }

    .location-bot {
        margin-top: 20px;
        padding: 20px;
        color: #999;
        background: #fff;

        .el-link{
            color: #ff6600;
        }
    }

    .map {
        width: 400px;
        height: 300px;
    }
}
</style>