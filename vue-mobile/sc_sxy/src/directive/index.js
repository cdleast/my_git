import Vue from 'vue'
/*
    第一个参数为指令名，但不要有v-开头
    el：是当前指令左右的那个Dom元素
    binding：用于获取使用了当前指令的绑定值(value)、表达式(expression)、指令名(name)
    bind：一般对样式的操作都在bind中，bind钩子函数只调用一次
    inserted：一般对js的操作在inserted中，inserted钩子函数只调用一次
*/

// 将所以字母文本内容转换为大写，并改变颜色
Vue.directive('upper-text', {
    bind(el) {
        el.style.color = 'green';
    },
    inserted(el, binding) {
        el.innerHTML = binding.value.toUpperCase();
        // el.innerHTML = binding.expression.toUpperCase();
        // el.innerHTML = binding.name.toUpperCase();
    }
})


// 页面加载时，自动获取焦点
Vue.directive('focus', {
    // 第一次调用的时候聚焦
    inserted(el) {
        el.focus();
    },
    // 元素有更新的时候也聚焦，比如切换编辑状态的时候
    update(el){
        el.focus();
    }
})


// 颜色随机变换，每次刷新颜色值都会改变
Vue.directive('rainbow', {
    bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
})
