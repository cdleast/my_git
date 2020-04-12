/** 场景1
 * 
 * 假定有一个对象数组(users),找到符合条件(name==='Alex')的对象
 */
var users = [
	{ name: "Jill" },
	{ name: "Alex", id: 2 },
	{ name: "Bill" },
	{ name: "Alex" }
];

// es5 方法实现场景1
var user;
for (var i = 0; i < users.length; i++) {
	if (users[i].name === "Alex") {
		user = users[i];
		// 因为Alex是在数组中第二个位置，但是循环后面的还是会走，所以使用break找到之后停止循环
		break;
	}
}
console.log('es5 方法实现场景1')
console.log(user);
console.log('');


// es6 find 方法实现场景1 find(这里是迭代器函数)
user = users.find(function (user) {
	// 只会找到第一次出现的Alex
	return user.name === "Alex";
})
console.log('es6 find 方法实现场景1');
console.log(user);
console.log('');



/** 场景2
 * 
 * 假定有一个对象数组(posts),根据指定对象的条件找到数组中符合条件的对象
 */
var posts = [
	{ id: 1, title: "Node.js" },
	{ id: 2, title: "React.js" }
];
var comment = { postId: 1, content: "Hello World!" };

// 查找posts下对象id和comment下对象id一致返回
function postForComment(posts, comment) {
	return posts.find(function (post) {
		return post.id === comment.postId;
	})
}
console.log('es6 find 方法实现场景2');
console.log(postForComment(posts, comment));
console.log('');