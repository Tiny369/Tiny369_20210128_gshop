<template>
  <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.isFooterGuide"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqAddress} from './api/index.js'
  export default {
    async mounted() {
      let result = await reqAddress('40.10038',116.36867)
      console.log(result);
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
