module.exports = {
    transpileDependencies: ['vue-clamp', 'resize-detector'],
    css: {
        sourceMap: true, // 开启 CSS source maps?
    },
    devServer: {
        open: true, // 是否在 npm run serve 自动打开浏览器
        host: '127.0.0.1', // 本地主机名字
        port: 8080, // 端口号
        proxy: { // 开发环境代理配置
            // '/dev-api': {
            [process.env.VUE_APP_BASE_API]: {
                // 目标服务器地址，代理访问 http://localhost:8001
                target: process.env.VUE_APP_SERVICE_URL,
                changeOrigin: true, // 开启代理服务器，
                pathRewrite: {
                    // 将 请求地址前缀 /dev-api 替换为 空的，
                    // '^/dev-api': '',
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    }
};
