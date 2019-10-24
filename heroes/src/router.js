import Vue from "vue";
import VueRouter from "vue-router"; //引入vue-router模块

import weapon from "./views/weapon/weapon";
import zhuangbei from "./views/zhuangbei/zhuangbei";

import herosList from "./views/heroes/heros-list";
import addHeros from "./views/heroes/add-heros";
import editHeros from "./views/heroes/edit-heros";

import appContainer from "./views/heroes/app-container";
Vue.use(VueRouter) // 使用router
export default new VueRouter({
  //改变当前默认 激活样式的class名
  linkActiveClass: "active",
  routes: [{
      path: "/",
      redirect: "/heros"

    },
    {
      path: "/heros",
      component: appContainer,
      children: [{
          path: "",//二级路由什么都不写 代表匹配一级路由
          component: herosList,
        },
        {
          path: "add",
          component: addHeros,
        },
        {
          path: "edit/:editid",
          component: editHeros,
        },
      ]

    },
    {
      path: "/weapon",
      component: weapon

    },
    {
      path: "/equip",
      component: zhuangbei
    },
  ]
})
