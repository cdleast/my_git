// module 把 counter 放出去让其他文件可以使用
module.exports = {
    counter(arr) {
        return '一共有' + arr.length + '个元素在数组中'
    },

    adder(a, b) {
        return `您需要计算的两个值得和为：${a + b}`
    }
}