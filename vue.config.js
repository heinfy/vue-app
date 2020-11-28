'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 8087

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-app/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: port,
    overlay: {
      warnings: true,
      errors: true
    },
    // before方法：能够在其他所有的中间件之前执行自定义的中间件
    // before: require('./mock/mock-server.js'),
    proxy: {
      '/dev-api': {
        target: '1.1.1.1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev-api/': ''
        }
      }
    }
  },
  configureWebpack: {
    name: resolve('package.json'),
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  },
  chainWebpack(config) {
    // 它可以提高第一屏的速度，建议打开预加载
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // 当有很多页面时，会导致太多无意义的请求
    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
            // `runtime`必须与runtimeChunk名称相同。默认值为`runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // 仅包装最初依赖的第三方
                },
                mintUI: {
                  name: 'chunk-mintUI',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?mint-ui(.*)/ 
                },
                // elementUI: {
                //   name: 'chunk-elementUI', // split elementUI into a single package 将elementUI拆分为单个包
                //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app 权重需要大于libs和app，否则将打包成libs或app
                //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm 为了适应cnpm
                // },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules 可以自定义您的规则
                  minChunks: 3, //  minimum common number 最小公数
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
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
  }
}
