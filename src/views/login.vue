<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <!-- 组件，  veu有自己的事件机制 -->
        <el-input type='password' v-model="formdata.password" @keyup.enter.native='handleLogin'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios';

export default {
  data() {
    return {
      formdata: {
        userrname: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin () {
      // axios
      //   .post('http://localhost:8888/api/private/v1/login',this.formdata)
      //   .then((response) => {
      //     console.log(response)
      //     var status = response.data.meta.status;
      //     var msg = response.data.meta.msg;
      //     if ( status === 200 ) {
      //       this.$message.success(msg)
      //       // 记录token到sessionStorage中
      //       var token = response.data.data.token;
      //       sessionStorage.setItem('token',token)
      //       跳转到后台首页
              // this.$router.push('/')
      //     }else{
      //       this.$message.error(msg)
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      var response = await axios.post('http://localhost:8888/api/private/v1/login',this.formdata);
      var status = response.data.meta.status;
      var msg = response.data.meta.msg;
      if (status === 200) {
        this.$message.success(msg)
        var token = response.data.data.token;
        sessionStorage.setItem('token',token)
        this.$router.push('/')
      }else {
        this.$message.error(msg)
      }
    }
  }

  
};
</script>

<style scoped>
/* scoped 当前页面的样式只为当前页面的元素服务 */
  .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrap .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
  }

  .login-wrap .login-form .login-btn {
    width: 100%;
  }
</style>
