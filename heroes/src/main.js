import Vue from 'vue'
import App from './App.vue'
//入口 main.js=>build.js 
//main.js里所有引用代码都会被打包
//引入
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/index.css";
import router from "./router";
import axios from "axios"
//将axios赋值给vue对象的原型属性,所有文件共享
Vue.prototype.$axios=axios;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
