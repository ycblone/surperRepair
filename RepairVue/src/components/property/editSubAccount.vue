<template>
  <div class="content">

    <!--equipmentAdd-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>编辑物业子账号</h2>
      </div>
      用户账号：<el-input v-model="this.data.username" v-on:focus="errmiss">
      </el-input>
      用户名称：<el-input v-model="this.data.name" v-on:focus="errmiss">
      </el-input>
      相关描述：<el-input v-model="this.data.miaoshu" v-on:focus="errmiss">
      </el-input>
      是否能够使用：<el-input  v-model="this.data.isEnable" v-on:focus="errmiss">
      </el-input>
      添加时间：<el-input  v-model="this.data.addTime" v-on:focus="errmiss">
      </el-input>
      禁用时间<el-input  v-model="this.data.forbiddenTime" v-on:focus="errmiss">
      </el-input>
      物业名称：<el-input  v-model="this.data.wy.name" v-on:focus="errmiss">
      </el-input>
      <el-button type="primary" class="input-group btn-login" @click="Edit(data.id)" :loading="loading">提交编辑信息</el-button>
      <el-button type="primary" class="input-group btn-login" @click="del(data.id)" :loading="loading">删除子账号</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "select",
    data() {
      return {
        username: '',
        name: '',
        miaoshu: '',
        isEnable: '',
        addTime: '',
        forbiddenTime: '',
        wy: '',
        message: "编辑物业子账号信息数据",
        loading: false,
        msg: false,
        notnull: false
      };
    },

    methods: {
      errmiss: function () {
        if (this.msg === true || this.notnull === true) {
          this.msg = false;
          this.notnull = false;
        }
      },

      Edit: function () {
        if (this.text === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.username)
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
