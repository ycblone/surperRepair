<template>
  <div class="content">

    <!--equipmentAdd-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>设备添加</h2>
      </div>
      <el-input class="input-group" v-model="code" v-on:focus="errmiss"
                placeholder="设备编号">
      </el-input>
      <el-input class="input-group" v-model="name" v-on:focus="errmiss"
                placeholder="设备名称">
      </el-input>
      <el-input class="input-group" v-model="isTeZhongSheBei" v-on:focus="errmiss"
                placeholder="设备属性">
      </el-input>
      <el-input class="input-group" v-model="type" v-on:focus="errmiss"
                placeholder="设备类型">
      </el-input>
      <el-input class="input-group" v-model="miaoshu" v-on:focus="errmiss"
                placeholder="设备描述">
      </el-input>
      <el-input class="input-group" v-model="version" v-on:focus="errmiss"
                placeholder="规格型号">
      </el-input>
      <el-input class="input-group" v-model="address" v-on:focus="errmiss"
                placeholder="设备地址">
      </el-input>
      <el-input class="input-group" v-model="bumeng" v-on:focus="errmiss"
                placeholder="归属部门">
      </el-input>
      <el-input class="input-group" v-model="wbqy" v-on:focus="errmiss"
                placeholder="维保单位">
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
        code: '',
        name: '',
        isTeZhongSheBei: '',
        type: '',
        miaoshu: '',
        version: '',
        address: '',
        bumeng: '',
        wbqy: '',
        message: "设备信息数据",
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
        if (this.code === "" || this.name === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.code, this.name)
          this.$http
            .post(
              "/equipment/addEquipment",
              {
                code: this.code,
                name: this.name,
                isTeZhongSheBei: this.isTeZhongSheBei,
                type: this.type,
                miaoshu: this.miaoshu,
                version: this.version,
                address: this.address,
                bumeng: this.bumeng,
                wbqy: {"id": this.wbqy}
              },
              {
                headers: {
                 'Auth-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NDY0ODU3NjEsInN1YiI6InR0dCIsImNyZWF0ZWQiOjE1NDM4OTM3NjE3MjN9.WeSrNSLS6LNkECUTk29VsmNc4NFZ-Z_5tKyD0Z6JrK6s-4hC2h3wNL_2IxPj2yrEuFHqDInglr2ke0-KqR9oMQ',
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
                  "equipment",
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
