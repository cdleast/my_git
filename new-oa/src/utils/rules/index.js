export default{
    rules: {
        username: [
            { required: true, message: "帐号不能为空", trigger: "blur" }
        ],
        password: [
            { required: true, message: "密码不能为空", trigger: "blur" }
        ]
    }
}