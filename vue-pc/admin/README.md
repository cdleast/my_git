# admin - 使用配置

#### 01、Element-UI 主题框架

- npm i element-ui -S

### 02、axios 前后端交互请求

- npm i axios -S

### 03、解决 ie9 不支持 es6 语法的问题

- npm i babel-polyfill -S
  import "babel-polyfill"

### 04、支持 ES6 语法=> 箭头函数可能会报 promise 错误

```
- npm i es6-promise -S
- import promise from "es6-promise"
- promise.polyfill()
```

### 05、可视化图标插件 ECharts

- npm install echarts -S

### 06、数字滚动插件 vue-count-to

- npm i vue-count-to -S

### 07、存储 Cookie 插件

- npm i js-cookie -S

### 08、CSS3 动画库 animate.css

```
- npm i animate.css -S
- main.js 引入
- import 'animate.css'
- 使用 animate__animated animate__动画名称
- animate__animated 必须要写，其他的动画名称前面加animate__
```

### 09、基于 Vue 的 markdown 编辑器

- npm install mavon-editor -S

### 10、持久化存储 state 的 vuex 扩展

```
- npm i vuex-along -S // 安装
- import createVuexAlong from 'vuex-along' // 引入
- import tagsView from './modules/tagsView' // 快捷导航模块
export default new Vuex.Store({
    modules: {
        settings, user, sidebar, tagsView
    },
    plugins: [createVuexAlong({
        name: "visitedViews", // 保存的集合名字
        local: {
            list: ["tagsView"] // 保存tagsView模块的数据
        },
    })]
})

- npm install --save vuex-persistedstate
- import createPersistedState from 'vuex-persistedstate'
export default new Vuex.Store({
    modules: {
        settings, user, sidebar, tagsView
    },
    plugins: [createPersistedState()]
})
```

### 11、进度条插件

- npm install --save nprogress
