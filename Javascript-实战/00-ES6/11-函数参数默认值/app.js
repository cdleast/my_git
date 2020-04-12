/**
 *  函数参数默认值
 *  优化代码
 *  
 */

// 举例
// function makeAjaxRequest(url,method){
//   if(!method){
//     method = "GET";
//   }
//   return method;
// }


// 函数参数默认值 method = "GET"，如果给传参就是post，如果不传就是get
function makeAjaxRequest(url, method = "GET") {
	return method;
}
console.log(makeAjaxRequest("google.com"));
console.log(makeAjaxRequest("google.com","POST"));



// 函数参数默认值实现场景
function User(id) {
	this.id = id;
}
// console.log(new User(1));

function randomId() {
	return Math.random() * 99999999;
}
// console.log(new User(randomId()));

// 创建用户方法 每次创建用户都传一个id默认值
function createAdminUser(user = new User(randomId())) {
	user.admin = true;
	return user;
}

const user = new User(2);

console.log(createAdminUser());
















