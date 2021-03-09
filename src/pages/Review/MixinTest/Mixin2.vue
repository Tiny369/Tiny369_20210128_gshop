<template>
   <div>
    <div>{{Mixin2}}</div>
    <div>{{MixinTwo}}</div>
    <div>{{MixinAll}}</div>
    <br>
    <br>
    <div>{{a}}</div>
    <div>{{c}}</div>
    <div>{{length}}</div>
   </div>
</template>

<script>
import { myMixin } from './mixins'
import { myMixin2 } from './mixins'
export default {
    mixins:[myMixin,myMixin2],
    data() {
        return {
            Mixin2:'Mixin2',
            c: 'ccccc',
        }
    },
    computed:{
        MixinTwo (){
            return 2
        }
    },
}
</script>

<style>

</style>
