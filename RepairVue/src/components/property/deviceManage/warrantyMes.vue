<template>
  <div class="content">

    <!--equipmentAdd-->
    <div style="margin-top:30px;padding:10px ;">

      <div class="title">
        <h2>一键报修详情页面</h2>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="设备编号">
          <el-input  v-model="code" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备名称">
          <el-input  v-model="name" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备属性">
          <el-input  v-model="isTeZhongSheBei" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-input  v-model="type" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备描述">
          <el-input  v-model="miaoshu" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input  v-model="version" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备地址">
          <el-input  v-model="address" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="归属部门">
          <el-input  v-model="bumeng" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="维保单位">
          <el-input  v-model="id" v-on:focus="errmiss" disabled="disabled"/>
        </el-form-item>
        <!--<el-form-item label="报修描述">
          <el-input  v-model="miaoshu" v-on:focus="errmiss"/>
        </el-form-item>-->
        <el-form-item>
          <el-button type="primary" size="small" class="btn-login" @click="add(data.id) ">一键报修</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "edit",
    data() {
      return {
        id:'',
        data: [],
        code: '',
        name: '',
        isTeZhongSheBei: '',
        type: '',
        miaoshu: '',
        version: '',
        address: '',
        bumeng: '',
        message: "设备信息数据",
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
      add: function (equipmentId) {
        console.log("the msg is ", equipmentId, this.miaoshu)
        if (equipmentId === "" || this.miaoshu === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", equipmentId, this.miaoshu)
          this.$http
            .post(
              "/actionLog/repairs",
              {
                equipmentId: equipmentId,
                /*miaoshu: this.miaoshu*/
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
                  "warranty",
                  JSON.stringify(res.data.token)
                );
                this.data = res.data.data,
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
                title: "一键报修失败",
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
            "/equipment/findById/",
            {
              id: this.elementId,
            },
            {
              headers: {
                'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                'Content-Type': 'application/json'
              }
            },
            {
            }
          )
          .then(res => {
            if (res.data.code === "1") {
              window.localStorage.setItem(
                "element",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data;
              this.code = this.data.code;
              this.name = this.data.name;
              this.isTeZhongSheBei = this.data.isTeZhongSheBei;
              this.type = this.data.type;
              this.miaoshu = this.data.miaoshu;
              this.version = this.data.version;
              this.address = this.data.address;
              this.bumeng = this.data.bumeng;
              this.id = this.data.wbqy.id;
              console.log("this.msg："+res.data.msg)
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
              title: "获取设备信息失败",
              message: "服务器请求失败，请检查网络或联系管理员",
              type: "error"
            });
            console.log(err);
          });
      },
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
