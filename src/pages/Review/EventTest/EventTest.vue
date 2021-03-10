<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试原生事件</button>

    <hr>    <!-- 组件标签 自定义事件 添加.native为原生事件 -->
    <Event1 @click.native="test2"></Event1>

   <hr>
    <Event2 @click="test3" @xxx="test4"></Event2>

  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1'
import Event2 from './Event2'
  export default {
    methods: {
        test1 (){
           alert('test1()')
        },
        test2 (){
           alert('test2()')
        },

        test3 (data){
           alert('test3() '+ data)
        },
        test4 (data){
           alert('test4() '+ data)
        },
    },
    components:{
        Event1,
        Event2
    }
  }
</script>

<style scoped>

 
</style>
