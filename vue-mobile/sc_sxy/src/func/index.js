export default {
    install(Vue) {
        /**
         * 获取当前日期，并转换格式2020-20-20
         * 直接调用this.getNowFormatDate()
        */
        Vue.prototype.getNowFormatDate = function () {
            let date = new Date();
            let seperator1 = "-";
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            // 判断加不加0
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            let currentdate = year + seperator1 + month + seperator1 + strDate;
            return currentdate;
        }


        /**
         * 获取当前月的第一天
         * 直接调用this.getCurrentMonthFirst(data)
        */
        Vue.prototype.getCurrentMonthFirst = function (data) {
            let date = new Date(data);
            date.setDate(1);
            let month = parseInt(date.getMonth() + 1);
            let day = date.getDate();
            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            return date.getFullYear() + '-' + month + '-' + day + ' 00:00:00';
        }


        /**
         * 获取当前月的最后一天
         * 直接调用this.getCurrentMonthLast(data)
        */
        Vue.prototype.getCurrentMonthLast = function (data) {
            let date = new Date(data);
            let currentMonth = date.getMonth();
            let nextMonth = ++currentMonth;
            let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
            let oneDay = 1000 * 60 * 60 * 24;
            let lastTime = new Date(nextMonthFirstDay - oneDay);
            let month = parseInt(lastTime.getMonth() + 1);
            let day = lastTime.getDate();
            if (month < 10) {
                month = '0' + month
            }
            if (day < 10) {
                day = '0' + day
            }
            return date.getFullYear() + '-' + month + '-' + day + ' 23:59:00';
        }

        /**
         * 获取上个月的第一天
         * 直接调用this.getPrevMonthLast()
        */
        Vue.prototype.getPrevMonthLast = function () {
            let nowdays = new Date();
            let year = nowdays.getFullYear();
            let month = nowdays.getMonth();
            if (month == 0) {
                month = 12;
                year = year - 1;

            }
            if (month < 10) {
                month = '0' + month;
            }
            // let startDate = year + '-' + month + '-01 00:00:00';
            let startDate = year + '/' + month;
            return startDate;
        }


        /**
         * 获取上个月的最后一天
         * 直接调用this.getNextMonthLast()
        */
        Vue.prototype.getNextMonthLast = function () {
            let nowdays = new Date();
            let year = nowdays.getFullYear();
            let month = nowdays.getMonth();
            if (month == 0) {
                month = 12;
                year = year - 1;
            }
            if (month < 10) {
                month = '0' + month;
            }
            let myDate = new Date(year, month, 0);
            // let endDate = year + '/' + month + '/' + myDate.getDate() + ' 23:59:00';
            let endDate = year + '/' + month + '/' + myDate.getDate();
            return endDate;
        }

        /**
         * 删除数组中的NaN
        */
        Vue.prototype.deleteNaN = function (arr) {
            var res = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === arr[i]) {
                    res.push(arr[i]);
                }
            }
            return res;
        }


        /**
         * 把一个数组分成多个小数组
         * let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12];;
         * let groupedArray = group(numberArray, 5);
        */
        Vue.prototype.group = function (array, subGroupLength) {
            let index = 0;
            let newArray = [];
            while (index < array.length) {
                newArray.push(array.slice(index, index += subGroupLength));
            }
            return newArray;
        }


        /**
         * 转换货币格式
        */
        Vue.prototype.formatMoney = function (number) {
            return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        }


        /**
         * 生成随机数
        */
        Vue.prototype.randomID = function () {
            return Math.floor(Math.random() * 100000000);
        }


        /**
         * 判断内容是否为空
         * this.isEmpty(传入的内容)
        */
        Vue.prototype.isEmpty = function (value) {
            return (
                value === undefined ||
                value === null ||
                (typeof value === "object" && Object.keys(value).length === 0) ||
                (typeof value === "string" && value.trim().length === 0)
            );
        }


        /**
         * 转换文件大小KB格式
        */
        Vue.prototype.unitConverter = function (size) {
            size = +size;
            let KB = Math.pow(1024, 1);
            let MB = Math.pow(1024, 2);
            let GB = Math.pow(1024, 3);
            if (size < KB && size >= 0) {
                return `${size}B`;
            }
            if (size < MB && size >= KB) {
                return `${Math.ceil(size / KB)}KB`;
            }
            if (size < GB && size >= MB) {
                return `${Math.ceil(size / MB)}MB`;
            }
        }

    }
}