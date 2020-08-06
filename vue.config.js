module.exports = {
  lintOnSave: false, // 未开启ESlint，process.env.NODE_ENV !== 'production'
  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": {
        target: "1.1.1.1",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api/": ""
        }
    }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-app/': '/',
  configureWebpack: {
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }
  },
  css: {
    // 启用 CSS modules
    requireModuleExtension: true,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
  },
}