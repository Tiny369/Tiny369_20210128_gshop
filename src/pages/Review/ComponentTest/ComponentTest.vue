<template>
  <div>
    <h1>动态组件</h1>
    <button @click="toggle">切换</button>
    <component :is="currentComp"></component>
    <br /><br />
    

    <h1>缓存组件</h1>
    <keep-alive>
        <component :is="currentComp"/>
    </keep-alive>
    <br /><br />

    <h2>异步组件</h2>
    <async-component1 />
    <async-component2 />
    <async-component3 />
    <async-component4 />
    
    
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import DynamicComponent from './DynamicComponent'
import DynamicComponent2 from './DynamicComponent2'

// 定义全局组件为一个异步工厂函数
Vue.component('async-component1',function (resolve) {
    
    setTimeout(function (){
        // 将组件定义对象(component definition)传递给 resolve 回调函数
        resolve({       
            // test ---> vue.config.js ---> runtimeCompiler:true,  
            template:'<div>I am async!</div>'
        })
    }, 1000);
})

Vue.component('async-component2',function (resolve) {
    setTimeout(function (){
        // 这个特殊的 require 语法
        // 将指示 webpack 自动将构建后的代码，
        // 拆分到不同的 bundle 中，然后通过 Ajax 请求加载。
       require(['./AsyncComponent1.vue'],resolve)
    }, 2000);
})

Vue.component('async-component3',
    // `import` 函数返回一个 Promise.
    /* () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                import('./AsyncComponent2').then(resolve)
            },3000)
        })
    } */
    (resolve) =>{
        setTimeout(() => {
            import('./AsyncComponent2').then(resolve)
        }, 3000);
    }
    // () => import('./AsyncComponent2')
)

  export default {
    data() {
        return {
            currentComp:'DynamicComponent'
        }
    },
    components:{
        DynamicComponent,
        DynamicComponent2,
        'async-component4': () => import('./AsyncComponent2')    // 局部异步组件
    },
    methods:{
        toggle (){
            this.currentComp = (this.currentComp === 'DynamicComponent' ? 'DynamicComponent2' : 'DynamicComponent')
        }
    },
  }
</script>

<style scoped> 

</style>
