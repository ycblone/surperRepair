<template>
  <div class="content">

    <!--equipmentAdd-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>合同添加</h2>
      </div>
      <el-input class="input-group" v-model="wbqy" v-on:focus="errmiss"
                placeholder="维保企业">
      </el-input>
      <el-input class="input-group" v-model="content" v-on:focus="errmiss"
                placeholder="合同内容">
      </el-input>
      <el-input class="input-group" type="date" v-model="startDate" v-on:focus="errmiss"
                placeholder="开始日期">
      </el-input>
      <el-input class="input-group" type="date" v-model="endDate" v-on:focus="errmiss"
                placeholder="结束日期">
      </el-input>
      <el-input class="input-group" v-model="fuzeren" v-on:focus="errmiss"
                placeholder="负责人">
      </el-input>
      <el-input class="input-group" v-model="fukuanfangshi" v-on:focus="errmiss"
                placeholder="付款方式">
      </el-input>
      <el-input class="input-group" type="date" v-model="fukuanshijian" v-on:focus="errmiss"
                placeholder="付款时间">
      </el-input>
      <el-button type="primary" class="input-group btn-login" @click="add" :loading="loading">提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "add",
    data() {
      return {
        wbqy: '',
        content: '',
        startDate: '',
        endDate: '',
        fuzeren: '',
        fukuanfangshi: '',
        fukuanshijian: '',
        message: "合同信息数据",
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

      test: function () {
        console.log("The msg is " + this.code + "," + this.name);
      },
      add: function () {
        if (this.content === "" || this.fuzeren === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.content, this.fuzeren)
          this.$http
            .post(
              "/user/addContract",
              {
                wbqy: this.wbqy,
                content: this.content,
                startDate: new Date(this.startDate).getTime(),
                endDate: new Date(this.endDate).getTime(),
                fuzeren: this.fuzeren,
                fukuanfangshi: this.fukuanfangshi,
                fukuanshijian: new Date(this.fukuanshijian).getTime()
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
                  "contract",
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
