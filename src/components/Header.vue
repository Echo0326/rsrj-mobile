<template>
  <div class="header">
    <div class="fixed">
      <div class="logo"><img src="./images/logo.png" alt=""></div>
      <i @click="showMenu=!showMenu" class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </div>
    <div @touchmove.prevent>
      <Popup position="left" v-model="showMenu" width="80%">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/home">
                首页
              </router-link>
            </li>
            <li>
              <router-link to="/product">
                产品展示
              </router-link>
            </li>
            <li>
              <router-link to="/service">
                服务流程
              </router-link>
            </li>
            <li>
              <router-link to="/aboutus">
                关于我们
              </router-link>
            </li>
            <li>
              <router-link to="/contactus">
                联系我们
              </router-link>
            </li>
          </ul>
        </div>
      </Popup>
    </div>
  </div>
</template>

<script>
  import { Popup } from 'vux'
  export default {
    name: "Header",
    data(){
      return{
        showMenu:false
      }
    },
    components:{
      Popup
    },
    methods:{
    }
  }
</script>

<style lang="less" scoped>
  @import url('less/header');
</style>
