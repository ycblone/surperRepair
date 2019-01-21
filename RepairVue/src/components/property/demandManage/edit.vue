<template>
  <div class="content">

    <!--equipmentAdd-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>添加公告</h2>
      </div>
      <el-input class="input-group" v-model="text" placeholder="公告内容">
      </el-input>
      <el-button type="primary" class="input-group btn-login" @click="add" :loading="loading">提交公告</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "add",
    data() {
      return {
        text: '',
        message: "公告信息数据",
        loading: false,
        msg: false,
        notnull: false
      };
    },

    methods: {

      test: function () {
        console.log("The msg is " + this.text);
      },
      add: function () {
        if (this.text === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.text)
          this.$http
            .post(
              "/notice/addNotice",
              {
                text: this.text
              },
              {
                headers: {
                  'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                  'Content-Type': 'application/json'
                }
              },
              {
                emulateJSON: true,
              }
            )
            .then(res => {
              if (res.data.code === "1") {
                window.localStorage.setItem(
                  "announce",
                  JSON.stringify(res.data.token)
                );
                this.$router.push({
                  path: "/index"
                });
              } else {
                this.$router.push({
                  path: "/"
                });
                this.msg = true;
                console.log("this is fail", res);
              }
            })
            .catch(err => {
              this.$notify({
                title: "添加失败",
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
