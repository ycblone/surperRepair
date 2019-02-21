<!--需求详情-->
<template>
  <div class="content">
    <div style="margin-top:30px;padding:10px ;">
      <div class="title">
        <h2>报价详情</h2>
      </div>
      <el-form ref="form" label-position="left" label-width="100px">
        <el-form-item label="竞价的项目">
          <el-input  v-model="title" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="报价内容">
          <el-input  v-model="name" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="价格">
          <el-input  v-model="price" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input  v-model="lianxiren" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="联系人电话">
          <el-input  v-model="phone" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="城市">
          <el-input  v-model="city" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="附件url">
          <el-input  v-model="fujianurl" disabled="disabled"/>
        </el-form-item>
        <el-form-item label="维保企业">
          <el-input  v-model="wbqy" disabled="disabled"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "select",
    data() {
      return {
        data:'',
        wbqy: '',
        title:'',
        name:'',
        price:'',
        lianxiren: '',
        phone: '',
        city: '',
        fujianurl:'',
        message: "报价信息数据",
        msg: false,
        notnull: false
      };
    },
    created(){
      this.select();
    },
    methods: {
      select: function () {
        this.quoteId = this.$route.params.quoteId;
        this.$http
          .post(
            "/auction/findAuctionById/",
            {
              'id': this.quoteId,
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
                "contract",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data;
              this.wbqy = this.data.wbqy.username;
              this.title = this.data.requirement.title;
              this.name = this.data.name;
              this.price = this.data.price;
              this.lianxiren = this.data.lianxiren;
              this.phone = this.data.phone;
              this.city = this.data.city;
              this.fujianurl = this.data.fujianurl;
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
              title: "获取报价信息失败",
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
