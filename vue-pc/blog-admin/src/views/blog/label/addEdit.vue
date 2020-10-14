<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose">
        <el-form :rules="rules" ref="formData" :model="formData" label-width="100px" label-position="right" style="width: 400px" status-icon>
            <el-form-item label="标签名称：" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="分类名称：" prop="normalId">
                <el-select v-model="formData.normalId" clearable filterable>
                    <el-option v-for="item in normalList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formData')">确定</el-button>
                <el-button @click="handleClose">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'add-edit-label',
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
            default: {}
        },
        normalList: { // 正常状态的分类列表数据
            type: Array,
            default: []
        },
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {
            rules: {
                name: [ // 标签名称
                    { required: true, message: '请输入标签名称', trigger: 'blur' },
                ],
                normalId: [ // 分类名称
                    { required: true, message: '请选择分类名称', trigger: 'change' },
                ]
            }
        }
    },
    methods: {
        // 关闭弹窗
        handleClose() {
            // 表单清空 
            this.$refs['formData'].resetFields()
            // 调用父组件中的方法关闭窗口
            this.remoteClose()
        },

        // 提交表单数据
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 校验通过，提交表单数据
                    this.submitData()
                } else {
                    return false;
                }
            })
        },

        // 调用接口提交数据
        async submitData() {
            let res = null
            if (this.formData.id) {
                // 编辑
                res = await this.$api.updateLabel(this.formData)
            } else {
                // 新增
                res = await this.$api.addLabel(this.formData)
            }

            if (res.code === 20000) {
                this.$message({
                    message: res.message,
                    type: 'success'
                })
                this.handleClose() // 关闭窗口
            } else {
                this.$message({
                    message: res.message,
                    type: 'error'
                })
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.el-select {
    width: 100%;
}
</style>