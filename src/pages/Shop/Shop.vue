<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="tab">
        <div class="tab-item">
            <!-- <router-link to="/shop/goods" replace>点餐</router-link> -->
            <router-link :to="`/shop/${id}/goods`" replace>点餐</router-link>
        </div>
        <div class="tab-item">
            <!-- <router-link to="/shop/ratings" replace>评价</router-link> -->
            <router-link :to="`/shop/${id}/ratings`" replace>评价</router-link>
        </div>
        <div class="tab-item">
            <!-- <router-link to="/shop/info" replace>商家</router-link> -->
            <router-link :to="`/shop/${id}/info`" replace>商家</router-link>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
    import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
    export default {
      props:['id'],
      components:{
        ShopHeader
      },
      mounted() {
        /* this.$store.dispatch('getGoods')
        this.$store.dispatch('getRatings')
        this.$store.dispatch('getInfo') */

        // 得到当前请求的商家ID
        // let id = this.$route.params.id
        let id = this.id
        // console.log('id',id);

        // 分发action请求商家数据
        this.$store.dispatch('getShop',id)
      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      float left
      width: 33.33333%
      text-align center
      font-size 14px
      color rgb(77, 85, 93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>
 

