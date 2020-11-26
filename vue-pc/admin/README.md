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

### 11、进度条插件 nprogress

- npm install --save nprogress

### 12、解决 vue 只能有一个根组件的限制，不想用无用的容器污染 DOM 或想一次返回许多元素时 vue-fragment

```
- npm install --save vue-fragment
- main.js引入
- import Fragment from 'vue-fragment'
- Vue.use(Fragment.Plugin)
- 使用的时候fragment标签放在最外层即可
```

### 13、导出导入 Excel

```
- npm install file-saver -S // 文件保存器
- npm install xlsx -S // 各种电子表格格式的解析器和编写器
- npm install script-loader -S -D // 脚本加载器
— vendor文件夹下的Export2Excel.js和Export2Zip.js文件
// 数据定义
data(){
    return {
        downloadLoading: false, // 导出报表Loading
        filename: '', // 导出文件名
        autoWidth: true, // 单元格是否自动宽度
        bookType: 'xlsx' // 导出文件类型
    }
}

// 导出报表
handleDownload() {
    this.downloadLoading = true
    import('@/vendor/Export2Excel').then(excel => {
        // 导出数据头
        const tHeader = ['时间', '名字', '地址']
        // 导出具体的数据要求
        const filterVal = ['date', 'name', 'address']
        // 导出特定数据
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename,
            autoWidth: this.autoWidth,
            bookType: this.bookType
        })
        this.downloadLoading = false
    })
},

// 格式转换
formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => {
        // 判断有时间字段的时候进行时间格式化
        if (j === 'timestamp') {
            // return parseTime(v[j])
        } else {
            return v[j]
        }
    }))
},
```

### 14、轻量级时间插件 date-fns

```
- npm install date-fns --save
- import format from 'date-fns/format'
- const date = format(new Date(), 'yyyy-MM-dd')
```

### 15、轻量级时间插件 moment

```
- npm install moment --save
```
