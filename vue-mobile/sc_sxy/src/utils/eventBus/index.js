import Vue from 'Vue'
export default new Vue

var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $EventBus: {
        get: function () {
            return EventBus
        }
    }
})