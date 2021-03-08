<template>
  <div>
    <h1>1. 普通插槽</h1>
    <Slot1>
      <h3>{{msg}}</h3>
      abc
    </Slot1>

    <h1>2. 命名插槽(named slot)</h1>
    <Slot2>
      <h1 slot="two">{{msg}}</h1>
      <h2 slot="one">{{msg}}</h2>
      <h3>xxxx</h3>
    </Slot2>
    <hr>
    <Slot2>
      <p slot="two">{{msg}}</p>
      <p slot="one">{{msg}}</p>
    </Slot2>

    <h1>3. 作用域插槽(scoped slots)</h1>

    <!-- 
      作用域slot使用？
        1.数据在子组件
        2.子组件要显示的部分界面由父组件指定
        3.父组件指定界面结构，需要知道子组件的数据

        子 ==> 父 ：传递数据
        父 ==> 子 : 传递标签
        标签由数据决定

      一般slot
        父组件需要传递的标签由自己的数据就可以决定
     -->

    <Slot3>
      <!-- slotProps是保存<slot>的所有属性 -->
      <template slot-scope="slotProps">   <!-- 接收子组件传递的slot数据：在slotProps对象中 -->
        <span v-if="slotProps.todo.isComplete">{{slotProps.todo.text}}++</span>
      </template>
    </Slot3>

    <Slot3>
      <!-- slotProps是保存<slot>的所有属性 -->
      <template slot-scope="slotProps">
        <span v-if="slotProps.todo.isComplete" style="color: red">{{ slotProps.todo.text }}</span>
      </template>
    </Slot3>


  </div>
</template>

<script type="text/ecmascript-6">
  import Slot1 from './Slot1.vue'
  import Slot2 from './Slot2.vue'
  import Slot3 from './Slot3.vue'
  export default {
    name: 'SlotTest',
    data () {
      return {
        msg: 'atguigu'
      }
    },
    components: {
      Slot1,
      Slot2,
      Slot3
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
