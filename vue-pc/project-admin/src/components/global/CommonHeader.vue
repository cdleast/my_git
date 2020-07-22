<template>
    <div class="common-header">
        <!-- 左侧展开收缩按钮及面包屑 -->
        <div class="l-content">
            <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <!-- 右侧用户部分 -->
        <div class="r-content">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-image class="user" :src="userImg" fit="fit"></el-image>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-setting">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-setting">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "common-header",
    data() {
        return {
            userImg: require("@/assets/images/user.png")
        };
    },
    computed: {
        // 从vuex中获取当前点击的页面
        ...mapState({
            current: state => state.breadcrumb.currentMenu
        })
    }
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