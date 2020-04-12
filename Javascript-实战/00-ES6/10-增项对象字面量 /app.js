/**
 *  增强对象字面量
 *  解决的问题: 缩减代码
 *  
 */

// new Object(); {} // 写一个对象{}就是增强对象字面量，减少代码
// new Array(); [] // 写一个对象[]就是增强对象字面量，减少代码

// es5正常写法
function createBookShop(inventory) {
	return {
		inventory:inventory,
		// 图书价格总和
		inventoryValue:function() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		// 单个图书价格
		priceForTitle:function(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	}
}

// es6 增强对象字面量，代码简化
function createBookShop(inventory) {
	return {
		inventory,
		// 图书价格总和
		inventoryValue() {
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		// 单个图书价格
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price;
		}
	}
}

const inventory = [
	{ title: "Vue", price: 10 },
	{ title: "Angular", price: 15 }
];
const bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue()); // 25
console.log(bookShop.priceForTitle("Angular")); // 15





// es5 写法
function saveFile(url, data) {
	$.ajax({
		method: "POST",
		url: url,
		data: data
	});
}

// es6 增强对象字面量 减少代码
// es5 写法
function saveFile(url, data) {
	$.ajax({
		method: "POST",
		url,
		data
	});
}

const url = "http://fileupload.com";
const data = { color: "red" };

saveFile(url, data);


















