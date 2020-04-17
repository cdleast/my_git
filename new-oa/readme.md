### 目录结构
```
|- src                                              // 项目主目录
    |- api                                          // 请求数据操作
        |- user.js                                  // 用户api

    |- assets                                       // 资源会被 webpack 编译
        |- images                                   // 公共图片文件夹

    |- components                                   // 组件文件夹
        |- global                                   // 全局组件
            |- login.vue                            // 登录组件
            |- register.vue                         // 注册组件
            |- nofind.vue                           // 404组件
            |- header.vue                           // 头部组件

    |- router                                       // 路由文件夹
        |- global                                   // 全局路由
        |- portal                                   // 个人门户路由
        |- proces                                   // 流程中心路由
        |— index.js                                 // 路由主文件

    |- store                                        // vuex文件夹
        |- modules                                  // vuex模块化
            |- user.js                              // 用户信息
        |- index.js                                 // vuex主文件

    |- utils                                        // 工具
        |- component                                // 全局注册组件
        |- request                                  // 封装请求文件
        |- directive                                // 自定义指令
        |- filters                                  // 过滤器
        |- function                                 // 方法函数

    |- view                                         // 页面文件夹
        |- portal                                   // 个人门户
        |- proces                                   // 流程中心

    |- App.vue                                      // 根组件
    |- main.js                                      // 项目的核心配置文件

|- node_modules                                     // 模块文件夹
|- public                                           // 静态资源不经过 webpack 编译
|- .env.production                                  // 生产环境配置
|- .env.development                                 // 开发环境配置
|- babel.config.js                                  // webpack配置文件
|- package.json                                     // npm依赖项
|- vue.config.js                                    // cli配置问题
```