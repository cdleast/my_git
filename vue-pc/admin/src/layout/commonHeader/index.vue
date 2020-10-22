<template>
    <div class="header-container">
        <div class="navbar">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar shape="square" :src="avatar"></el-avatar>
                    <span class="name">{{uesr.data.name}}</span>
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-s-fold" command="b">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="tags-view-container">tags-view-container</div>
    </div>
</template>

<script>
export default {
    name: 'common-header',
    data() {
        return {
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
        }
    },
    computed: {
        // 用户信息
        uesr() {
            return this.$store.state.user.user
        }
    },
    methods: {
        // 判断打开类型
        handleCommand(command) {
            switch (command) {
                case 'a':
                    this.handlePwd()
                    break;
                case 'b':
                    this.handleLogout()
                    break;
                default:
                    break;
            }
        },


        // 打开修改密码窗口
        handlePwd() {

        },


        // 退出系统
        handleLogout() {

        }

    }
};
</script>

<style lang='scss' scoped>
.header-container {
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

        /* 下拉菜单  */
        .el-dropdown {
            float: right;
            margin-right: 40px;
            margin-top: 5px;

            .el-dropdown-link {
                cursor: pointer;
                display: flex;
                align-items: center;

                .name {
                    margin-left: 10px;
                }
            }
        }
    }

    .tags-view-container {
        height: 35px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 0 3px 0 rgba(0, 0, 0, 0.04);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 0 3px 0 rgba(0, 0, 0, 0.04);
    }
}
</style>