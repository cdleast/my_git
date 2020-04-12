/**
 * reduce
 * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 * reduce() 可以作为一个高阶函数，用于函数的 compose。
 * 注意: reduce() 对于空数组是不会执行回调函数的。
 * 可以代替forEach()
 * 可以代替map()
 */

/** 场景1
 *  计算数组中所有值的总和 
 *  
 */

var numbers = [10, 20, 30];
var sum = 0, sum2 = 0,sum3 = 0;

//  es5 实现场景1
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
console.log('es5 实现场景1');
console.log(sum);
console.log('');


// es6 forEach 实现场景1
numbers.forEach(function (number) {
	sum2 += number
})
console.log('es6 forEach 实现场景1');
console.log(sum)
console.log('');


// es6 reduce 实现场景1
// reduce(这里的迭代器函数有两个参数，sum需要给一个初始值(比如0)，number是拿到数组中的每一个值)
// reduce(这里的sum和number与外面其他的sum和number是没有任何关系的)
var sumValue = numbers.reduce(function (sum, number) {
	// console.log(sum);
	return sum + number;
}, 0);
console.log('es6 reduce 实现场景1');
console.log(sumValue);
console.log('');


/** 场景2
 *  将数组中对象的某个属性抽离到另外一个数组中
 */
var primaryColors = [
	{ color: "red" },
	{ color: "yellow" },
	{ color: "blue" }
];

// es6 reduce 实现场景2
// previous 变量初始化一个空数组[]
var colors1 = primaryColors.reduce(function (previous, primaryColor) {
	// 把拿到的每一个对象的color值添加到previous数组中去
	previous.push(primaryColor.color);
	return previous;
}, []);
console.log('es6 reduce 实现场景2')
console.log(colors1);
console.log('');


// es6 map 实现场景2
var colors2 = primaryColors.map(function(primary){
	return primary.color;
})
console.log('es6 map 实现场景2')
console.log(colors2);
console.log('');


/** 场景3
 *  判断字符串中括号是否对称
 */

function balancedParens(string) {
	// 把接收到的参数string字符串，切割成数组调用reduce方法
	return !string.split("").reduce(function (previous, char) {
		if (previous < 0) { return previous; }
		if (char == "(") { return ++previous; }
		if (char == ")") { return --previous; }
		return previous;
	}, 0);
}
console.log('es6 reduce 实现场景3')
console.log(balancedParens("((())))"));
console.log('');