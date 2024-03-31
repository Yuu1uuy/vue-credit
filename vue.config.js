const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://124.223.69.156:6300/',
          changeOrigin: true,
          //后端请求并没有api所以要去掉
          pathRewrite: { '^/api': '' }
        }
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
      minimize: true,
      usedExports: true, // 告诉 webpack 使用了哪些导出的模块
      sideEffects: true, // 标记副作用，用于进一步优化
    }
  },


})