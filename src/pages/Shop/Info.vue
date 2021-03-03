<template>
  <div class="shop-info" ref="infoScroll">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <!-- <span class="delivery-icon">硅谷专送</span> -->
            <span class="delivery-icon">{{info.description}}</span>
            <!-- <span>由商家配送提供配送，约30分钟送达，距离100m</span> -->
            <span>由商家配送提供配送，约{{info.deliveryTime}}分钟送达，距离{{info.distance}}</span>
          </div>
          <!-- <div class="delivery-money">配送费￥3</div> -->
          <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
        </div>
      </section>

      <!-- <div class="split"></div> -->
      <Split />
      
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <!-- <div class="activity-item activity-green"> -->
          <div class="activity-item" v-for="(support,index) in info.supports" :key="index" :class="supportClasses[support.type]">
            <!-- activity-green   activity-red    activity-orange -->
            <span class="content-tag">
              <!-- <span class="mini-tag">首单</span> -->
              <span class="mini-tag">{{support.name}}</span>
            </span>
            <!-- <span class="activity-content">新用户下单立减17元(不与其它活动同享)</span> -->
            <span class="activity-content">{{support.content}}</span>
          </div>
         <!--  <div class="activity-item activity-red">
            <span class="content-tag">
              <span class="mini-tag">满减</span>
            </span>
            <span class="activity-content">满35减19，满65减35</span>
          </div>
          <div class="activity-item activity-orange">
            <span class="content-tag">
              <span class="mini-tag">特价</span>
            </span>
            <span class="activity-content">【立减19.5元】欢乐小食餐</span>
          </div> -->
        </div>
      </section>

      <!-- <div class="split"></div> -->
      <Split />

      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper" ref="picScroll">
          <ul class="pic-list" ref="picUl">
            <!-- <li class="pic-item"> -->
            <li class="pic-item" v-for="pic in info.pics" :key="pic">
              <!-- <img width="120" height="90" src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg"> -->
              <img width="120" height="90" :src="pic">
            </li>
            <!-- <li class="pic-item">
              <img width="120" height="90" src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg">
            </li>
            <li class="pic-item">
              <img width="120" height="90" src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg">
            </li>
            <li class="pic-item">
              <img width="120" height="90" src="https://fuss10.elemecdn.com/f/7f/d1422ec824a0a9d1fb879c57ab533jpeg.jpeg">
            </li> -->
          </ul>
        </div>
      </section>

      <!-- <div class="split"></div> -->
      <Split />

      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <!-- <span>包子粥店, 简餐</span> -->
            <span>{{info.category}}</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <!-- <span>18501081111</span> -->
            <span>{{info.phone}}</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <!-- <span>北京市昌平区回龙观44号</span> -->
            <span>{{info.address}}</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <!-- <span>09:35-21:00</span> -->
            <span>09:35-{{info.workTime}}:00</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        // activity-green   activity-red    activity-orange
        supportClasses:['activity-green','activity-red','activity-orange']
      }
    },
    computed:{
      ...mapState({
        info: state => state.shop.shop.info || {}
      })
    },
    methods: {
      // 整体垂直滑动
      _initScroll (){
        new BScroll(this.$refs.infoScroll,{
          click:true
        })

        // 给ul指定样式宽度 1
        /* const ul =  this.$refs.picUl
        const liWidth = 120
        const space = 6
        const liCount = this.info.pics.length // 5
        const width = (liWidth + space) * liCount - space
        ul.style.width = width + 'px' */
        // 给ul指定样式宽度 2
        let allWidth = 0
        // Array.prototype.slice.call()
        Array.from(this.$refs.picUl.children).forEach(li => {
          allWidth += li.clientWidth  // 累加
        });
        this.$refs.picUl.style.width = allWidth + 'px'
        // 水平滑动
        new BScroll(this.$refs.picScroll,{
          scrollX:true, // 水平滑动
          click:true
        })
      },
    },
    mounted() {
      // 从其它路由切换过来, 数据已经有了
      if(this.info.name){ 
        this._initScroll()
      }
    },
    watch:{
      // 在当前路由刷新: 初始显示没有数据, 后面才有了数据
      info (){
        this.$nextTick(()=>{
          this._initScroll()
        })
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .shop-info
    position: absolute
    top: 225px
    bottom: 0
    left: 0
    width: 100%
    background: #fff;
    overflow: hidden
    .section
      padding 16px 14px 14px
      font-size 16px
      background-color #fff
      color #666
      border-bottom 1px solid #eee
      position relative
      .section-title
        color #000
        font-weight 700
        line-height 16px
        > .iconfont
          float right
          color #ccc
      .delivery
        margin-top 16px
        font-size 13px
        line-height 18px
        .delivery-icon
          width 55px
          font-size 11px
          margin-right 10px
          display inline-block
          text-align center
          color #fff
          background-color #0097ff
          padding 1px 0
          border-radius 4px
        .delivery-money
          margin-top 5px

      .activity
        margin-top 16px
        .activity-item
          margin-bottom 12px
          display flex
          font-size 13px
          align-items center
          &.activity-green
            .content-tag
              background-color rgb(112, 188, 70)
          &.activity-red
            .content-tag
              background-color rgb(240, 115, 115)
          &.activity-orange
            .content-tag
              background-color: rgb(241, 136, 79)
          .content-tag
            display inline-block
            border-radius 2px
            width 36px
            height: 18px
            margin-right 10px
            color #fff
            font-style normal
            position relative
            .mini-tag
              position absolute
              left 0
              top 0
              right -100%
              bottom -100%
              font-size 24px
              transform scale(.5)
              transform-origin 0 0
              display flex
              align-items center
              justify-content center
      .pic-wrapper
        width: 100%
        overflow: hidden
        white-space: nowrap
        margin-top 16px
        .pic-list
          font-size: 0
          .pic-item
            display: inline-block
            margin-right: 6px
            width: 120px
            height: 90px
            &:last-child
              margin: 0
      .detail
        margin-bottom -16px
        > li
          display flex
          justify-content space-between
          align-items center
          margin-right -10px
          padding 16px 12px 16px 0
          line-height 16px
          bottom-border-1px(#ddd)
          font-size 13px
          > .bold
            font-weight 700
            color #333
          &:last-child
            border-none()
</style>

