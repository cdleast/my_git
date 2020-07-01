<template>
    <div class="learning-item-list">
        <div
            class="learning-item"
            @click="onCourseDetails(item.ID)"
            v-for="item in datas"
            :key="item.ID"
        >
            <van-image width="150" height="90" :src="item.COVER[0]&&item.COVER[0].FILE_PATH" />
            <div class="learning-item-info">
                <div class="title van-ellipsis">{{ item.NAME }}</div>
                <div class="name">{{ item.LECTURER_ID__NAME }}</div>
                <div class="from">分类：{{ item.TYPE_ID__NAME }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "learning-item-list",
    props: {
        datas: {
            type: Array
        }
    },
    methods: {
        onCourseDetails(ID) {
            this.$router.push({
                path: "/home/recommend/course-details",
                query: {
                    ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
.learning-item-list /deep/ {
    padding-bottom: 20px;
    .learning-item {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        .van-image img {
            border-radius: 10px;
        }
        .learning-item-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            max-width: 390px;
            .title {
                font-size: 30px;
                color: #303232;
                letter-spacing: 1px;
            }
            .name {
                font-size: 24px;
                color: #919298;
                letter-spacing: 1px;
                margin-top: 10px;
            }
            .from {
                font-size: 24px;
                color: #919298;
                letter-spacing: 1px;
                margin-top: auto;
            }
        }
    }
}
</style>