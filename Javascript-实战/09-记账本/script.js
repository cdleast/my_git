// 获取DOM节点
const balance = document.getElementById("balance"); // 余额
const money_plus = document.getElementById("money-plus"); // 收入
const money_minus = document.getElementById("money-minus"); // 支出
const list = document.getElementById("list"); // 历史记录
const form = document.getElementById("form"); // 添加新交易
const text = document.getElementById("text"); // 新增交易输入框中的内容
const amount = document.getElementById("amount"); // 交易金额


// 事件监听
form.addEventListener("submit", addTransaction);


// 创建虚拟交易数组
// const dummyTransactions = [
//     { id: 1, text: "鲜花", amount: -20 },
//     { id: 2, text: "薪酬", amount: 300 },
//     { id: 3, text: "书籍", amount: -10 },
//     { id: 4, text: "相机", amount: 150 }
// ];

// 本地存储
const localStrageTransactions = JSON.parse(
    localStorage.getItem("transactions")
);
let transactions = localStorage.getItem("transactions") !== null ? localStrageTransactions : [];



// 初始化应用
function init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValues(); // 更新数据
}
init();


// 添加transactions交易到DOM list中
function addTransactionDOM(transaction) {
    // 获得金额前面到符号
    const sign = transaction.amount < 0 ? "-" : "+";

    // 创建li标签
    const item = document.createElement("li");

    // 基于金额的正负添加对应的类名
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    // 插入HTML
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `;
    list.appendChild(item);
}


// 更新余额，收入，支出的金额
function updateValues() {
    // 通过map()获得交易金额数组
    const amounts = transactions.map(transaction => {
        return transaction.amount;
    });

    // reduce()方法得到余额/总数
    const total = amounts.reduce((acc, item) => {
        return acc += item;
    }, 0).toFixed(2);

    // filter()&reduce()得到收入
    const income = amounts.filter(item => {
        return item > 0
    }).reduce((acc, item) => {
        return acc += item;
    }, 0).toFixed(2);

    // filter()&reduce()得到支出
    const expense = (amounts.filter(item => {
        return item < 0
    }).reduce((acc, item) => {
        return acc += item;
    }, 0) * -1).toFixed(2);

    // 插入节点
    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}


// 添加新交易
function addTransaction(e) {
    e.preventDefault();

    // 验证输入框是否为空
    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("请输入交易名称和金额");
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        };
        transactions.push(transaction); // 添加到交易数组
        addTransactionDOM(transaction); // 添加到DOM节点list中
        updateValues(); // 更新DOM节点
        updataLocalStorage(); // 更新本地存储数据

        // 清空输入框内容
        text.value = "";
        amount.value = "";
    }
}


// 生成随机数用于ID
function generateID(id) {
    return Math.floor(Math.random() * 100000000);
}


// 删除交易记录
function removeTransaction(id) {
    transactions = transactions.filter(transaction => {
        return transaction.id !== id;
    });
    updataLocalStorage(); // 更新本地存储数据
    init(); // 初始化
}


// 更新本地存储数据
function updataLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}