<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <router-link class="btn btn-success" to="/heros/add">添加英雄</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>英雄名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 渲染 -->
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <router-link :to="`/heros/edit/${item.id}`">修改</router-link> &nbsp;&nbsp;
              <a @click.prevent="delData(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
<router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //定义数据接收
  data(){
    return {
      list:[]
    }
  },
  methods:{
    loadData(){
      axios({
      url:"http://localhost:3000/heros"

    }).then(result=>{
      this.list=result.data;
    })

    },
    delData(id){
      if(confirm("您确定删除吗?")){
         axios({
        method:"delete",
        url:`http://localhost:3000/heros/${id}`
      }).then(()=>{
        this.loadData();
      })
      }
     
    },

  },
  //立即执行 页面渲染完成执行 created也可以 vue实例创建完执行(页面还没渲染)
  mounted(){
     this.loadData();
  },
  // created(){
  //   this.loadData();
  // }
};
</script>

<style>
</style>