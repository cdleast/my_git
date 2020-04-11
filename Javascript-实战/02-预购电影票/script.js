const container = document.querySelector(".container"); // 座位最外层的父级
const seats = document.querySelectorAll(".row .seat:not(.occupied)"); // 可选择的座位数组
const count = document.getElementById("count"); // 已选座位个数
const total = document.getElementById("total"); // 总价
const movieSelect = document.getElementById("movie"); // 电影下拉框
// 这个不用const是因为在下拉框切换电影的时候需要重新赋值，而const定义的变量不可以被修改
let ticketPrice = +movieSelect.value; // 默认选择电影的票价-加号进行隐试转换，转换为number类型


populateUI(); // 获取本地数据并渲染样式
undateSeletedCount(); // 设置初始座位和总票价


// 座位点击事件-点击座位的时候座位变成蓝色(已选状态)
// 通过事件代理在父元素container身上绑定事件，当我们点击它里面元素的时候，通过事件冒泡机制可以触发绑定在父元素身上的处理函数
container.addEventListener('click', function (e) {
    // 通过e.target属性获取当前点击的元素
    // 判断目标元素是否是可选状态 - contains()，js原生方法，用于判断DOM元素的包含关系
    // 判断当前元素是否包含seat类目并且不包含occupied类型
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        // toggle用于切换class类名
        e.target.classList.toggle("selected");
        undateSeletedCount(); // 更新座位数以及总票价
    }
})


// 更新座位数以及总票价
function undateSeletedCount() {
    // 获取已选座位数组
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    // ...展开运算符 - 具有复制功能
    // map() - 功能和forEach类似可以返回一个新的数组
    // indexOf() - 判断元素在数组当中第一次出现时候的索引
    const seatsIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat)
    });

    // localStorage本地存储 - 存储到浏览器中 - setItem()存储方法
    // setItem('键 - 已选座位数组，也就是存储的名字','值 - 需要字符串格式，所需需要转换')
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    // 获取已选座位的个数
    const selectedSeatsCount = selectedSeats.length;
    // 把获取已选座位的个数插入到页面当中
    count.innerText = selectedSeatsCount;
    // 计算插入总票价
    total.innerText = selectedSeatsCount * ticketPrice;
}


// 电影下拉框事件监听
movieSelect.addEventListener('change', function (e) {
    // 重新把选择的电影票价赋值
    ticketPrice = +e.target.value;
    // setMovieData - 保存电影索引值和票价函数
    setMovieData(e.target.selectedIndex, e.target.value);
    undateSeletedCount(); // 更新座位数以及总票价
})


// 保存电影索引值和票价函数 - 存储到localStorage中
// movieIndex - 电影票下标
// moviePrice - 电影票价钱
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}


// 获取本地数据并渲染样式
function populateUI() {
    // 拿到本地localStorage中存储已选座位的数据
    // 因为存储的时候我们是把数组转换成字符串存储，获取的时候我们就把字符串转换成数组
    // getItem('保存的本地存储名字') - 获取存储数据
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    // 判断selectedSeats不能为空，而且必须要有内容
    if (selectedSeats !== null && selectedSeats.length > 0) {
        // seat - 每一个座位
        // index - 下标
        seats.forEach((seat, index) => {
            // 判断如果遍历出来的索引值和存储在localStorage中的索引值相等，那就加上样式
            // >-1 就是判断selectedSeats中是否包含有index这个索引，有的话回返回一个大于-1的数
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        });
    }

    // 拿到本地localStorage中存储电影票下标的数据
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    // 判断不为空
    if (selectedMovieIndex !== null) {
        // 把选择影片的下拉框更新为存储中的下标
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}