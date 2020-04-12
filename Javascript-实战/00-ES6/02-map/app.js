/** 场景1
 * 
 * 假定有一个数值数组(a),将A数组中的值以双倍的形式放到(b)数组 
 */
var a = [1, 2, 3];
var b = [];


// es5 来实现
for (var i = 0; i < a.length; i++) {
	b.push(a[i] * 2);
}
console.log('es5 方法实现场景1');
console.log(b); // [2,4,6]
console.log('');


// es5 循环打印b数组中的值
console.log('es5 循环打印b数组中的值');
for (var i = 0; i < b.length; i++) {
	console.log(b[i]);
}
console.log('');


// es6 map方法实现场景1 map会返回一个数组 map(里面的函数叫做迭代器函数)
// number 是一个参数，用来接收b数组中的每一个值
var doubled = a.map(function (number) {
	return number * 2;
})
console.log('es6 map方法实现场景1');
console.log(doubled); // [2,4,6]
console.log('');

// es6 forEach 循环打印b数组中的值,现在是b是map返回的新数组doubled
console.log('es6 forEach方法打印b数组中的值');
doubled.forEach(function (number) {
	console.log(number);
})
console.log('');


/** 场景2
 * 
 * 假定有一个对象数组(c),将c数中对象某个属性的值存储到d数组中
 */
var c = [
	{ model: "Buick", price: "CHEAP" },
	{ model: "BMW", price: "expensive" }
];


// car 是 c 数组中的每一个对象
var d = c.map(function (car) {
	// 把每一个对象car中的属性price的值返回给数组d
	return car.price;
})
console.log('es6 map方法实现场景2');
console.log(d); // [CHEAP,expensive]
console.log('');


// 打印d数组中的每一个值
console.log('es6 forEach方法打印d数组中的每一个值');
d.forEach(function(i){
	console.log(i);
})
console.log('');
