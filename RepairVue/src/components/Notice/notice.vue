<template>
  <div id="Notice" style="background-color: white;">
    <van-row type="flex" justify="space-between" style="height: 5.5rem;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;margin-bottom: 1rem">
      <van-col span="4">
        <router-link to="company">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="6" offset="2">公告管理</van-col>
      <van-col span="5" offset="2">
        <div style="color:white;"><router-link to="/addNotice"><van-icon name="add-o" size="22px" style="line-height: 5.5rem"></van-icon></router-link></div>
      </van-col>
    </van-row>
    <van-row v-for="(noti,index) in notice" :key=index v-if="!showNotice[index]">
      <van-col span="1" offset="1" style="text-align: right">
        <div style="height: 3.5rem;">
          <img src="../../assets/Company/icon_fill_.png" alt="" style="width: 1.5em;margin-top: 0.8rem">
        </div>
      </van-col>
      <van-col span="19">
        <div>
          <van-notice-bar :text="noti.text" background="white" color="black" style="padding-left:0;width: 30rem;"/>
        </div>
      </van-col>
      <van-col span="2" offset="1">
        <div style="height: 3.5rem;" @click="deleteNotice(noti,index)">
          <van-icon name="close" size="1.6rem" style="font-weight: bold;margin-top: 0.9rem"/>
        </div>
      </van-col>
    </van-row>

  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
      return{
        showNotice:[],
        notice:''
      }
    },
    methods:{
      deleteNotice(v,index){
        // 删除公告
        this.$http.post("/notice/delNotice",{
          "id":v.id
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("删除公告",res);
          Vue.set(this.showNotice,index,true);
        }).catch((error)=>{
          console.log(error);
        })
      },
      // 发起网络请求,查询所有公告
      getNoticeData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/notice/findNotice",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("查询公告",res);
          this.notice = res.data.data
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      // 初始化调用网络请求方法
      this.getNoticeData();
    }
  }
</script>
<style scoped>
  a{
    color: white;
  }
  body{
    background-color: white;
  }
</style>
