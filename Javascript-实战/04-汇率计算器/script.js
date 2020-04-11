// 获取节点
const currencyEl_one = document.getElementById("currency-one"); // 第一个下拉框-人民币
const amountEl_one = document.getElementById("amount-one"); // 第一个数值
const currencyEl_two = document.getElementById("currency-two"); // 第二个下拉框-美元
const amountEl_two = document.getElementById("amount-two"); // 第二个数值
const swap = document.getElementById("swap"); // 交换按钮
const rateEl = document.getElementById("rate"); // 交换后的数值


// 绑定事件监听
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);


// 通过fetch获取汇率并实现dom更新
calculate(); // 调用函数
function calculate() {
    // 获取下拉框中的值
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    // 调用api接口获取汇率值
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // 获取第二个输入框货币的简写
            const rate = data.rates[currency_two];
            // 把换换完的值插入页面
            rateEl.innerText = `1${currency_one} = ${rate}${currency_two}`;
            // 计算第二个值得汇率
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        });
}


// 交换按钮事件
swap.addEventListener("click", () => {
    // 设置一个变量来存储第一个下拉框的值
    const temp = currencyEl_one.value;
    // 替换两个下拉框的值
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});
