<template>
<div>
  <div class="goods">
    <div class="menu-wrapper" ref="left">
      <ul ref="leftUl">
        <!-- <li class="menu-item current"> -->
        <li class="menu-item" v-for="(good,index) in goods" :key="index" :class="{current:index===currentIndex}" @click="clickItem(index)">
          <span class="text bottom-border-1px">
            <!-- <img class="icon" src="https://fuss10.elemecdn.com/0/6a/05b267f338acfeb8bd682d16e836dpng.png"> -->
            <img class="icon" :src="good.icon" v-if="good.icon">
            <!-- 折扣 -->
            {{good.name}}
            </span>
        </li>
        <!-- <li class="menu-item">
          <span class="text bottom-border-1px">
            <img class="icon" src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
            优惠
          </span>
        </li> -->
      </ul>
    </div>
    <div class="foods-wrapper" ref="right">
      <ul ref="rightUl">
        <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
          <!-- <h1 class="title">折扣</h1> -->
          <h1 class="title">{{good.name}}</h1>
          <ul>
            <!-- <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods" :key="index" > --> 
            <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods" :key="index" @click="showFood(food)">  
              <div class="icon">
                <!-- <img width="57" height="57"  src="http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114"> -->
                <!-- <img @click="showFood(food)" width="57" height="57"  :src="food.icon"> -->
                <img width="57" height="57"  :src="food.icon">
              </div>
              <div class="content">
                <!-- <h2 class="name">南瓜粥</h2> -->
                <h2 class="name">{{food.name}}</h2>
                <!-- <p class="desc">甜粥</p> -->
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <!-- <span class="count">月售91份</span> -->
                  <span class="count">月售{{food.sellCount}}份</span>
                  <!-- <span>好评率100%</span> -->
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <!-- <span class="now">￥9</span> -->
                  <span class="now">￥{{food.price}}</span>
                  <span class="now" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <!-- CartControl组件 -->
                  <CartControl :food="food"/>
                </div>
              </div>
            </li>
          <!--   <li class="food-item bottom-border-1px">
              <div class="icon">
                <img width="57" height="57"
                     src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                <h2 class="name">红豆薏米美肤粥</h2>
                <p class="desc">甜粥</p>
                <div class="extra">
                  <span class="count">月售86份</span>
                  <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥12</span>
                </div>
                <div class="cartcontrol-wrapper">
                  CartControl组件
                </div>
              </div>
            </li> -->
          </ul>
        </li>
        <!-- <li class="food-list food-list-hook">
          <h1 class="title">香浓甜粥</h1>
          <ul>
            <li class="food-item bottom-border-1px">
              <div class="icon">
                <img width="57" height="57" src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114">
              </div>
              <div class="content">
                <h2 class="name">红枣山药粥</h2>
                <p class="desc">红枣山药糙米粥,素材包</p>
                <div class="extra">
                  <span class="count">月售17份</span>
                  <span>好评率100%</span>
                </div>
                <div class="price">
                  <span class="now">￥29</span>
                  <span class="old">￥36</span>
                </div>
                <div class="cartcontrol-wrapper">
                  CartControl组件
                </div>
              </div>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
    <ShopCart />
  </div>
  <!-- 1. <Food :food="food" v-show="isShowFood" />  -->
  <!-- 组件标签对象就是组件对象 -->
  <Food :food="food" ref="food" />
</div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import Food from '../../components/Food/Food.vue'
  import ShopCart from '../../components/ShopCart/ShopCart.vue'
  export default {
    data() {
      return {
        // 1)、右侧列表滑动的Y轴坐标: scrollY  在华东中过程中不断改变
        scrollY:0,
        // 2)、右侧每个分类<li>的top值的数组tops：第一次列表显示后统计后面不再变化
        tops:[],
        food:{}   // 需要显示的food
      }
    },
    methods: {
      // 初始化滑动
      _initScroll (){
        if(!this.leftScroll){
          console.log('创建scroll对象');
          this.leftScroll = new BScroll(this.$refs.left,{})
          this.rightScroll = new BScroll(this.$refs.right,{
            click:true, // 分发自定义的click事件
            probeType:1,  // 非实时 / 触摸
            // probeType:2,  // 实时 / 触摸
            // probeType:3,  // 实时 / 触摸 / 惯性 / 编码
          })

          // 给右侧列表绑定scroll监听
          this.rightScroll.on('scroll',({x,y})=>{
            console.log('scroll',x,y);
            this.scrollY = Math.abs(y)
          })
          // 给右侧列表绑定scrollEnd监听
          this.rightScroll.on('scrollEnd',({x,y})=>{
            console.log('scrollEnd',x,y);
            this.scrollY = Math.abs(y)
          })
        }else{
          this.leftScroll.refresh()
          this.rightScroll.refresh()
        }
      },
      /**
       * 统计右侧所有分类1i的top的数组
       */
      _initTops (){
        let tops = []
        let top = 0
        tops.push(top)
        // Array.from()
        let lis = Array.prototype.slice.call(this.$refs.rightUl.children)
        lis.forEach(li => {
          top += li.clientHeight
          tops.push(top)
        });
        // 更新tops数据
        this.tops = tops
        console.log('tops',tops);
      },

      clickItem (index){
        // 得到对应的top
        let top = this.tops[index]
        // 立即更新scrollY为目标值(立即选中当前分类项)
        this.scrollY = top
        // 让右侧列表滑动到对应位置
        this.rightScroll.scrollTo(0,-top,300)
      },

      /**
       * 父组件调用子组件的方法: ref
       * 子组件调用父组件的方法: props
       */
      showFood (food){
        // 更新数据
        this.food = food
        // 显示food组件界面
        this.$refs.food.toggleShow()
      }
    },
    computed:{
      // ...mapState(['goods']),
      ...mapState({
        // goods: state => state.shop.goods
        goods: state => state.shop.shop.goods || []
      }),

      currentIndex (){
        let {scrollY,tops} = this
        let index = tops.findIndex((top,index)=>{ return scrollY >= top && scrollY < tops[index+1]})
        
        if(index!==this.index && this.leftScroll){
          // 将新的下标保存起来
          // this.index = index
          // 让左侧列表滑动到当前分类处
          let li = this.$refs.leftUl.children[index]
          this.leftScroll.scrollToElement(li,300)
        }
        return index
      },
    },
    /* mounted() {
      new BScroll(this.$refs.left)
      new BScroll(this.$refs.right)
    }, */
    mounted() {
      // 如果数据已经有了，直接做初始化的操作
      if(this.goods.length > 0){
        // console.log('mounted goods');
        this._initScroll() // 初始化滑动
        this._initTops()
      }
    },

    watch:{
      goods (){   // goods数据有了
        // console.log('watch goods');
        this.$nextTick(()=>{    // 列表数据显示了
          /* new BScroll(this.$refs.left)
          new BScroll(this.$refs.right) */
          this._initScroll() // 初始化滑动
          this._initTops()
        })
      },
    },
    components:{
      Food:Food,
      ShopCart:ShopCart
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>

