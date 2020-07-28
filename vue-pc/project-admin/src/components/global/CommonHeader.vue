<template>
    <div class="common-header">
        <!-- 左侧展开收缩按钮及面包屑 -->
        <div class="l-content">
            <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
            <common-breadcrumb></common-breadcrumb>
        </div>

        <!-- 右侧用户部分 -->
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-image class="user" :src="userImg" fit="fit"></el-image>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-setting">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-setting" @click.native="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import CommonBreadcrumb from "@/components/global/CommonBreadcrumb";
export default {
    name: "common-header",
    components: {
        CommonBreadcrumb,
    },
    data() {
        return {
            userImg: require("@/assets/images/user.png"),
        };
    },
    methods: {
        // 按钮点击事件，控制左侧导航展开收缩
        collapseMenu() {
            // 拿到vuex中定义的方法collapseMenu
            this.$store.commit("collapseMenu");
        },

        // 退出登录
        logOut() {
            // 清除数据
            this.$store.commit("clearToken");
            this.$store.commit("clearMenu");
            this.$store.commit("clearBreadcrumb");
            this.$store.commit("clearTagsList");
            location.reload(); // 刷新浏览器
        },
    },
};
</script>

<style lang='scss' scoped>
.common-header /deep/ {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .l-content {
        display: flex;
        align-items: center;
        .el-button {
            margin-right: 20px;
        }

        // 面包屑
        .el-breadcrumb__item {
            .el-breadcrumb__inner {
                color: #666666;
                font-weight: normal;
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #ffffff;
                }
            }
        }
    }

    // 右侧用户
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
}
</style>