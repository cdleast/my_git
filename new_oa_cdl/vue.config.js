module.exports = {
    transpileDependencies: ['vue-clamp', 'resize-detector'],
    css: {
        sourceMap: true, // 开启 CSS source maps?
    },
    devServer: {
        open: true, // 是否在 npm run serve 自动打开浏览器
        host: '127.0.0.1', // 本地主机名字
        port: 8081, // 端口号
        proxy: { // 配置跨域
            '/api': {
                target: 'http://mengxuegu.com:7300/mock/5e96ecb82a2f716419f88b66/new-oa', // 请求接口地址
                ws: true, // 是否跨域
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''  // 重新配置名字
                }
            }
        }
    }
};
