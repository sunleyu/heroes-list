<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-silder></app-silder>
        <!-- 一级容器 -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <transition>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/common/app-header";
import appSilder from "./components/common/app-silder.vue";

export default {
  name: "app",
  components: {
    "app-header": appHeader,
    "app-silder": appSilder
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
.v-enter {
  opacity: 0;
  color: red;
}
.v-enter-active {
  transition: all 1s;
}
</style>
