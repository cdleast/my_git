/** 场景1
 * 
 * 假定有一个对象数组(a),获取(a)数组中指定类型的对象放到(b)数组中 
 */
var a = [
	{ name: "cucumber", type: "vegetable" },
	{ name: "banana", type: "fruit" },
	{ name: "celery", type: "vegetable" },
	{ name: "orange", type: "fruit" }
];


// es5 方法实现场景1
var b = [];
for (let i = 0; i < a.length; i++) {
	if (a[i].type === "fruit") {
		b.push(a[i]);
	}
}
console.log('es5 方法实现场景1');
console.log(b);
console.log('');


// es6 filter 实现场景1 filter(里面的是一个迭代器函数)
// product形参 拿到数组 a 中的每一个对象
var filtered = a.filter(function (product) {
	// 返回每一个对象中type类型 === vegetable 的对象
	return product.type === "vegetable";
})
console.log('es6 filter 方法实现场景1');
console.log(filtered);
console.log('');


/** 场景2
 * 
 * 假定有一个对象数组(c),过滤掉不满足以下条件的对象
 * 条件: 类型为蔬菜,数量大于0,价格小于10
 */
var c = [
	{ name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
	{ name: "banana", type: "fruit", quantity: 10, price: 16 },
	{ name: "celery", type: "vegetable", quantity: 30, price: 8 },
	{ name: "orange", type: "fruit", quantity: 3, price: 6 }
];


// es5 方法实现场景2
var d = [];
for (let i = 0; i < c.length; i++) {
	if (c[i].type === 'vegetable' && c[i].quantity > 0 && c[i].price < 10) {
		d.push(c[i]);
	}
}
console.log('es5 方法实现场景2');
console.log(d);
console.log('');


// es6 filter 方法实现场景2
var products = c.filter(function (product) {
	return product.type === "vegetable"
		&& product.quantity > 0
		&& product.price < 10
})
console.log('es6 filter 方法实现场景2');
console.log(products);
console.log('');


/** 场景3
 * 
 * 假定有两个数组(A,B),根据(A)中id值,过滤掉(B)数组不符合的数据
 */
var post = { id: 4, title: "Javascript" };

var comments = [
	{ postId: 4, content: "Angular4" },
	{ postId: 2, content: "Vue.js" },
	{ postId: 3, content: "Node.js" },
	{ postId: 4, content: "React.js" },
];

// commentsForPost(这里的参数是上面的post对象和comments数组)
function commentsForPost(post, comments) {
	// comments数组使用filter方法，拿到每一个对象comment
	return comments.filter(function (comment) {
		// 返回，满足条件(comment对象里的postId等于post对象里的id的)的对象
		return comment.postId === post.id;
	})
}
console.log('es6 filter 方法实现场景3');
console.log(commentsForPost(post, comments));
console.log('');
