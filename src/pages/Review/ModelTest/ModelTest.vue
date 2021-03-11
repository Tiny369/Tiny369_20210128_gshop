<template>
  <div>
    <input type="text" v-model="name">
    <span>{{name}}</span>
    <br><br>
    <!-- 
      $event: 代表分发事件时传递的数据
      浏览器自动分发事件时, 会传递一个包含所有相关事件数据的对象(event)
    -->
    <input type="text" :value="name2" v-on:input="name2 = $event.target.value">
    <span>{{name2}}</span>
    <br><br>

    <MyInput v-model="name3"/>
    <span>{{name3}}</span>
    <br><br>

    <MyInput :value="name4" @input="handleInput2"/>
    <MyInput :value="name4" @input="name4=$event"/>
    <span>{{name4}}</span>

  </div>
</template>

<script type="text/ecmascript-6">
import MyInput from './MyInput'
  export default {
    data() {
        return {
            name:'tiny1',
            name2:'tiny22',
            name3:'tiny333',
            name4:'tiny4444',
        }
    },
    methods: {
        handleInput (event) { // 浏览器分发事件时, 指定的数据是event对象(包含所有相关数据)
            this.name2 = event.target.value
        },
        handleInput2 (value) { // 自定义事件监听, 接收什么数据是分发自定义事件时指定
            this.name4 = value
        }
    },
    components:{
        MyInput
    }
  }
</script>

<style scoped>
    input {
        border: 1px solid red;
    }
 
</style>
