const path = require('path')    //用于解析路径相关信息的模块
const px2rem = require('postcss-px2rem')  //postcss的一个插件
// //配置postcs-px2rem
// const postcss =px2rem({
//     remUnit: 37.5       //基准大小basesize,等分的比例同页面rem的比例是一致的
// })

// vue.config.js
module.exports = {
    //只能写vue封装的配置

    runtimeCompiler:true,   //支持 template:'<App />' 编译  但是会多出10多Kb
    // lintOnSave:false,     //关闭Eslint规则
    css: {//添加postcss配置
        loaderOptions: {
          postcss: {
            plugins:[
                px2rem({
                    remUnit: 37.5   //设计稿等分后的rem值  375/10
                })
            ]
          }
        }
    },

    //内部写webpack原生配置
    configureWebpack:{
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
            alias: { // 路径别名(简写方式)
            //   'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配  带vue编译器
              '@':path.resolve(__dirname,'src'),  //Blogs.vue
              '@components':path.resolve(__dirname,'src/components'), //App.vue
            }
        },
    },

    // 代理配置
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000', // 转发的目标地址
                pathRewrite: {
                    '^/api' : ''  // 转发请求时去除路径前面的/api
                },
                changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
            },
            '/gh': {
                target: 'https://api.github.com', // 转发的目标地址
                pathRewrite: {
                    '^/gh' : ''  // 转发请求时去除路径前面的/api
                },
                changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
            },
        },
        open: true, // 自动打开浏览器
    },

    pluginOptions: {
      i18n: {
        locale: 'zh_CN',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
}

