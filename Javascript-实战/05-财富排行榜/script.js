// 获取节点
const main = document.getElementById("main"); // 右侧主体
const addUserBtn = document.getElementById("add-user"); // 添加账户
const doubleBtn = document.getElementById("double"); // 资金翻倍
const showMillionairesBtn = document.getElementById("show-millionaires"); // 查询百万富翁
const sortBtn = document.getElementById("sort"); // 财富榜
const calculateWealthBtn = document.getElementById("calculate-wealth"); // 计算总金额

// 事件监听
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth);


let data = []; // 用来存储获取的用户信息
getRandomUser(); // 调用函数

// 获取随机用户并添加货币
// async 标记函数为异步函数
// await 等待异步函数完成
async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    const user = data.results[0];

    // 生成随机名称和随机财富
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser); // 回调函数，把随机生成的newUsr传过去
}


// 添加随机生成对象到data数组
function addData(obj) {
    data.push(obj);
    updateDOM(); // 更新DOM节点
}


// 更新DOM节点
// 因为上面的回调函数updateDOM()并没有传入任何的值，在ES6中providedData默认等于data
function updateDOM(providedData = data) {
    // 等于最初页面插入的节点
    main.innerHTML = " <h2><strong>Person</strong>Wealth</h2>";

    providedData.forEach(item => {
        // 创建节点用来包裹
        const element = document.createElement("div");
        element.classList.add("person"); // 给节点添加样式类名

        // 把数据插入到元素中
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

        // 把元素插入到main节点中
        main.appendChild(element);
    });
}


// 转换为货币格式
function formatMoney(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}


// 资金翻倍
function doubleMoney() {
    data = data.map(user => {
        return { ...user, money: user.money * 2 };
    });
    updateDOM();
}


// 财富榜排序
function sortByRichest() {
    data.sort((a, b) => {
        return b.money - a.money;
    });
    updateDOM();
}


// 查询百万富翁
function showMillionaires() {
    data = data.filter(user => {
        return user.money > 1000000;
    });
    updateDOM();
}


// 计算总金额
function calculateWealth() {
    // 计算总金额
    const wealth = data.reduce((acc, user) => {
        return acc += user.money
    }, 0);

    // 创建节点存储总金额
    const wealthEl = document.createElement("div");

    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
        wealth
    )}</strong></h3>`;
    main.appendChild(wealthEl);
}