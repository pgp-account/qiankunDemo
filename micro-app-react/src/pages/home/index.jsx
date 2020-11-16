import React, { useState, useEffect } from "react";
import actions from '../../shared/action';
import SharedModule from "@/shared";

const Home = () => {
  const [msg, setMessage] = useState();
  const [vue2react, setVue2React] = useState();
  const [sharedValue,setSharedValue] = useState();
  // eslint-disable-next-line 
  useEffect(() => {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    actions.onGlobalStateChange(state => {
      console.log('......react' + state);
      const { main2ReactMsg } = state;
      // 未检测到msg
      if (!main2ReactMsg) {
        // <Alert message="Error" type="error" showIcon />
        console.log("未检测到main2ReactMsg！");
      }else{
        const msg = main2ReactMsg
        setMessage(msg);
      }    
      
    }, true);

    const shared = SharedModule.getShared();
    // 使用 shared 获取 SharedValue
    const sharedValue = shared.getSharedValue();
    if (!sharedValue) {
      console.log("未检测到sharedValue！");
    }else{
      setSharedValue(sharedValue);
    }   
    // 使用 shared 获取 SharedValue
    const vue2react = shared.getVue2react();
    if (!vue2react) {
      console.log("未检测到vue2react！");
    }else{
      setVue2React(vue2react);
    }   
  })
  const react2main = (value) => {
    const shared = SharedModule.getShared();
    shared.setReact2main(value);
  }
  return(
    <div>
      <section style={{ padding: 20 }}>React App</section>
      <h3>msg:</h3>{msg? msg : 'init react msg'}
      <br/>
      <h3>vue2react:</h3>{vue2react ? vue2react : 'vue didnt send value to react'}
      <br/>
      <h3>sharedValue:</h3>{sharedValue ? sharedValue : 'init sharedValue'}
      <br/>
      <br/>
      <button onClick={react2main("react 传给主页")}>react 传给主页</button>
    </div>
  )
  
}

export default Home;