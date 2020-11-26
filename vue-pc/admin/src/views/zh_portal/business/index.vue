<template>
    <div class="business">
        <div class="demo-input-suffix">
            <el-input @click.native="dialogVisible = true" placeholder="请选择日期" v-model="from.value1">
                <i
                    v-if="from.value1"
                    @click.stop="$message.success('子级');"
                    slot="suffix"
                    class="el-input__icon el-icon-date"
                ></i>
            </el-input>
        </div>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'zh_portal-business',
    data() {
        return {
            from: {
                value1: '123'
            },
            dialogVisible: false
        }
    }
};
</script>

<style lang='scss' scoped>
.business {
    width: 200px;
}
</style>