<template>
  <div>
    Home
    <div>
      {{t|formatDate}}
    </div>
    <XButton>123</XButton>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  export default {
    name: "Home",
    data(){
      return{
        t:1547023368375
      }
    },
    components:{
      XButton
    },
    mounted(){
      layer.msg('hello,layer!')
    }
  }
</script>

<style lang="less" scoped>

</style>
