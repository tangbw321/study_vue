<template>
  <div>
    <el-card class="login-form-layout">
      <el-form  autocomplete="on"  :model="loginForm"   ref="loginForm"  label-position="left" >
        <h2 class="login-title color-main">vue-study</h2>
        <el-form-item prop="username">
          <el-input  name="username"  type="text"   v-model="loginForm.username"  autocomplete="on"  placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input  name="password"  :type="pwdType"  @keyup.enter.native="handleLogin"  v-model="loginForm.password"  autocomplete="on"  placeholder="请输入密码">
           <!--  <span slot="suffix" @click="showPwd">  </span> -->
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button  style="width: 100%;background-color:red"  type="primary"  :loading="loading"  @click.native.prevent="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin"
      },
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
   /* showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    }, */
    handleLogin() {
      console.log("11111");
      this.$refs.loginForm.validate(valid => {
        console.log("11112");
        if (valid) {
          console.log("11113");
          this.loading = true;
          this.$store
            .dispatch("Login", this.loginForm)
            .then(response => {
              this.loading = false;
              let code = response.data.code;
              if (code == 200) {
                this.$router.push({
                  path: "/success",
                  query: { data: response.data.data }
                });
              } else {
                this.$router.push({
                  path: "/error",
                  query: { message: response.data.message }
                });
              }
            })
            .catch(() => {
               console.log("handleLogin error");
              this.loading = false;
            });
        } else {
          // eslint-disable-next-line no-console
          console.log("参数验证不合法！");
          return false;
        }
      });
    }
  }
};
</script>
 
<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid red;
}
 
.login-title {
  text-align: center;
}
 
.login-center-layout {
  background: red;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
