<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">注册用户</span>
            </div>

            <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="ruleForm"
            >
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="选择身份" prop="identity">
                    <el-select v-model="ruleForm.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="员工" value="employee"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    <el-button @click="$router.push('/login')">登录</el-button>
                    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
import globalApi from "@/api/global"; // 导入调取接口api文档
export default {
    name: "register",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value !== this.ruleForm.password) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: "", // 用户名
                password: "", // 密码
                checkPass: "", // 确认密码
                identity: "" // 选择身份
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 2,
                        max: 30,
                        message: "长度在 2 到 30 个字符",
                        trigger: "blur"
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 30,
                        message: "长度在 6 到 30 个字符",
                        trigger: "blur"
                    }
                ],
                checkPass: [
                    {
                        required: true,
                        message: "确认密码不能为空",
                        trigger: "blur"
                    },
                    {
                        min: 6,
                        max: 30,
                        message: "长度在 6 到 30 个字符",
                        trigger: "blur"
                    },
                    { validator: validatePass, trigger: "blur" }
                ],
                identity: [
                    {
                        required: true,
                        message: "请选择身份",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    methods: {
        // 注册
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    globalApi.register(this.ruleForm).then(res => {
                        const resp = res.data;
                        if (resp.flag) {
                            this.$message({
                                message: "注册成功",
                                type: "success"
                            });
                            this.$router.push("/login");
                        } else {
                            this.$message.error("注册失败");
                        }
                    });
                } else {
                    return false;
                }
            });
        },
        // 重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>


<style lang='scss' scoped>
.register {
    background-color: #f9fafb;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url("../../assets/images/login-bg.jpg") no-repeat center center;
    background-size: 100% 100%;
}
.form_container {
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
.manage_tip {
    height: 50px;
    line-height: 50px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #409eff;
    text-align: center;
}
.manage_tip .title {
    font-weight: bold;
    font-size: 20px;
    color: #fff;
}
.ruleForm {
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
}
.el-select {
    width: 100%;
}
.register /deep/ .el-form-item__content {
    display: flex;
}
.el-button {
    flex: 1;
}
</style>