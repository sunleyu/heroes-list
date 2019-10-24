import Vue from "vue";
import VueRouter from "vue-router"; //引入vue-router模块
import weapon from "./weapon";
import zhuangbei from "./zhuangbei";
import herosList from "./heros-list";
import addHeros from "./add-heros";
import appContainer from "./app-container";
import editHeros from "./edit-heros";
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
