<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'pizza-panel',
    data() {
        return {}
    },
};
</script>

<style lang='scss' scoped>
</style>