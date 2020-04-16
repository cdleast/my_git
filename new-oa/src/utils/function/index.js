export default {
    install(Vue) {
        Vue.prototype.getToken = function () {
            alert('每次进入的时候调用全局方法函数，getToken')
        };


        /*
            把一个数组分成多个小数组
            let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12];;
            let groupedArray = group(numberArray, 5);
        */
        Vue.prototype.group = function (array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while (index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        }


        /*
            转换货币格式
        */
        Vue.prototype.formatMoney = function (number) {
            return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        }


        /*
            生成随机数
        */
        Vue.prototype.randomID = function () {
            return Math.floor(Math.random() * 100000000);
        }
    }
}