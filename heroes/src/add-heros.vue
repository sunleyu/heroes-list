<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input v-model="formData.name" type="text" class="form-control" placeholder="请输入姓名" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input v-model="formData.gender" type="text" class="form-control" placeholder="请输入性别" />
      </div>
      <button class="btn btn-success" @click.prevent="addheros">添加英雄</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
data(){
    return{
        formData:{
            name:"",
            gender:"",
        }
    }
},
methods:{
    addheros(){
        if(this.formData.name&&this.formData.gender){
            axios({
                method:"post",
                url:"http://localhost:3000/heros",
                data:this.formData,
            }).then(()=>{
                this.$router.push("/heros")
            })
        }else{
            alert("err")
        }
    }
}
}
</script>

<style>
</style>