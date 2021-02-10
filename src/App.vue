<template>
  <div>
      <router-view></router-view>
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
