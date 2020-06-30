<template>
    <div class="department">
        <header-bar title="部门列表"></header-bar>
    </div>
</template>

<script>
import addresApi from "@/api/addres";
export default {
    name: "department",
    data() {
        return {
            ressGroupDept: [] // 通讯录组列表下部门
        };
    },
    created(){
        this.appAddressGroupDept();
    },
    methods: {
        // 通讯录组列表下部门
        async appAddressGroupDept() {
            let data = {
                GROUP_ID: this.$route.query.GROUP_ID
            };
            await addresApi.appAddressGroupDept(data).then(res => {
                console.log(res)
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.ressGroupDept = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
                console.log(this.ressGroupDept);
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>