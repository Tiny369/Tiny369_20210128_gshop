<template>
  <div class="footer-guide">
    <!-- :class 动态绑定class,类名确定但不确定值有没有， $route.path -->
    <span class="guide-item" :class="{on:$route.path === '/msite'}" @click="goto('/msite')" >
      <span><i class="iconfont icon-waimai"></i></span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/search'}" @click="goto('/search')" >
      <span><i class="iconfont icon-search2"></i></span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/order'}" @click="goto('/order')" >
      <span><i class="iconfont icon-dingdan"></i></span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')" >
      <span><i class="iconfont icon-geren"></i></span>
      <span>个人</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'',

    methods: {
      goto (path){
        // 解决重复点击当前路由组件报错-方案1：如果点击当前项,没有任何效果
        // if(path != this.$route.path){
        //   //编程式路由跳转
        //   this.$router.replace(path)
        // }

        // 解决重复点击当前路由组件报错-方案2：如果点击当前项,刷新界面
        if(path != this.$route.path){
          //编程式路由跳转
          this.$router.replace(path)
        }else{
          window.location.href = path
        }
        
      },  
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'    //引入minxins.styl文件
.footer-guide
  top-border-1px(green)   //混合
  display flex
  position fixed
  height 50px
  width 100%
  left 0
  bottom  0
  background-color white
  .guide-item
    width 25%
    display flex
    flex-direction column
    justify-content center
    align-items center
    &.on    //父级引用
      color $green
    span
      font-size 12px 
      i
        font-size 22px
</style>
