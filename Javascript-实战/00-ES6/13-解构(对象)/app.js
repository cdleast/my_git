/**
 *  解构
 *  更快,更便捷
 *  
 */


var expense = {
	type: "es6",
	amount: "45"
};
// es5 正常拿属性值
// var type = expense.type;
// var amount = expense.amount;
// console.log(type, amount);


// es6 解构操作 解构对象里没有的属性(abc) 返回 undefined
const { type, amount, abc } = expense;
console.log(type, amount, abc);


var saveFiled = {
	extension: "jpg",
	name: "girl",
	size: 14040
};
// es5
// function fileSammary(file){
//   return `${file.name}.${file.extension}的总大小是${file.size}`;
// }


// 使用解构方式
function fileSammary({ name, extension, size }) {
	return `${name}.${extension}的总大小是${size}`;
}

console.log(fileSammary(saveFiled));
































