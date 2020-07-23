<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover" style="height: 290px">
                <div class="user">
                    <img :src="userImg" />
                    <div class="userinfo">
                        <p class="name">Nick</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>
                        上次登录时间：
                        <span>2019-10-20</span>
                    </p>
                    <p>
                        上次登录地点：
                        <span>北京</span>
                    </p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height: 590px;margin-top: 20px">2</el-card>
        </el-col>

        <el-col :span="16">
            <div class="num">
                <el-card
                    shadow="hover"
                    v-for="(item,index) in countData"
                    :key="index"
                    :body-style="{ display: 'flex', padding: 0 }"
                >
                    <i
                        class="icon"
                        :class="`el-icon-${item.icon}`"
                        :style="{ background: item.color }"
                    ></i>
                    <div class="detail">
                        <p class="num">￥ {{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>

            <el-card shadow="hover">
                <div style="height: 280px"></div>
            </el-card>

            <div class="graph">
                <el-card shadow="hover">
                    <div style="height: 260px"></div>
                </el-card>
                <el-card shadow="hover">
                    <div style="height: 260px"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            userImg: require("@/assets/images/user.png"),
            // 右侧订单
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef"
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef"
                }
            ]
        };
    }
};
</script>

<style lang='scss' scoped>
.home {
    .user {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ccc;
        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }
        &info {
            .name {
                font-size: 32px;
                margin-bottom: 10px;
            }
            .access {
                color: #999999;
            }
        }
    }
    .login-info {
        p {
            line-height: 28px;
            font-size: 14px;
            color: #999999;
            span {
                color: #666666;
                margin-left: 60px;
            }
        }
    }
    .num {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card {
            width: 32%;
            margin-bottom: 20px;
        }
        .icon {
            font-size: 30px;
            width: 80px;
            height: 80px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detail {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num {
                font-size: 30px;
                margin-bottom: 10px;
            }
            .txt {
                font-size: 14px;
                text-align: center;
                color: #999999;
            }
        }
    }
    .graph {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .el-card {
            width: 48%;
        }
    }
}
</style>