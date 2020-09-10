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
                <v-distpicker
                    :province="linkage.province"
                    :city="linkage.city"
                    :area="linkage.area"
                    @selected="onSelected"
                    :placeholders="{ province: '省', city: '', area: '全部区域' }"
                ></v-distpicker>
            </div>
        </div>

        <div class="location-main">
            <div class="location-shop-con">
                <div class="location-shop-select">
                    <span class="location-shop-tit">支持产品</span>
                    <el-select
                        v-model="select.value4"
                        size="small"
                        slot="prepend"
                        placeholder="请选择"
                    >
                        <el-option label="全部类型" value="1"></el-option>
                        <el-option label="手机" value="2"></el-option>
                        <el-option label="平板" value="3"></el-option>
                        <el-option label="耳机" value="4"></el-option>
                        <el-option label="音箱" value="5"></el-option>
                    </el-select>
                </div>
                <div class="location-shop-detail">
                    <ul class="location-list">
                        <li
                            v-for="(i,index) in 20"
                            :key="i"
                            @click="onActive(index)"
                            :class="active==index?'active':''"
                        >
                            <span class="location-num">{{ index+1 }}</span>
                            <div class="location-addr">
                                <h3>小米授权服务中心清河店（支持手机同城免费邮寄）</h3>
                                <p>北京海淀区清河嘉园东区1号楼2层108</p>
                                <div class="maintain-praise">
                                    <el-rate
                                        v-model="select.value5"
                                        disabled
                                        show-score
                                        text-color="#999"
                                        score-template="{value}"
                                        :colors="['#f56e0c', '#f56e0c', '#f56e0c']"
                                    ></el-rate>
                                    <span class="user-nums">0.134万 用户打分</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="location-map">
                <baidu-map
                    class="map"
                    @ready="mapReady"
                    :scroll-wheel-zoom="true"
                    :mapStyle="mapStyle"
                >
                    <bm-marker :position="point" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
                </baidu-map>
            </div>
        </div>

        <div class="location-bot">
            <p>
                没有找到附近的服务网点？了解
                <el-link :underline="false" target="_blank" href="/service/acceptstore">县区受理网点></el-link>
            </p>
        </div>
    </div>
</template>

<script>
import VDistpicker from "v-distpicker"; // 三级联动
export default {
    name: "service-sitelist",
    components: { VDistpicker },
    data() {
        return {
            point: "", // 百度地图默认地址IP
            // 地图自定义样式
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
            linkage: {
                province: "", // 省的名字
                city: "", // 市的名字
                area: "", // 区的名字
            },
            select: {
                value4: "", // 支持产品
                value5: 3.7, // 评分
            },
            active: -1, // 地图左侧导航选中
        };
    },
    methods: {
        // 创建地图实例
        mapReady({ BMap, map }) {
            // 选择一个经纬度作为中心点
            this.point = new BMap.Point(116.404, 39.915); // 创建点坐标
            map.centerAndZoom(this.point, 12); // 初始化地图，设置中心点坐标和地图级别
        },

        // 选择最后一项时候出发
        onSelected(data) {
            this.linkage.province = data.province.value;
            this.linkage.city = data.city.value;
            this.linkage.area = data.area.value;
        },

        // 地图左侧点击选择地址
        onActive(index) {
            this.active = index;
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

            select {
                width: 150px;
                margin-left: 7px;
            }
        }
    }

    .location-main {
        padding: 20px 35px 15px 45px;
        margin-top: 10px;
        background: #fff;
        display: flex;

        .location-shop-con {
            width: 325px;

            .location-shop-select {
                display: flex;
                justify-content: space-between;

                .location-shop-tit {
                    line-height: 32px;
                    float: left;
                }

                .el-select {
                    width: 148px;
                }
            }

            .location-shop-detail {
                margin-top: 18px;

                .location-list {
                    overflow-y: scroll;
                    overflow-x: hidden;
                    height: 470px;
                    border-top: 1px solid #e1e1e1;

                    li {
                        padding-top: 8px;
                        padding-bottom: 8px;
                        padding-right: 15px;
                        transition: all 0.3s;
                        font-size: 12px;
                        cursor: pointer;
                        border-bottom: 1px solid #f5f5f5;
                        position: relative;

                        .location-num {
                            position: absolute;
                            left: 5px;
                            top: 27px;
                            width: 20px;
                            height: 20px;
                            line-height: 18px;
                            color: #f56700;
                            border: 1px solid #f56e0c;
                            border-radius: 50%;
                            text-align: center;
                        }

                        .location-addr {
                            padding-left: 40px;
                            font-size: 12px;
                            color: #999;

                            h3,
                            p {
                                height: 20px;
                                line-height: 20px;
                                overflow: hidden;
                            }

                            h3 {
                                font-weight: normal;
                                margin-bottom: 2px;
                                color: #212121;
                                font-size: 14px;
                            }

                            p {
                                font-size: 12px;
                            }

                            .maintain-praise {
                                margin-top: 5px;

                                .el-rate {
                                    float: left;

                                    .el-rate__icon {
                                        margin-right: 0;
                                        font-size: 20px;
                                    }

                                    .el-rate__text {
                                        font-size: 12px;
                                        line-height: 20px;
                                    }
                                }

                                .user-nums {
                                    margin-left: 20px;
                                    line-height: 20px;
                                }
                            }
                        }
                    }

                    li.active {
                        .location-addr h3,
                        .location-addr p {
                            color: #f56e0c;
                        }

                        .location-num {
                            color: #fff;
                            background: #f56e0c;
                        }
                    }
                }
            }
        }

        .location-map {
            flex: 1;
            margin-left: 30px;
            border: 1px solid #f56700;

            .map {
                width: 100%;
                height: 100%;
            }
        }
    }

    .location-bot {
        margin-top: 20px;
        padding: 20px;
        color: #999;
        background: #fff;

        p {
            display: flex;
            align-items: center;
        }

        .el-link {
            color: #ff6600;
            font-size: 16px;
        }
    }
}
</style>