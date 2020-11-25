<template>
  <div>
    <section style="padding: 20px; color: red;">Vue App</section>
    {{'msg --- ' + `${msg?msg:'init vue msg'}` }}
    <br/>
    {{'sharedValue --- ' + `${sharedValue?sharedValue:'init sharedValue'}` }}
    <br />
    <!--增加修改state的按钮-->
    <input class="home-button" type="button" value = "传入react " @click = "send2React('vue传输给react的值 vue2react')">
  </div>
  
</template>
<script>
import actions from "../../shared/action";
import SharedModule from "@/shared";

export default {
  name: "Home",
  data() {
      return {
          msg: 'init msg',
          sharedValue: ''
      }
  },
  // methods:{
  mounted(){
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    // 增加state监听，当mt数据发生变化的时候，我们修改name，体现在页面上
    actions.onGlobalStateChange((state) => {
      const { main2vueMsg } = state;
      // 未登录 - 返回主页
      if (!main2vueMsg) {
        // this.$message.error("未检测到initialState！");
        console.log("未检测到msg！")
      }
      this.msg = main2vueMsg

    }, true);

    const shared = SharedModule.getShared();
    // 使用 shared 获取 SharedValue
    const sharedValue = shared.getSharedValue();
    if (!sharedValue) {
      console.log("未检测到sharedValue！");
    }else{
      this.sharedValue = sharedValue;
    }    
  },
  methods:{
    send2React(value){      
      const shared = SharedModule.getShared();
      shared.setVue2react(value);
      console.log('........................send2React',shared.getVue2react(value), shared.getSharedValue() )
    },

  }
  
}

</script>