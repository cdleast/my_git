/**
 *  模板字符串
 */


// es5 拼接字符串
let element = '<h1>Hello Word es5 拼接字符串</h1><p>感谢大家收看我们的视频, ES6为我们提供了很多遍历好用的方法和语法!</p>'
document.getElementById('template1').innerHTML = element;




// es6 模板字符串 
// ${makeUppercase('es6 模板字符串')} 还可以传方法
let name = "Henry"; // 有变量
function makeUppercase(word) {
	return word.toUpperCase();
}
let template =
	`
  <h1>${makeUppercase('es6 模板字符串')}, ${name}!</h1>
  <p>感谢大家收看我们的视频, ES6为我们提供了很多遍历好用的方法和语法!</p>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;
document.getElementById('template2').innerHTML = template;















