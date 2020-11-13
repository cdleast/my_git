<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose"></el-dialog>
</template>

<script>
export default {
    name: 'add-edit-goods',
    props: {
        title: { // 弹窗的标题
            type: String,
            default: ''
        },
        visible: { // 弹出窗口，true弹出
            type: Boolean,
            default: false
        },
        formData: { // 提交表单数据
            type: Object,
            default() {
                return {}
            }
        },
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {

        }
    },
    methods: {
        // 关闭窗口
        handleClose() {
            this.remoteClose() // 子组件传递的方法
        },
    }
};
</script>

<style lang='scss' scoped>
</style>