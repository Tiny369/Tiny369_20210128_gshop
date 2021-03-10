<template>
  <div>
    <h2>Event2组件</h2>
    <button @click="$emit('click',123)">分发自定义click事件</button><br>
    <button @click="$emit('xxx','tinyFiting')">分发自定义xxx事件</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>

 
</style>
