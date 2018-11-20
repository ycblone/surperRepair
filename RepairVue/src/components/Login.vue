<template>
  <div class="content">

    <!--Login-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>登录</h2>
      </div>
      <el-input class="input-group" v-model="username" v-on:focus="errmiss"
                placeholder="请输入用户名">
      </el-input>
      <el-input class="input-group" type="password" v-model="password" v-on:focus="errmiss"
                placeholder="请输入密码">
      </el-input>
      <div v-show="notnull">用户名或密码不能为空</div>
      <el-button type="primary" class="input-group btn-login" @click="login" :loading="loading">登录</el-button>
      没有账号？
      <router-link to="register">注册</router-link>

    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '',
        password: '',
        message: "测试数据",
        loading: false,
        msg: false,
        notnull: false,
        classId: ""
      };
    },

    methods: {
      errmiss: function () {
        if (this.msg === true || this.notnull === true) {
          this.msg = false;
          this.notnull = false;
        }
      },
      login: function () {
        if (this.username === "" || this.password === "") {
          this.notnull = true;
        } else {
          this.$http
            .post(
              "/login",
              {
                username: this.username,
                password: this.password
              },
              {emulateJSON: true}
            )
            .then(res => {
              if (res.data.code === "1") {
                window.localStorage.setItem(
                  "user",
                  JSON.stringify(res.data.token)
                );

                this.$router.push({
                  path: "/index"
                });
              } else {
                console.log("Login fail ",res);
                this.msg = true;
              }
            })
            .catch(err => {
              this.$notify({
                title: "登录失败",
                message: "服务器请求失败，请检查网络或联系管理员",
                type: "error"
              });
              console.log(err);
            });
        }
      }

    }
  }
</script>

<style scoped>

  .mx {
    background-color: blue;
    color: #6c6c6c;
  }

  .btn-login {
    width: 100%;
  }

  .title {
    text-align: center;
  }

  .input-group {
    margin-top: 2%;
  }

  .content {
    margin: 5%;
    /*margin-top: 40%;*/
  }
</style>
