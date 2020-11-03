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
            <el-form-item label="帐号" prop="username">
                <el-input v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="formData.age"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
                <el-input v-model="formData.mobile"></el-input>
            </el-form-item>
            <el-form-item label="薪酬" prop="salary">
                <el-input v-model="formData.salary"></el-input>
            </el-form-item>
            <el-form-item label="入职时间" prop="entryDate">
                <el-date-picker
                    style="width: 200px"
                    value-format="yyyy-MM-dd"
                    v-model="formData.entryDate"
                    placeholder="选择入职时间"
                    type="date"
                ></el-date-picker>
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
    name: 'add-edit-staff',
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
            rules: { // 校验规则
                cardNum: [
                    { required: true, message: '卡号不能为空', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' }
                ],
                payType: [
                    { required: true, message: '支付类型不能为空', trigger: 'change' }
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
                res = await this.$api.updateStaffId(this.formData)
            } else { // 新增
                res = await this.$api.addStaff(this.formData)
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