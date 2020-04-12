/**
 * some 英语翻译为一些,every翻译为所有,每个，所以some方法 只要其中一个为true 就会返回true的，
 * 相反，every（）方法必须所有都返回true才会返回true，哪怕有一个false，就会返回false；
 * every（）和 some（）目的：确定数组的所有成员是否满足指定的测试
 * Every: 一假即假
 * Some: 一真即真
*/

/** 场景1 
 * 计算对象数组中每个电脑操作系统是否可用
 * 大于16位操作系统表示可用,否则不可用
*/
var computers = [
	{ name: "Apple", ram: 8 },
	{ name: "IBM", ram: 4 },
	{ name: "Acer", ram: 32 }
];

var everya = true;
var someb = false;

// es5 方法实现场景1
for (let i = 0; i < computers.length; i++) {
	let computer = computers[i];
	if (computer.ram < 16) {
		everya = false;
	} else {
		someb = true;
	}
}
console.log('es5 方法实现场景1');
console.log(everya);
console.log(someb);
console.log('');


/** 
 * Every: 一假即假
 * Some: 一真即真
*/

// es6 方法实现场景1 every(这里的是迭代器函数)和some(这里的是迭代器函数)
var every = computers.every(function (computer) {
	// 如果条件第一个就为假，就不会继续向下进行了
	// name: "Apple", ram: 8 不大于 16 所以为假，立即结束
	return computer.ram > 16;
})
var some = computers.some(function (computer) {
	return computer.ram > 16;
})

console.log('es6 方法实现场景1');
console.log(every);
console.log(some);
console.log('');


/** 场景2
 * 假定有一个注册页面,判断所有input内容的长度是否大于0
 *
*/

// 定义函数Field接收value
function Field(value) {
	// value等于传过来的value
	this.value = value;
}
// 给Field函数扩展一个方法
Field.prototype.validate = function () {
	// 长度大于0返回true
	return this.value.length > 0;
}
var username = new Field("henrywu");
var telephone = new Field("18888888888");
var password = new Field("my_password");


// es5 实现场景2
console.log('es5 实现场景2');
console.log(username.validate() && telephone.validate() && password.validate());
console.log('');


// es6 实现场景2
var fields = [username, telephone, password];
var formIsValid = fields.every(function (field) {
	return field.validate();
})
console.log('es6 实现场景2');
console.log(formIsValid);
console.log('');

// 实现一些逻辑
if (formIsValid) {
	// 注册成功
} else {
	// 给用户一个友善的错误提醒
}







