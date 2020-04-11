// 获取元素
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// form表单绑定事件监听
form.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止默认事件

    // 调用函数checkRequired函数判断验证是否为空
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15); // 验证用户名长度
    checkLength(password, 6, 12); // 验证密码长度
    checkEmail(email); // 验证邮箱格式是否正确
    checkPasswordsMatch(password, password2); // 验证两次密码是否一致
})


// 错误执行函数
function showError(input, message) {
    // 获取input的父元素
    const formControl = input.parentElement;
    // 给父元素添加错误样式
    formControl.className = 'form-control error';
    // 获取错误提示语标签
    const small = formControl.querySelector('small');
    // 设置small的内容
    small.innerText = message;
}


// 成功执行函数
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


// 表单验证是否为空(必填项)函数
function checkRequired(inputArr) {
    // 便利传过来的inputArr
    inputArr.forEach(function (input) {
        // trim()是去掉首尾的空格
        if (input.value.trim() === "") {
            showError(input, `${getKeyWords(input)}为必填项`);
        } else {
            showSuccess(input);
        }
    })
}


// 截取关键字函数
function getKeyWords(input) {
    return input.placeholder.slice(3);
}


// 判断用户名和密码长度函数
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getKeyWords(input)}至少${min}个字符`);
    } else if (input.value.length > max) {
        showError(input, `${getKeyWords(input)}少于${max}个字符`);
    } else {
        showSuccess(input);
    }
}


// 验证邮箱格式函数
function checkEmail(input) {
    const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "邮箱格式错误");
    }
}


// 验证两次密码是否一致函数
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "密码不匹配");
    }
}