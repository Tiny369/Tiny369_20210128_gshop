<template>
  <div>
      <!-- exclude申明的组件不会被缓存 -->
      <keep-alive exclude="Search">     <!-- 在它管理的路由间进行切换，不会死亡 -->
        <router-view></router-view>   
      </keep-alive>
      
      <FooterGuide v-show="$route.meta.isFooterGuide"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    async mounted() {
      //通知action异步获取address并保存到state
      this.$store.dispatch('getAddress')
      this.$store.dispatch('autoLogin')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
