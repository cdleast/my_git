<template>
    <div class="header-container">
        <div class="navbar">
            <el-button type="primary" class="collapseMenu" icon="el-icon-menu" size="mini" @click="toggleSideBar"></el-button>

            <!-- 面包屑部分 -->
            <breadcrumb class="breadcrumb"></breadcrumb>

            <!-- 右侧下拉选项 -->
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    <el-avatar shape="square" :src="avatar"></el-avatar>
                    <span class="name">{{ users.name }}</span>
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-s-fold" command="b">退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        <div class="tags-view-container" v-if="shouTagsView">
            <tags-view></tags-view>
        </div>

        <!-- 修改密码 -->
        <edit-pwd
            :title="editPwd.title"
            :visible="editPwd.visible"
            :remoteClose="remoteClose"
            :handleLogout="handleLogout"
        ></edit-pwd>
    </div>
</template>

<script>
import breadcrumb from '@/components/breadcrumb' // 面包屑
import tagsView from '@/components/tagsView' // 快捷导航
import editPwd from './editPwd' // 修改密码
export default {
    name: 'common-header',
    components: {
        breadcrumb,
        editPwd,
        tagsView
    },
    data() {
        return {
            users: this.$store.state.user.user, // 用户信息
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
            editPwd: { // 审核子组件传递的对象属性
                title: '',
                visible: false
            }
        }
    },
    computed: {
        // 是否显示tagsView导航
        shouTagsView() {
            return this.$store.state.settings.tagsView
        },
    },
    methods: {
        // 按钮点击事件，控制左侧导航展开收缩
        toggleSideBar() {
            // 拿到vuex中定义的方法collapseMenu
            this.$store.commit("sidebar/toggleSideBar");
        },


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
            this.editPwd.visible = true
            this.editPwd.title = '修改密码'
        },


        // 退出系统
        handleLogout() {
            this.$store.dispatch('user/logout').then(res => {
                if (res.flag) {
                    window.clearVuexAlong() // 清除vuex-along存储的数据
                    this.$router.push('/login')
                    location.reload() // 刷新浏览器
                    // this.$store.dispatch('tagsView/clearTagView') // 清空visitedViews数据
                } else {
                    this.$message({
                        message: res.message,
                        type: 'warning',
                        duration: 500 // 弹出停留时间
                    });
                }
            })
        },


        // 关闭子组件详情和审核窗口
        remoteClose() {
            this.editPwd.visible = false
        }
    }
};
</script>

<style lang='scss' scoped>
.header-container {
    .navbar {
        height: 50px;
        overflow: hidden;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

        .collapseMenu {
            float: left;

            margin: 11px 20px 0 20px;
        }

        .breadcrumb {
            float: left;
        }

        /* 下拉菜单  */
        .el-dropdown {
            float: right;
            margin-right: 50px;
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
        padding: 0 15px;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 0 3px 0 rgba(0, 0, 0, 0.04);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 0 3px 0 rgba(0, 0, 0, 0.04);
    }
}
</style>