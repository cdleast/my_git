<template>
    <div class="home">
        <home-header></home-header>

        <div class="contaner">
            <router-view />
        </div>
        <footer-bar></footer-bar>

        <!-- 切换组织 -->
        <van-popup v-model="showPicker" position="bottom" :style="{ height: '50%' }">
            <van-picker
                @confirm="onConfirm"
                @cancel="showPicker = false"
                show-toolbar
                title="请切换组织机构"
                :columns="columns"
            />
        </van-popup>
    </div>
</template>

<script>
import homeHeader from "@/components/home/home-header";
import footerBar from "@/components/global/footer-bar";
import homeApi from "@/api/home";
export default {
    name: "home",
    components: {
        homeHeader,
        footerBar
    },
    data() {
        return {
            showPicker: false, // 切换组织
            columns: [
                {
                    values: [],
                    defaultIndex: 2
                },
                {
                    values: [],
                    defaultIndex: 1
                }
            ],
            value: "" // 切换组织选择的数据
        };
    },
    computed: {
        getUser() {
            return this.$store.getters.user._DATA_[0];
        }
    },
    created() {
        this.appdeptUserList();
    },
    methods: {
        // 获取机构用户列表
        async appdeptUserList() {
            let data = {
                LOGIN_NAME: this.getUser.USER_LOGIN_NAME
            };
            await homeApi.appdeptUserList(data).then(res => {
                let _MSG_ = res.data._MSG_;
                if (res.status === 200) {
                    let data1 = res.data._DATA_[0].EX_ODEPT_CODE__NAME;
                    let data2 = res.data._DATA_[0].USER[0].EX_ODEPT_CODE__NAME;
                    this.columns[0].values.push(data1);
                    this.columns[1].values.push(data2);
                } else {
                    this.$toast(_MSG_);
                }
            });
        },

        // 切换底部组织状态
        onSwitchGroup() {
            this.showPicker = true;
        },

        // 切换底部组织确定按钮
        onConfirm(value) {
            console.log(value);
            this.value = value;
            this.showPicker = false;
        }
    }
};
</script>

<style lang='scss' scoped>
@import "~@/styles/home";
</style>