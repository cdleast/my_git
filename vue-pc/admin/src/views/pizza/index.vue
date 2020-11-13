<template>
    <div class="pizza">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="主页" name="home">
                <app-home></app-home>
            </el-tab-pane>
            <el-tab-pane label="菜单" name="menu">
                <app-menu></app-menu>
            </el-tab-pane>
            <el-tab-pane label="管理" name="admin">
                <app-admin></app-admin>
            </el-tab-pane>
            <el-tab-pane label="关于我们" name="about">
                <app-about></app-about>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import appHome from './home'
import appMenu from './menu'
import appAdmin from './admin'
import appAbout from './about'
export default {
    name: 'pizza',
    components: {
        appHome, appMenu, appAdmin, appAbout
    },
    data() {
        return {
            activeName: 'home'
        }
    },
    methods: {
        handleClick(tab, event) {
            // this.activeName = tab.name
        }
    }
};
</script>

<style lang='scss' scoped>
</style>