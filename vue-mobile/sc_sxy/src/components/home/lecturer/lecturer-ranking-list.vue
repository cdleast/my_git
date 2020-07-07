<template>
    <div class="lecturer-ranking-list">
        <div class="user-header" v-for="item in datas.slice(0,1)" :key="item.ID">
            <div class="user-avatar-box">
                <van-image
                    v-if="item.IMAGE_FILE[0]"
                    round
                    width="62"
                    height="62"
                    :src="item.IMAGE_FILE[0].FILE_PATH"
                />
                <van-image
                    class="LV-grade-bg"
                    width="62"
                    height="22"
                    :src="require('@/assets/images/lectrer-ranking/ranking-icon.png')"
                />
                <span class="lv">LV.1</span>
            </div>
            <div class="user-name">{{ item.SHOW_NAME }}</div>
            <div class="user-duty">{{ item.SHOW_DEPT }}</div>
            <div class="user-contribute">
                <span class="number">{{ item.SORT }}</span>
                <span class="contribute-text">贡献值</span>
            </div>
        </div>
        <div class="inside-ranking-list" v-for="(item,index) in datas.slice(1)" :key="index">
            <div class="inside-ranking-num-box">
                <van-image
                    v-show="index==0"
                    width="27"
                    height="35"
                    :src="require('@/assets/images/lectrer-ranking/jshph2.png')"
                />
                <van-image
                    v-show="index==1"
                    width="27"
                    height="35"
                    :src="require('@/assets/images/lectrer-ranking/jshph3.png')"
                />
                <span class="numIndex" v-if="index >= 2">{{ index+2 }}</span>
            </div>
            <div class="inside-ranking-info van-hairline--bottom">
                <div class="inside-ranking-list-sort">
                    <van-image
                        v-if="item.IMAGE_FILE[0]"
                        round
                        width="62"
                        height="62"
                        :src="item.IMAGE_FILE[0].FILE_PATH"
                    />
                    <div class="lecturer-msg">
                        <div class="lecturer-name">{{ item.SHOW_NAME }}</div>
                        <div class="lecturer-company">{{ item.SHOW_DEPT }}</div>
                    </div>
                </div>
                <div class="lecturer-info">
                    <span class="lecturer-info-num">{{ item.SORT }}</span>
                    <span class="lecturer-info-text">贡献值</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "lecturer-ranking-list",
    props: {
        datas: {
            type: Array
        }
    },
    computed: {}
};
</script>

<style lang='scss' scoped>
.lecturer-ranking-list {
    line-height: 1.8;
    .user-header {
        width: 100%;
        background: -webkit-linear-gradient(45deg, #5b85f0 0%, #9277eb 100%);
        background: linear-gradient(45deg, #5b85f0 0%, #9277eb 100%);
        padding-top: 40px;
        text-align: center;
        margin-top: 4px;
        .user-avatar-box {
            position: relative;
            .LV-grade-bg {
                position: absolute;
                left: 50%;
                bottom: 20px;
                transform: translateX(-50%);
            }
            .lv {
                width: 124px;
                font-size: 26px;
                font-weight: 500;
                text-align: center;
                color: #fff;
                position: absolute;
                left: 50%;
                bottom: 30px;
                transform: translateX(-50%);
            }
        }
        .user-name {
            font-size: 32px;
            line-height: 32px;
            font-weight: 500;
            color: #fff;
            margin-bottom: 30px;
        }
        .user-duty {
            font-size: 26px;
            line-height: 26px;
            font-weight: 500;
            color: #fff;
            opacity: 0.7;
            margin-bottom: 20px;
        }
        .user-contribute {
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            .number {
                font-size: 40px;
                margin-right: 4px;
            }
            .contribute-text {
                font-size: 30px;
            }
        }
    }
    .inside-ranking-list {
        padding-left: 30px;
        display: flex;
        align-items: center;
        .inside-ranking-num-box {
            width: 60px;
            text-align: center;
            font-size: 0;
            .numIndex {
                font-size: 60px;
                color: $active-color;
            }
        }
        .inside-ranking-info {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-left: 30px;
            padding: 20px 30px 20px 0;
            .inside-ranking-list-sort {
                font-size: 0;
                display: flex;
                .lecturer-msg {
                    margin-left: 22px;
                    font-weight: 500;
                    .lecturer-name {
                        font-size: 32px;
                        color: $text-color;
                    }
                    .lecturer-company {
                        font-size: 26px;
                        color: #999;
                    }
                }
            }
            .lecturer-info {
                display: flex;
                align-items: center;
                .lecturer-info-num {
                    font-size: 70px;
                    font-weight: bold;
                    color: #ff9f4d;
                }
                .lecturer-info-text {
                    font-size: 26px;
                    font-weight: 500;
                    color: $text-color;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>