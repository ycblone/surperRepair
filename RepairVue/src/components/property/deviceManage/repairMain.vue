<template>
  <div class="content">

    <!--repairMain-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>维修工单详情</h2>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="name" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备地址">
          <el-input  v-model="address" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="报修时间">
          <el-input v-model="startTime" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="派出时间">
          <el-input v-model="paichuTime" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="到达时间">
          <el-input  v-model="arrivalTime" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-input  v-model="endTime" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="反馈内容">
          <el-input  v-model="fankui" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备状态">
          <el-input  v-model="state" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data:'',
        name:'',
        startTime: '',
        paichuTime: '',
        querenTime: '',
        arrivalTime: '',
        endTime: '',
        address: '',
        fankui: '',
        wxg: '',
        state:'',
        repairId:'',
        message: "维修工单数据",
        loading: false,
        msg: false,
        notnull: false
      };
    },
    created(){
      this.select();
    },
    methods: {
      errmiss: function () {
        if (this.msg === true || this.notnull === true) {
          this.msg = false;
          this.notnull = false;
        }
      },
      select: function () {
        this.repairId = this.$route.params.repairId;
        console.log("this is 12131231231", this.repairId);
        this.$http
          .post(
            "/actionLog/findById/",
            {
              id: this.repairId,
            },
            {
              headers: {
                'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                'Content-Type': 'application/json'
              }
            },
            {}
          )
          .then(res => {
            if (res.data.code === "1") {
              window.localStorage.setItem(
                "repair",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data;
              this.name = this.data.equipment.name;
              this.address = this.data.equipment.address;
              this.startTime = this.data.startTime;
              this.paichuTime = this.data.paichuTime;
              this.arrivalTime = this.data.arrivalTime;
              this.endTime = this.data.endTime;
              this.fankui = this.data.fankui;
              this.state = this.data.state;
              console.log("this.msg：" + res.data.msg)
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
              title: "获取维修工单失败",
              message: "服务器请求失败，请检查网络或联系管理员",
              type: "error"
            });
            console.log(err);
          });
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
