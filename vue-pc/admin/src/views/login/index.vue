<template>
    <div class="login">
        <div class="container" :class="{rotate: tabCur == 2}">
            <!-- 标题 -->
            <div class="login-tab" :class="{r180: reverse == 2}">
                <div :class="{active: tabCur == 1}" @click="changeTab(1)">登录</div>
                <div :class="{active: tabCur == 2}" @click="changeTab(2)">注册</div>
            </div>

            <!-- 登录 -->
            <el-form
                key="loginData"
                v-if="reverse == 1"
                :model="loginData"
                :rules="loginRules"
                ref="loginData"
                class="form-body"
            >
                <el-form-item label="账户" prop="loginUser">
                    <el-input type="username" v-model="loginData.loginUser" autocomplete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="loginPass">
                    <el-input
                        type="password"
                        v-model="loginData.loginPass"
                        autocomplete="off"
                        placeholder="请输入密码"
                        @keyup.enter.native="submitForm('loginData')"
                    ></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button
                        :disabled="!loginData.loginUser || !loginData.loginPass"
                        type="primary"
                        @click="submitForm('loginData')"
                    >提交</el-button>
                </el-form-item>
            </el-form>

            <!-- 注册 -->
            <el-form
                key="regData"
                v-if="reverse == 2"
                :model="regData"
                :rules="regRules"
                ref="regData"
                class="form-body r180"
            >
                <el-form-item label="账户" prop="regUser">
                    <el-input type="text" v-model="regData.regUser" autocomplete="off" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="regPass">
                    <el-input type="password" v-model="regData.regPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="regData.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="regData.checked">
                        我已经阅读并同意
                        <el-link class="xieyi" type="warning">《用户协议》</el-link>
                    </el-checkbox>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button
                        :disabled="!regData.regUser || !regData.regPass || !regData.checkPass || !regData.checked"
                        type="primary"
                        @click="submitForm('regData')"
                    >提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.regData.checkPass !== '') {
                    this.$refs.regData.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.regData.regPass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            tabCur: 1, // 高亮当前标签名
            reverse: 1, // 旋转 1 登录，2 注册
            loginData: { // 登录表单数据
                loginUser: "admin",
                loginPass: "11111"
            },
            regData: { // 注册表单数据
                regUser: '',
                regPass: '',
                checkPass: '',
                checked: false
            },
            loginRules: { // 登录验证规则
                loginUser: [
                    { required: true, trigger: "blur", message: "账户不能为空" },
                ],
                loginPass: [
                    { required: true, trigger: "blur", message: "密码不能为空" },
                ],
            },
            regRules: { // 注册验证规则
                regUser: [
                    { required: true, trigger: "blur", message: "账户不能为空" },
                ],
                regPass: [
                    { required: true, validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, validator: validatePass2, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        // 切换标签
        changeTab(int) {
            this.tabCur = int;
            setTimeout(() => {
                this.reverse = int
            }, 200)
        },


        // 验证成功失败
        submitForm(data) {
            this.$refs[data].validate((valid) => {
                if (valid) {
                    switch (data) {
                        case 'loginData':
                            this.loginSubmit()
                            break
                        case 'regData':
                            this.registerSubmit()
                            break
                    }
                } else {
                    this.$message.error("验证失败");
                    return false;
                }
            });
        },


        // 登录
        async loginSubmit() {
            // 验证帐号和密码是否通过
            this.$store.dispatch('user/login', this.loginData).then(res => {
                // res 就是响应回来的那个真实对象
                if (res.flag) {
                    // 查询用户菜单权限树
                    this.$api.getUserMenuList(res.data.token).then(menu => {
                        // 先清除在设置避免二次登录
                        this.$store.commit("sidebar/clearSidebar")
                        this.$store.commit("sidebar/setSidebar", menu.data.data.menuTreeList)

                        // 做权限判断部分
                        this.$store.commit("sidebar/addSidebars", this.$router)
                        this.$router.push('/')

                        this.$message.success(res.message)
                    })
                } else {
                    this.$message({
                        message: res.message,
                        type: 'waring'
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        },


        // 注册
        async registerSubmit() {
            await this.$api.registerUser(this.regData).then(res => {
                this.$message.success('注册成功')
                this.tabCur = 1
                this.reverse = 1
            })
        }
    },
};
</script>

<style lang='scss' scoped>
.login /deep/ {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    // 旋转包裹层
    .container {
        border-radius: 5px;
        background: #fff;
        transition: all 0.8s;
        transform: perspective(600px);
    }

    .container.rotate {
        transform: rotateY(-180deg);
    }

    // 旋转角度
    .r180 {
        transform: rotateY(-180deg);
    }

    // 高亮当前标签名
    .login-tab {
        width: 520px;
        height: 50px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid #e6e6e6;
        background: #fff;

        div {
            width: 50%;
            text-align: center;
            cursor: pointer;
            font-size: 24px;

            &:nth-child(1) {
                border-right: 1px solid #1989fa;
            }
            &:nth-child(2) {
                border-left: 1px solid #1989fa;
            }
        }

        .active {
            color: #1989fa;
        }
    }

    // 表单主体
    .form-body {
        position: relative;
        width: 520px;
        padding: 0 30px;
        max-width: 100%;
        overflow: hidden;

        // 左侧label
        .el-form-item__label {
            font-size: 18px;
        }

        // 登录按钮
        .btn .el-button {
            width: 100%;
        }

        // 用户协议
        .xieyi {
            vertical-align: 0;
        }
    }
}
</style>