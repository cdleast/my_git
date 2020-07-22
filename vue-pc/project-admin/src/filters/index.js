import Vue from 'vue'
import Moment from 'moment'
Moment.suppressDeprecationWarnings = true

/*
 * 过滤器对将要显示的文本，先进行特定格式化处理，然后再进行显示
 * 注意:过滤器并没有改变原本的数据, 只是产生新的对应的数据
 * contentFilter：过滤器名称
 * value：过滤传入的值
*/

/**
 * 过滤敏感字符
*/
Vue.filter('contentFilter', (value) => {
    // 判断如果为空，就返回空值
    if (!value) {
        return '';
    }
    return value.toString().toUpperCase().replace('TMD', '***').replace('SB', '**');
})


/**
 * 时间过滤器
 * Moment 是时间格式化组件
 * <p>{{Time | comverTime('YYYY-MM-DD')}}</p>
 * <!-- 输出结果 2019年09月05日-->
 * <p>{{Time | comverTime('YYYY-MM-DD HH:mm:ss')}}</p>
 * <!-- 输出结果 2019-09-05 10:13:43-->
 * Time 值为：Thu, 05 Sep 2019 02:34:52 GMT
*/
Vue.filter('comverTime', (data, format) => {
    return Moment(data).format(format);
});


/**
 * 金钱过滤 ¥xx.xx
*/
Vue.filter('moneyFormat', (value) => {
    return '¥' + Number(value).toFixed(2);
})
