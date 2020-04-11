const outputDir = process.env.outputDir || 'docs'

/* eslint-disable */
const output = process.env.NODE_ENV === 'production' ? {} : {
  filename: './static/js/[name].[hash:8].js',
  chunkFilename: './static/js/chunk-[name][contenthash].js'
}
/* eslint-disable */

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // publicPath: process.env.NODE_ENV === 'production' ? '': '/app/',
  outputDir,
  configureWebpack: {
    output,
    //关闭 webpack 的性能提示
    // performance: {
    //   hints:false
    // },
    // 或者 警告 webpack 的性能提示
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