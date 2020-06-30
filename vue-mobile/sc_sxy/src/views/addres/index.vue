<template>
    <div class="addres">
        <header-bar title="通讯录"></header-bar>

        <van-search left-icon="false" shape="round" v-model="value" placeholder="请输入搜索关键词" />

        <van-cell-group>
            <van-cell
                v-for="item in organization"
                :key="item.ID"
                @click="onDepartment(item.ID)"
                :title="item.DEPT_NAME"
                icon="star"
                is-link
            />
            <van-cell
                v-for="item in ressGroupList.CHILD"
                :key="item.ID"
                @click="onDepartment(item.ID)"
                :title="item.NAME"
                icon="star"
                is-link
            />
        </van-cell-group>

        <footer-bar></footer-bar>
    </div>
</template>

<script>
import addresApi from "@/api/addres";
import footerBar from "@/components/global/footer-bar";
export default {
    name: "addres",
    components: {
        footerBar
    },
    data() {
        return {
            value: "",
            organization:[], // 通讯录组织架构
            ressGroupList: [] // 通讯录组列表
        };
    },
    created() {
        this.appOrganization();
        this.appAddressGroupList();
    },
    methods: {
        // 通讯录组织架构
        async appOrganization() {
            await addresApi.appOrganization().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.organization = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 通讯录组列表
        async appAddressGroupList() {
            await addresApi.appAddressGroupList().then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    this.ressGroupList = res.data._DATA_;
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 跳转通讯录组列表下部门
        onDepartment(ID) {
            this.$router.push({
                path: "/addres/department",
                query: {
                    GROUP_ID: ID
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>