<template>
    <div class="ramind-item-list">
        <div
            class="ramind-item"
            v-for="(item,index1) in datas"
            :key="index1+'2'"
            v-show="item.TYPE == '2'"
            @click="onMapDetails(item.MAP_ID)"
        >
            <div class="top">
                <van-image
                    width="20"
                    height="20"
                    :src="require('@/assets/images/learning/xxjhpy.png')"
                />
                <div class="title">{{ item.NAME }}</div>
            </div>
            <div class="desp">
                <van-image
                    width="18"
                    height="18"
                    :src="require('@/assets/images/learning/time-icon.png')"
                />
                <div class="title">建议在{{ item.PLAN_END_TIME }}前完成</div>
            </div>
            <van-progress :percentage="item.PERCENTAGE" pivot-text stroke-width="10" />
            <div class="progress">进度：{{ item.PERCENTAGE }}%</div>
        </div>

        <div
            class="ramind-item"
            v-for="(item,index2) in datas"
            :key="index2+'1'"
            v-show="item.TYPE == '1'"
            @click="onMapDetails(item.MAP_ID)"
        >
            <div class="top">
                <van-image
                    width="20"
                    height="20"
                    :src="require('@/assets/images/learning/dttb.png')"
                />
                <div class="title">{{ item.NAME }}</div>
            </div>
            <div
                class="desp"
                v-if="item.MAP_XX"
            >共{{ item.MAP_XX[0].STAGE_SUM }}阶段 {{item.MAP_XX[0].GQ_SUM}}关卡</div>
            <van-progress :percentage="item.PERCENTAGE" pivot-text stroke-width="10" />
            <div class="progress">进度：{{ item.PERCENTAGE }}%</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ramind-item-list",
    props: {
        datas: {
            type: Array
        }
    },
    methods: {
        onMapDetails(ID) {
            this.$router.push({
                path: "/home/learning/learning-map-details",
                query: {
                    ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.ramind-item {
    background: #fff;
    box-shadow: 0px 3px 22px 1px rgba(4, 0, 2, 0.07);
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;

    & > div {
        margin: 16px 0;
    }

    .top {
        display: flex;
        align-items: center;

        .van-image {
            margin-right: 10px;
        }

        .title {
            font-size: 30px;
            font-weight: 700;
            color: $text-color;
        }
    }

    .desp {
        font-size: 24px;
        color: $text-color;
        display: flex;
        align-items: center;

        .van-image {
            margin-right: 10px;
        }
    }

    .progress {
        font-size: 24px;
        font-weight: 500;
        color: #999;
    }
}
</style>