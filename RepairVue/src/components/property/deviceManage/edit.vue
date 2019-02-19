<!--设备编辑-->
<template>
  <div class="content">
    <!--equipmentEdit-->
    <div style="margin-top:30px;padding:10px ;">
      <div class="title">
        <h2>设备编辑</h2>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="设备编号">
          <el-input v-model="code" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="设备名称">
          <el-input v-model="name"/>
        </el-form-item>
        <el-form-item label="设备属性">
          <el-input  v-model="isTeZhongSheBei"/>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-input  v-model="type"/>
        </el-form-item>
        <el-form-item label="设备描述">
          <el-input  v-model="miaoshu"/>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input  v-model="version"/>
        </el-form-item>
        <el-form-item label="设备地址">
          <el-input  v-model="address"/>
        </el-form-item>
        <el-form-item label="归属部门">
          <el-input  v-model="bumeng"/>
        </el-form-item>
        <el-form-item label="维保单位">
          <el-input  v-model="id"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="input-group btn-login" @click="edit(data.id)">编辑设备</el-button>
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
        data:'',
        code: '',
        name: '',
        isTeZhongSheBei: '',
        type: '',
        miaoshu: '',
        version: '',
        address: '',
        bumeng: '',
        message: "设备信息数据",
        msg: false,
        notnull: false
      };
    },
    created(){
      this.select();
    },
    methods: {
      select: function () {
        this.elementId = this.$route.params.elementId;
        this.$http
          .post(
            "/equipment/findById/",
            {
              'id': this.elementId,
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
      edit: function (equipmentID) {
        if (equipmentID === "") {
          this.notnull = true;
        } else {
          this.$http
            .post(
              "/equipment/addEquipment",
              {
                id:equipmentID,
                code: this.code,
                name: this.name,
                isTeZhongSheBei: this.isTeZhongSheBei,
                type: this.type,
                miaoshu: this.miaoshu,
                version: this.version,
                address: this.address,
                bumeng: this.bumeng,
                wbqy: {"id": this.id}
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
  }
</style>
