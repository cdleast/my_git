<template>
    <div class="home-course-item">
        <div
            @click="jumpDetails(items)"
            class="course-item van-hairline--bottom"
            v-for="items in datas"
            :key="items.ID"
        >
            <div
                class="course-item-pic"
                v-for="(item,index) in items.FILE"
                :key="index"
                :style="{backgroundImage:'url('+ item.FILE_PATH +')'}"
            ></div>
            <div class="course-item-info">
                <div class="course-item-name">{{ items.NAME }}</div>
                <div class="course-item-type">
                    <van-tag
                        v-for="(tag, index) in items.CONDITION_TYPE__NAME.split(',')"
                        :key="index"
                        type="primary"
                        round
                    >{{ tag }}</van-tag>
                </div>
                <div class="course-item-publish">
                    <span
                        class="course-item-publish-time"
                    >发布：{{ items.S_MTIME | comverTime('YYYY-MM-DD')}}</span>
                    <span class="course-item-publish-time">{{ items.LEARNING }}人已学</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home-course-item",
    props: {
        datas: {
            type: Array
        }
    },
    computed: {
        avatar() {
            return (
                (this.datas &&
                    this.datas[0] &&
                    this.datas[0].FILE[0] &&
                    this.datas[0].FILE[0].FILE_PATH) ||
                "@/assets/default/default-avatar.png"
            );
        }
    },
    methods: {
        // 跳转到详情页
        jumpDetails(items) {
            this.$router.push({
                path: "/home/home-recommend/recommend-course-details",
                query: {
                    ID: items.ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.home-course-item {
    .course-item {
        display: flex;
        flex-direction: row;
        padding: 0 30px;
        padding-bottom: 30px;
        padding-top: 30px;

        .course-item-pic {
            width: 220px;
            height: 110px;
            border-radius: 16px;
            border: 1px solid #eaeaea;
            background-size: 100% 100%;
        }

        .course-item-info {
            flex: 1;
            justify-content: space-between;
            margin-left: 30px;

            .course-item-name {
                font-size: 30px;
                font-weight: 500;
                color: $text-color;
                text-overflow: ellipsis;
            }

            .course-item-type {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: 10px;

                .van-tag {
                    margin-right: 20px;
                }
            }

            .course-item-publish {
                display: flex;
                flex-direction: row;
                margin-top: 10px;

                .course-item-publish-time {
                    font-size: 24px;
                    font-weight: 500;
                    color: #999;
                    margin-right: 22px;
                }
            }
        }
    }
}
</style>