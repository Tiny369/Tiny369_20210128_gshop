import Vue from 'vue'
import 'lib-flexible'
import './validate'

import App from './App.vue'
import router from './router/index.js'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import store from './vuex/store.js'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import * as API from './api/index.js'
import i18n from './i18n'
import './mock/mock_server.js'
import loading from './common/images/loading.gif'

Vue.use(VueLazyload, {
    /* preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1 */
    loading     // 在要显示的图片没有加载到前显示
})  // 内部定义一个全局指令: 1azy

//取消生产环境的提示
Vue.config.productionTip = false
//注册全局组件
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)
Vue.component(Button.name, Button)  //  mt-button

// 将包含所有接口请求函数方法的对象保存到Vue原型对象上
Vue.prototype.$API = API

new Vue({
    // components:{
    //     App
    // },
    // template:'<App />'   //在脚手架3版本里 必须去vue.config.js配置，runtimeCompiler可支持编译为true
    render:h => h(App),

    //配置router，所有组件都能看到$router和$route,路由器和路由  <router-link>和<router-view/>
    router,

    i18n,

    // 所有组件都能看到: $store
    store
}).$mount('#app')