/**
 *  箭头函数
 *  解决的问题
 *  1. 缩减代码
 *  2. 改变this指向
 */

// es5 原本写函数方式
const double1 = function (number) {
	return number * 2;
}


// es6 箭头函数缩减代码1
const double2 = (number) => {
	return number * 2;
}


// es6 箭头函数缩减代码2 - 继续优化 - 如果有返回值就不用写return了，它会自动给返回回去
const double3 = (number) => number * 2;


// es6 箭头函数缩减代码3 - 继续优化 - 如果就一个参数的话
const double4 = number => number * 2;


// es6 箭头函数 - 这块可以用括号括起来，但是括号里面不能写分号
const double5 = (number => number * 2);


// es6 箭头函数 - 如果有两个形参必须用括号把两个形参括起来
const double6 = (number, number2) => number + number2;


// es6 箭头函数 - 多条语句的时候需要用{}括起来
const double = (number, number2) => {
	sum = number + number2
	return sum;
}
//  console.log(double(20,20));


// map一个数组,让数组中的值以double形式展现
const numbers = [1, 2, 3];
var newNumbers = numbers.map(number => number * 2);

// console.log(newNumbers);


// 改变this指向
const team1 = {
	members: ["Henry", "Elyse"],
	teamName: "es6",
	teamSummary: function () {
		let self = this;
		return this.members.map(function (member) {
			// this进入map之后不知道该指向谁了
			return `${member}隶属于${self.teamName}小组`;
		})
	}
}

const team2 = {
	members: ["Henry", "Elyse"],
	teamName: "es6",
	teamSummary: function () {
		return this.members.map(function (member) {
			return `${member}隶属于${this.teamName}小组`;
		// 使用bind给members在调用map方法的时候把this绑定给它
		}.bind(this)) 
	}
}

// es6 箭头函数改变this指向
// 使用箭头函数，this指向当前函数之上的那一个对象
const team = {
	members: ["Henry", "Elyse"],
	teamName: "es6",
	teamSummary: function () {
		return this.members.map((member) => {
			return `${member}隶属于${this.teamName}小组`;
		})
	}
}

console.log(team.teamSummary());



















