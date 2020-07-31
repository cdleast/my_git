// 1、引入文件系统模块
var fs = require('fs')

// 2、通过对象调用方法
// var readme = fs.readFileSync('readme.txt', 'utf8'); // 同步读取
// console.log(readme)

// 把readme的内容写入write.txt
// fs.writeFileSync('write.txt', readme) // 同步写入


// 异步效率高还没有阻塞问题

// 不用Sync就是异步读写
// fs.readFile('readme.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// 异步写入
fs.readFile('readme.txt', 'utf8', function (err, data) {
    if (err) throw err;
    fs.writeFile('input.txt', data, (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
});





// 先打印1就是异步读取成功
// console.log(1)