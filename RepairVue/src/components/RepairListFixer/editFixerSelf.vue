<template>
  <div id="self">
    <div class="w-header" style="height: 235px;">
      <van-row type="flex" justify="space-between" style="height: 5rem;font-size: 20px;font-weight: bold;line-height: 5rem;">
        <van-col span="4">
          <router-link to="/worker">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
      </van-row>
      <div style="width:200px;height:142px;position: relative;top: 1rem;left: 0px;right:0;margin:0 auto;">
        <div style="width: 75px;height: 75px;border-radius: 50%;position: absolute;top: 10px;overflow: hidden;left:0;right: 0;margin: 0 auto;">
          <img src="../../assets/image/guys.png" alt="" style="width: 100%;height: 100%;">
        </div>
        <span style="color: white;font-size: 20px;position: absolute;bottom: 20px;left: 0;right: 0;margin: 0 auto;">{{this.listDataF.name}}</span>
      </div>
    </div>
      <van-panel style="padding-top: 1rem;text-align: left;padding-left: 2rem" class="van-hairline--bottom">
        <div slot="header" style="line-height: 6rem;">
          <p style="font-size: 1.6rem;line-height: 3.5rem;padding-top: 1rem;color: gray;font-weight: bold">姓名</p>
          <p style="font-size: 2rem;line-height: 5rem;margin-top: -1rem;font-weight: bold">{{this.listDataF.name}}</p>
        </div>
      </van-panel>
    <van-panel style="margin-top: -0.8rem;text-align: left;padding-left: 2rem" class="van-hairline--bottom">
      <div slot="header" style="line-height: 6rem;">
        <p style="font-size: 1.6rem;line-height: 3.5rem;padding-top: 1rem;color: gray;font-weight: bold">简介</p>
        <p style="font-size: 2rem;line-height: 5rem;margin-top: -1rem;font-weight: bold">{{this.listDataF.miaoshu}}</p>
      </div>
    </van-panel>
    <van-panel style="margin-top: -0.8rem;text-align: left;padding-left: 2rem" class="van-hairline--bottom">
      <div slot="header" style="line-height: 6rem;">
        <p style="font-size: 1.6rem;line-height: 3.5rem;padding-top: 1rem;color: gray;font-weight: bold">联系方式</p>
        <p style="font-size: 2rem;line-height: 5rem;margin-top: -1rem;font-weight: bold">{{this.listDataF.phone}}</p>
      </div>
    </van-panel>
    <router-link to="/">
      <van-button size="large" style="margin-top: -0.8rem" @click="delLocalStorage">退出登录</van-button>
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        listDataF:''
      }
    },
    methods:{
      delLocalStorage(){
        window.localStorage.setItem(
          "user", ""
        );
      },
      // 发起网络请求
      getListData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/WXG",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("维修工信息",res);
          this.listDataF = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      this.getListData();
    }
  }
</script>
<style></style>
