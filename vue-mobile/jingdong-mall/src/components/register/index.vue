<template>
    <div class="register">
        <img
            class="headerimg"
            src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png"
            alt
        />
        <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
    </div>
</template>

<script>
export default {
    name: "register",
    data() {
        return {
            model: {
                username: "",
                password: ""
            },
            schema: {
                fields: [
                    {
                        // 用户名配置
                        type: "input",
                        modelKey: "username",
                        label: "用户名",
                        props: {
                            placeholder: "请输入用户名"
                        },
                        rules: {
                            // 校验规则
                            required: true,
                            type: "String",
                            min: 3,
                            max: 15
                        },
                        trigger: "blur", // 检测时机
                        messages: {
                            required: "用户名不能为空",
                            min: "用户名不能小于3个字符",
                            max: "用户名不能大于15个字符"
                        }
                    },
                    {
                        // 密码配置
                        type: "input",
                        modelKey: "password",
                        label: "密码",
                        props: {
                            placeholder: "请输入密码",
                            type: "password",
                            eye: {
                                // 密码框上的小眼睛
                                open: false
                            }
                        },
                        rules: {
                            // 校验规则
                            required: true,
                            type: "String",
                            min: 3,
                            max: 15
                        },
                        trigger: "blur", // 检测时机
                        messages: {
                            required: "密码不能为空",
                            min: "密码不能小于3个字符",
                            max: "密码不能大于15个字符"
                        }
                    },
                    {
                        // 注册按钮设置
                        type: "submit",
                        label: "注册"
                    }
                ]
            }
        };
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            this.$axios
                .get("/api/register", this.model)
                .then(res => {
                    console.log(res.data.success);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang='scss' scoped>
.headerimg {
    height: 150px;
    width: 100%;
}
</style>