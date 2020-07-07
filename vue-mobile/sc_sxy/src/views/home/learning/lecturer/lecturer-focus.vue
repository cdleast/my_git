<template>
    <div class="lecturer-focus">
        <header-bar title="我的关注"></header-bar>
        <lecturer-item-list :isShow="false" :datas="myFollowT"></lecturer-item-list>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import lecturerItemList from "@/components/home/lecturer/lecturer-item-list";
export default {
    name: "lecturer-focus",
        components: {
        lecturerItemList
    },
    data() {
        return {
            myFollowT: []
        };
    },
    created() {
        this.appMyFollowT();
    },
    methods: {
        // 讲师档案
        async appMyFollowT() {
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true
            };
            await homeApi.appMyFollowT(data).then(res => {
                let _MSG_ = res.data && res.data._MSG_;
                if (res.status === 200) {
                    this.myFollowT = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>