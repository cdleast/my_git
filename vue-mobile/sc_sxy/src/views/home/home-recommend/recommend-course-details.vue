<template>
    <div class="recommend-course-details">
        <van-nav-bar title="课程详情" left-arrow @click-left="$router.go(-1)"></van-nav-bar>

    </div>
</template>

<script>
import homeApi from "@/api/home";
export default {
    name: "recommend-course-details",
    created(){
        this.getGoldCourseDetails();
    },
    methods:{
        // 获取课程详情数据
        async getGoldCourseDetails(){
            await homeApi.goldCourseDetails(this.$route.query.ID).then(res=>{
                console.log(res)
            })
        }
    }
};
</script>

<style lang='scss' scoped>
</style>