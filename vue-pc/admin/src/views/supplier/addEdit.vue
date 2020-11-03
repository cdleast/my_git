<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose">
        <el-form
            :rules="rules"
            ref="formData"
            label-width="100px"
            label-position="right"
            style="width: 400px;"
            :model="formData"
        >
            <el-form-item label="供应商名称" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="联系人" prop="linkman">
                <el-input v-model="formData.linkman"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="mobile">
                <el-input v-model="formData.mobile"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
                <el-input type="textarea" v-model="formData.remark"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'add-edit-supplier',
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
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {
            rules: {
                name: [
                    { required: true, message: '供应商不能为空', trigger: 'blur' }
                ],
                linkman: [
                    { required: true, message: '联系人不能为空', trigger: 'blur' }
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


        // 验证表单成功
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) { // 校验通过，提交表单数据
                    this.submitData()
                } else {
                    return false;
                }
            })
        },


        // 提交表单数据
        async submitData() {
            let res = null
            if (this.formData.id) { // 编辑
                res = await this.$api.updateSupplierId(this.formData)
            } else { // 新增
                res = await this.$api.addSupplier(this.formData)
            }
            if (res.data.code == 20000) {
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