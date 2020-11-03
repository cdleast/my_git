<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose">
        <el-form
            :rules="rules"
            ref="formData"
            :model="formData"
            label-width="100px"
            label-position="right"
            style="width: 400px"
            status-icon
        >
            <el-form-item label="分类名称：" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="状态：" prop="status">
                <el-radio-group v-model="formData.status">
                    <el-radio :label="1">正常</el-radio>
                    <el-radio :label="0">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="排序：" prop="sort">
                <el-input-number v-model="formData.sort" :min="1" :max="10000" style="width: 300px"></el-input-number>
            </el-form-item>
            <el-form-item label="备注：" prop="remark">
                <el-input type="textarea" v-model="formData.remark"></el-input>
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
    name: 'add-edit-category',
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
        remoteClose: Function // 用于关闭窗口，父组件传递的方法
    },
    data() {
        return {
            rules: {
                name: [ // prop值
                    { required: true, message: '请输入分类名称', trigger: 'blur' },
                ],
                status: [
                    { required: true, message: '请选择状态', trigger: 'change' },
                ],
                sort: [
                    { required: true, message: '请输入排序号', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        // 关闭窗口
        handleClose() {
            // 将表单清空
            this.$refs['formData'].resetFields()
            // 注意不可以通过  this.visible = false来关闭，因为它是父组件的属性
            this.remoteClose() // 子组件传递的方法
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


        // 提交表单数据
        async submitData() {
            let res = null
            if (this.formData.id) {
                // 编辑
                res = await this.$api.updateCategoryId(this.formData)
            } else {
                // 新增
                res = await this.$api.addCategory(this.formData)
            }

            if (res.data.code === 20000) {
                this.$message({
                    message: res.data.message,
                    type: 'success'
                })
                this.handleClose() // 关闭窗口
            } else {
                this.$message({
                    message: res.data.message,
                    type: 'error'
                })
            }
        }
    }
};
</script>

<style lang='scss' scoped>
</style>