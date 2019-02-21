<template>
  <div class="content">
    <!--repairMain-->
    <div style="margin-top:30px;padding:10px ;">
      <div class="title">
        <h2>巡检计划详情</h2>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="第一次巡检时间">
          <el-input v-model="firstPollingTime" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="巡检类型">
          <el-input  v-model="pollingType" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="实施状态">
          <el-input v-model="pollingIsAggre" disabled="disabled"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="input-group btn-login" @click="edit1(id)">同意</el-button>
          <el-button type="primary" class="input-group btn-login" @click="edit2(id)">不同意</el-button>
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
        id:'',
        firstPollingTime:'',
        pollingType:'',
        pollingIsAggre:'',
        message: "巡检计划数据",
        msg: false,
        notnull: false
      };
    },
    created(){
      this.select();
    },
    methods: {
      edit1: function (equipmentID) {
        if (equipmentID === "") {
          this.notnull = true;
        } else {
          this.$http
            .post(
              "/polling/WYConfirmPollingPlan",
              {
                equipmentId:equipmentID,
                isAgree: 1,
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
              if (res.data.code == "1") {
                window.localStorage.setItem(
                  "equipment",
                  JSON.stringify(res.data.token)
                );

                this.$router.replace("/deviceBlack");
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
                title: "同意失败",
                message: "服务器请求失败，请检查网络或联系管理员",
                type: "error"
              });
              console.log(err);
            });
        }
      },
      edit2: function (equipmentID) {
        if (equipmentID === "") {
          this.notnull = true;
        } else {
          this.$http
            .post(
              "/polling/WYConfirmPollingPlan",
              {
                equipmentId:equipmentID,
                isAgree: 2,
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
              if (res.data.code == "1") {
                window.localStorage.setItem(
                  "equipment",
                  JSON.stringify(res.data.token)
                );
                this.$router.replace("/deviceBlack");
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
                title: "不同意失败",
                message: "服务器请求失败，请检查网络或联系管理员",
                type: "error"
              });
              console.log(err);
            });
        }
      },
      select: function () {
        this.elementId = this.$route.params.elementId;
        this.$http
          .post(
            "/equipment/findById",
            {
              id: this.elementId,
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
              this.id = this.data.id;
              this.firstPollingTime = this.data.firstPollingTime;
              this.pollingType = this.data.pollingType;
              if(this.data.pollingIsAggre == '1'){
                this.pollingIsAggre = '已通过';
              }else if(this.data.pollingIsAggre == '2'){
                this.pollingIsAggre = '未通过';
              }else{
                this.pollingIsAggre = '未审核';
              }
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
              title: "获取巡检计划失败",
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
  .title {
    text-align: center;
  }
  .content {
    margin: 5%;
  }
</style>
