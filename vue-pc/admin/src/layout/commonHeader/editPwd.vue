<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :append-to-body="true" :before-close="handleClose">
        <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px" style="width: 400px">
            <el-form-item label="原密码" prop="oldPass">
                <el-input type="password" v-model="formData.oldPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
                <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="formData.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formData')">提交</el-button>
                <el-button @click="$refs['formData'].resetFields()">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
    name: 'modify-password',
    props: {
        title: { // 弹窗的标题
            type: String,
            default: ''
        },
        visible: { // 弹出窗口，true弹出
            type: Boolean,
            default: false
        },
        remoteClose: Function, // 用于关闭窗口
        handleLogout: Function // 退出系统
    },
    data() {
        const validateOldPass = (rule, value, callback) => {
            // 校验原密码是否正确
            this.$api.checkPwd(this.users.id, value).then(res => {
                const resp = res.data
                if (resp.flag) {
                    // 验证通过
                    callback()
                } else {
                    callback(new Error(resp.message))
                }
            })
        }

        // 校验确认密码是否一致
        const validatePass = (rule, value, callback) => {
            // value 代表 checkPass
            if (value !== this.formData.password) {
                callback(new Error('两次输入的密码不一致'))
            } else {
                // 相等,则通过
                callback()
            }
        }

        return {
            users: this.$store.state.user.user, // 用户信息
            formData: { // 修改密码参数
                oldPass: '',
                password: '',
                checkPass: ''
            },
            rules: { // 修改密码校验表单
                oldPass: [
                    { required: true, message: '原密码不能为空', trigger: "blur" },
                    { validator: validateOldPass, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '新密码不能为空', trigger: "blur" }
                ],
                checkPass: [
                    { required: true, message: '确认密码不能为空', trigger: "blur" },
                    { validator: validatePass, trigger: 'blur' }
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


        // 修改密码
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.$api.updatePwd(this.users.id, this.formData.checkPass).then(res => {
                        const resp = res.data
                        // 不管失败还是成功,都进行提醒
                        this.$message({
                            message: resp.message,
                            type: resp.flag ? 'success' : 'warning'
                        })
                        if (resp.flag) {
                            // 更新成功, 退出系统,回到登录页面
                            this.handleLogout()
                            // 关闭窗口
                            this.remoteClose()
                        }
                    })
                } else {
                    return false
                }
            })
        }
    }
};
</script>

<style lang='scss' scoped>
</style>