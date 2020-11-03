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
            <el-form-item label="会员卡号" prop="cardNum">
                <el-input v-model="formData.cardNum"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="会员生日" prop="birthday">
                <el-date-picker value-format="yyyy-MM-dd" v-model="formData.birthday" type="date" placeholder="会员生日"></el-date-picker>
            </el-form-item>
            <el-form-item label="手机号码" prop="phone">
                <el-input v-model="formData.phone"></el-input>
            </el-form-item>
            <el-form-item label="开卡金额" prop="money">
                <el-input v-model="formData.money"></el-input>
            </el-form-item>
            <el-form-item label="可用积分" prop="integral">
                <el-input v-model="formData.integral"></el-input>
            </el-form-item>
            <el-form-item label="支付类型" prop="payType">
                <el-select v-model="formData.payType" placeholder="支付类型" clearable filterable>
                    <el-option label="现金" value="1"></el-option>
                    <el-option label="微信" value="2"></el-option>
                    <el-option label="支付宝" value="3"></el-option>
                    <el-option label="银行卡" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="会员地址" prop="address">
                <el-input type="textarea" v-model="formData.address"></el-input>
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
    name: 'add-edit-member',
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
                res = await this.$api.updateMemberId(this.formData)
            } else { // 新增
                res = await this.$api.addMember(this.formData)
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