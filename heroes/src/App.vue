<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-silder></app-silder>
        <!-- 一级容器 -->
         <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      
         </div>
         
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./app-header.vue";
import appSilder from "./app-silder.vue";
import herosList from "./heros-list.vue";
import addHeros from "./add-heros.vue";
export default {
  name: "app",
  components: {
    "app-header": appHeader,
    "app-silder": appSilder,
    "heros-list": herosList,
    "add-heros": addHeros,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
