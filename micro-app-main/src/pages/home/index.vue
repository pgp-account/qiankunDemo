<template>
  <div>
    <section class="home-container">Home</section>
    <!--增加action修改state的按钮-->
    <input class="home-button" type="button" value = "传入vue " @click = "changeVueState('主页传输给vue的值 vue')">
    <input class="home-button" type="button" value = "传入react " @click = "changeReactState('主页传输给react的值 react')">
    <br/>
    <!--增加shared修改state的按钮-->
    <button class="home-button" @click = "shared2Vue('主页传的值 sharedvue')">shared传入</button>
    <h3>react2main:</h3>{{react2main ? react2main : 'react didnt send value to main'}}
  </div>
  
</template>

<script lang="ts">
//import { Component, Vue } from "vue-property-decorator";

import actions from "../../shared/actions";
import shared from "../../shared";


export default {
  name: "Home",
  data() {
      return {
          react2main: ''
      }
  },
  // `mounted` 是 Vue 的生命周期钩子函数，在组件挂载时执行
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token 改变前的值为 ", prevState);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state);
    });
    const react2main = shared.getReact2main();
    this.react2main = react2main
  },
  methods:{
    changeVueState(value:String){
      console.log('........................修改Vuestate')
        // ------ 修改state
        actions.setGlobalState({
          main2vueMsg: value
        });
    },
    changeReactState(value:String){
      console.log('........................修改Reactstate')
        // ------ 修改state
        actions.setGlobalState({
          main2ReactMsg: value
        });
    },
    shared2Vue(value:string){
      // 使用 shared 的 setSharedValue 方法记录 sharedValue
      shared.setSharedValue(value);
    }
  }
  
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 30px;
}
.home-button{
  margin: 15px;
}
</style>
