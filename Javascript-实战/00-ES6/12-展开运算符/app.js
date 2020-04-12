/**
 *  spread operator 展开运算符
 *  更快,更便捷的操作数组
 *  
 */

//  正常的时候计算数值
//  function addNumbers(numbers){
//   return numbers.reduce((sum,number) => {
//     return sum + number;
//   },0)
//  }
//  const numbers = [1,2,3,4,5];
//  console.log(addNumbers(numbers));


// 使用数组接收参数
//  function addNumbers(a,b,c,d,e){
//   var numbers = [a,b,c,d,e];
//   return numbers.reduce((sum,number) => {
//     return sum + number;
//   },0)
//  }
//  console.log(addNumbers(1,2,3,4,5));



// 使用展开运算符
function addNumbers(...numbers) {
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0)
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8));



// 替代掉push方法
var defaultColors = ["red", "greed"];
var favoriteColors = ["orange", "yellow"];

// concat 进行数组拼接
// defaultColors = defaultColors.concat(favoriteColors);
// console.log(defaultColors);

// 使用展开运算符
// console.log([...defaultColors,...favoriteColors]);


var fallColors = ["fire red", "fall orange"];
// console.log([...fallColors,...defaultColors,...favoriteColors]);
// console.log(["blue","green",...fallColors,...defaultColors,...favoriteColors]);


// 练习 检查对应商店的库存，看是否有某个东西，如果没有就加入进去
function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
		return ["milk", ...items];
	}
	return items;
}
console.log(validateShoppingList("orange", "bread", "eggs"));




















