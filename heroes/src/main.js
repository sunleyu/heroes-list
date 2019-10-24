import Vue from 'vue'
import App from './App.vue'
//入口 main.js=>build.js 
//main.js里所有引用代码都会被打包
//引入
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/index.css";
import router from "./router";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
