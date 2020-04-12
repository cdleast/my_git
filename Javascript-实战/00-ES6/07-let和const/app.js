/**
 * var let const
 * let 声明的变量只在 let 命令所在的代码块内有效
 * const 声明一个只读的常量，一旦声明，常量的值就不能改变。
 */
console.log('var 定义变量');
function testVar() {
	var a = 30; // var 是从上到下执行
	if (true) {
		var a = 50;
		console.log(a); // 50 打印上面的a=50
	}
	console.log(a);  // 50 找他最近的a if里的a=50
}
testVar(); // 调用
console.log('');


console.log('let 定义变量');
function testLet() {
	let a = 30; // let 只作用在{}中
	if (true) {
		let a = 50; // 只作用在当前的{}中，出来{}无效
		console.log(a);  // 50 找他最近的a if里的let a = 50;
	}
	console.log(a);   // 30 因为let只作用在{}中所以，拿不到if{}里的let a = 50
}
testLet();
console.log('');


// 常用for循环 var 定义变量i
for (var vari = 0; vari < 10; vari++) {
	// console.log(vari); // 0-9
}
// console.log(i); // 10 i=10的时候<10判断不成立，但是已经进行了++，所以打印出来为10

// 常用for循环 let 定义变量i
for (let leti = 0; leti < 10; leti++) {
	// console.log(leti); // 0-9
}
// console.log(leti); // 因为使用let定义的i只作用在()中，所以在这打印，找不到，所以报错



// const 常量
const x = 10;
// x = 100; // 报错，常量不能修改

const colors = [];
// colors = "Green"; // 报错，常量不能修改
colors.push("red"); // 但是可以往数组里面添加内容
colors.push("blue"); // 但是可以往数组里面添加内容
console.log(colors);

















