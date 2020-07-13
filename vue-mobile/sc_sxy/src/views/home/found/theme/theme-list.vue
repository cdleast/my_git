<template>
    <div class="theme-list">
        <header-bar :title="title"></header-bar>

        <friendsItem :datas="colleagueByTheme"></friendsItem>
    </div>
</template>

<script>
import homeApi from "@/api/home";
import friendsItem from "@/components/home/friends/friends-item";
export default {
    name: "theme-list",
    components: {
        friendsItem
    },
    data() {
        return {
            title: this.$route.query.title,
            ID: this.$route.query.ID,
            colleagueByTheme: []
        };
    },
    created() {
        this.appColleagueByTheme();
    },
    methods: {
        async appColleagueByTheme() {
            let data = {
                PAGE: 1,
                NUM: 10,
                NOPAGE: true,
                THEME_ID: this.ID
            };
            await homeApi.appColleagueByTheme(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.colleagueByTheme = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
                console.log(this.colleagueByTheme);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>