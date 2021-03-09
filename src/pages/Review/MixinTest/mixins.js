export let myMixin = {
    data() {
        return {
            Mixin:'公共的初始数据'
        }
    },
    computed:{
        MixinAll (){
            return '公共的计算属性'
        }
    },
}

export const myMixin2 = {
    data () {
      return {
        a: '公共atguigu',
      }
    },
    computed: {
      length () {
        return '公共'+this.a.length
      }
    }
  }