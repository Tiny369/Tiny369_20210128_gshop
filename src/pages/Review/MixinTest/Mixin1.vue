<template>
  <div>
    <div>{{Mixin1}}</div>
    <div>{{MixinOne}}</div>
    <div>{{Mixin}}</div>
    <div>{{MixinAll}}</div>
    <br>
    <br>
    <div>{{a}}</div>
    <div>{{b}}</div>
    <div>{{length}}</div>
    <div>{{test}}</div>
  </div>
</template>

<script>
import { myMixin } from './mixins'
import { myMixin2 } from './mixins'
export default {
    mixins:[myMixin,myMixin2],
    data() {
        return {
            Mixin1:'Mixin1',
            b: 'bbbbbb',
            // a: '11111111'    // 公共部分有，自己也有，按照自己的数据显示
        }
    },
    computed:{
        MixinOne (){
            return 1
        },
        test () {
            return 'test'
        }
    },
}
</script>

<style>

</style>
