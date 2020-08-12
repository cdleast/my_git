### 1、遍历A节点的父节点下的所有子节点

* 这题考查原生的js操作dom,属于非常简单的基础题，但长时间使用mvvm框架，可能会忘记

```js
<script>
    var b = document.getElementById("a").parentNode.children;
    console.log(b)
</script>
```

### 2、用js递归的方式写1到100求和？

* 递归我们经常用到，vue在实现双向绑定进行数据检验的时候用的也是递归，但要我们面试的时候手写一个递归，如果对递归的概念理解不透彻，可能还是会有一些问题。

```js
function add(num1,num2){
    var num = num1+num2;
    if(num2+1>100){
        return num;
    }else{
        return add(num,num2+1)
    }
 }
var sum =add(1,2);
```

### 3、说一下CORS？

* CORS是一种新标准，支持同源通信，也支持跨域通信。fetch是实现CORS通信的

### 4、如何中断ajax请求？

* 一种是设置超时时间让ajax自动断开，另一种是手动停止ajax请求，其核心是调用XML对象的abort方法，ajax.abort()

### 5、说一下事件代理？

* 事件委托是指将事件绑定到目标元素的父元素上，利用冒泡机制触发该事件

```js
ulEl.addEventListener('click', function(e){
    var target = event.target || event.srcElement;
    if(!!target && target.nodeName.toUpperCase() === "LI"){
        console.log(target.innerHTML);
    }
}, false);
```

### 6、target、currentTarget的区别？

* currentTarget当前所绑定事件的元素
* target当前被点击的元素

### 7、export和export default的区别？

* 使用上的不同

```js
export default  xxx
import xxx from './'

export xxx
import {xxx} from './'
```

### 8、说一下自己常用的es6的功能？

* 像module、class、promise等，尽量讲的详细一点。

### 9、什么是会话cookie,什么是持久cookie?

* cookie是服务器返回的，指定了expire time（有效期）的是持久cookie,没有指定的是会话cookie

### 10、数组去重？

```js
var arr = ['12', '32', '89', '12', '12', '78', '12', '32'];
// 最简单数组去重法
function unique1(array) {
    var n = []; //一个新的临时数组
    for (var i = 0; i < array.length; i++) { //遍历当前数组
        if (n.indexOf(array[i]) == -1)
            n.push(array[i]);
    }
    return n;
}
arr = unique1(arr);
// 速度最快， 占空间最多（空间换时间）
function unique2(array) {
    var n = {}, r = [], type;
    for (var i = 0; i < array.length; i++) {
        type = typeof array[i];
        if (!n[array[i]]) {
            n[array[i]] = [type];
            r.push(array[i]);
        } else if (n[array[i]].indexOf(type) < 0) {
            n[array[i]].push(type);
            r.push(array[i]);
        }
    }
    return r;
}
//数组下标判断法
function unique3(array) {
    var n = [array[0]]; //结果数组
    for (var i = 1; i < array.length; i++) { //从第二项开始遍历
        if (array.indexOf(array[i]) == i)
            n.push(array[i]);
    }
    return n;
}
```

* es6方法

```js
// es6方法数组去重
arr = [...new Set(arr)];
// es6方法数组去重，第二种方法
function dedupe(array) {
    return Array.from(new Set(array));       //Array.from()能把set结构转换为数组
}
```

### 11、get、post的区别

* get传参方式是通过地址栏URL传递，是可以直接看到get传递的参数，post传参方式参数URL不可见，get把请求的数据在URL后通过？连接，通过&进行参数分割。psot将参数存放在HTTP的包体内
* get传递数据是通过URL进行传递，对传递的数据长度是受到URL大小的限制，URL最大长度是2048个字符。post没有长度限制
* get后退不会有影响，post后退会重新进行提交
* get请求可以被缓存，post不可以被缓存
* get请求只URL编码，post支持多种编码方式
* get请求的记录会留在历史记录中，post请求不会留在历史记录
* get只支持ASCII字符，post没有字符类型限制

### 12、你所知道的http的响应码及含义？

##### 1xx(临时响应)

* 100: 请求者应当继续提出请求。
* 101(切换协议) 请求者已要求服务器切换协议，服务器已确认并准备进行切换。

##### 2xx(成功)

* 200：正确的请求返回正确的结果
* 201：表示资源被正确的创建。比如说，我们 POST 用户名、密码正确创建了一个用户就可以返回 201。
* 202：请求是正确的，但是结果正在处理中，这时候客户端可以通过轮询等机制继续请求。

##### 3xx(已重定向)

* 300：请求成功，但结果有多种选择。
* 301：请求成功，但是资源被永久转移。
* 303：使用 GET 来访问新的地址来获取资源。
* 304：请求的资源并没有被修改过

##### 4xx(请求错误)

* 400：请求出现错误，比如请求头不对等。
* 401：没有提供认证信息。请求的时候没有带上 Token 等。
* 402：为以后需要所保留的状态码。
* 403：请求的资源不允许访问。就是说没有权限。
* 404：请求的内容不存在。

##### 5xx(服务器错误)

* 500：服务器错误。
* 501：请求还没有被实现。

