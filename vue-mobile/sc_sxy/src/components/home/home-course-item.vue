<template>
    <div class="home-course-item">
        <div class="course-item van-hairline--bottom" v-for="items in courseAll" :key="items.ID">
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
        courseAll: {
            type: Array
        }
    },
    computed: {
        avatar() {
            return (
                (this.courseAll &&
                    this.courseAll[0]&&
                    this.courseAll[0].FILE[0] &&
                    this.courseAll[0].FILE[0].FILE_PATH) ||
                "@/assets/default/default-avatar.png"
            );
        }
    }
};
</script>

<style lang='scss' scoped>
</style>