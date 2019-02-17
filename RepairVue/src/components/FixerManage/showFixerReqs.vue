<template>
  <div id="showFixerR">
    <van-cell-group>
      <van-field v-model="fixerData.username" placeholder="维修工号"
      label="账号"
      left-icon="contact"
      style="padding-top: 3rem;padding-bottom: 1rem"
    />
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="fixerData.password"
        placeholder="密码"
        label="密码"
        left-icon="edit"
      />
    </van-cell-group>
    <van-button type="default" @click="getFixerReq" style="margin-top: 20px">生成维修工号</van-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        fixerData:''
      }
    },
    methods:{
      // 发起网络请求
      getFixerReq(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/insertWXG",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("111",res);
          this.fixerData = res.data.wxg;
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
  }
</script>
<style>
</style>
