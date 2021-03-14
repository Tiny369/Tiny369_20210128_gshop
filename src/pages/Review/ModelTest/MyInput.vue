<template>
  <div>
      <!-- $event 原生对象 浏览器分发 -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['value']
  }
</script>

<style scoped>
    input {
      border: 1px solid red;
    }
 
</style>
