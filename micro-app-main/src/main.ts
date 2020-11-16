import Vue from "vue";
import Antd from "ant-design-vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./routes";
import startQiankun from "./micro";
import actions from './shared/actions';
import "./assets/styles/locale.antd.css";

Vue.use(VueRouter);
Vue.use(Antd);
Vue.config.productionTip = false;

// 为 Angular 微应用所做的 zone 包注入
// 如果没有 Angular 微应用，请删除这行代码
// import "zone.js/dist/zone";

// 在项目中任何需要监听的地方进行监听，在这里监听是为了方便
// actions.onGlobalStateChange((state,prev)=>{
//   console.log('main state change',state);
// })
// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions

startQiankun();

/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
  mode: "history",
  routes,
});

// 创建 Vue 实例
// 该实例将挂载/渲染在 id 为 main-app 的节点上
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#main-app");
