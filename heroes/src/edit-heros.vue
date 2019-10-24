<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input v-model="formData.name" type="text" class="form-control" placeholder="请输入姓名" />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input v-model="formData.gender" type="text" class="form-control" placeholder="请输入性别" />
      </div>
      <button class="btn btn-success" @click.prevent="save">保存修改</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  created() {
    const { editid } = this.$route.params;
    if (editid) {
       this.$axios({
        url: `http://localhost:3000/heros/${editid}`
      }).then(result => {
        this.formData = result.data;
      });
    }
  },
  methods: {
    save() {
      if (this.formData.name && this.formData.gender) {
        const { editid } = this.$route.params;

         this.$axios({
          method: "put",
          url: `http://localhost:3000/heros/${editid}`,
          data: this.formData
        }).then(() => {
          this.$router.push("/heros");
        });
      } else {
        alert("err");
      }
    }
  }
};
</script>

<style>
</style>