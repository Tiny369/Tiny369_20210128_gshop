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
    import {savaCartFoods} from '../../utils/index.js'
    import {mapState} from 'vuex'
    export default {
      name:'Shop',
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

        // 给窗口绑定一个卸载的监听
        // window.onunload =  () => {}
        window.addEventListener('unload',()=>{
          let {shop:{id},cartFoods} = this.shop   // 多层解构
          // 将当前商家的购物车数据保存
          savaCartFoods(id,cartFoods)
        })
      },
      // 计算属性
      computed:{
        ...mapState({
          shop: state => state.shop   // {shop:{},cartFoods:[]}
        })
      },

      // 在退出当前商家界面时调用
      beforeDestroy() {   // 在刷新界面时不会执行
        // sessionStorage.setItem('beforeDestroy_key',2)
        let {shop:{id},cartFoods} = this.shop   // 多层解构
        // 将当前商家的购物车数据保存
        savaCartFoods(id,cartFoods)
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
 

