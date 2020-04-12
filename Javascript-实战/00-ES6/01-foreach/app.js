// 定义一个数组
var colors = ["red", "blue", "green"];

// es5 遍历数组方法
console.log('ES5 遍历数组方法');
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
console.log('');


// es6 forEach color用来接收每一个值 forEach(里面的函数叫做迭代器函数)
console.log('ES6 遍历数组方法');
colors.forEach(function (color) {
	console.log(color);
});
console.log('');


// 练习: 遍历数组中的值,并计算总和
var numbers = [1, 2, 3, 4, 5];
// 定义初始值
var sum1 = 0, sum2 = 0, sum3 = 0;


// 使用 es5 遍历数组进行计算总和
for (let i = 0; i < numbers.length; i++) {
	sum1 += numbers[i];
}
console.log('练习 es5 遍历数组计算总和');
console.log(sum1); // 15
console.log('');


// 使用 es6 forEach 遍历数组进行计算总和
numbers.forEach(function (number) {
	sum2 += number;
})
console.log('练习 es6 遍历数组计算总和');
console.log(sum2); // 15
console.log('');


// 使用forEach进行代码抽离
function adder(number) {
	sum3 += number;
}
// adder是上面的函数名
numbers.forEach(adder);
console.log('使用forEach进行代码抽离计算总和');
console.log(sum3);
console.log('');
