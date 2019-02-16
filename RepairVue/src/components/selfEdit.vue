<template>
  <div id="self">
    <van-row type="flex" justify="space-between" style="height: 5.5rem;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="company">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="6" offset="2">维保企业</van-col>
      <van-col span="5" offset="2">
        <div style="font-size: 1.5rem"><router-link to="/PayForMember" style="color:white;">充值</router-link></div>
      </van-col>
    </van-row>
    <van-cell-group style="padding-top: 2rem">
      <van-field
        clearable
        v-model="comName"
        label="企业名称："
      />

      <van-field
        label="企业描述："
        type="textarea"
        v-model="comDescri"
        rows="3" autosize
      />
      <van-field
        clearable
        v-model="comPhone"
        label="联系电话："
      />
    </van-cell-group>
    <van-button size="normal" type="default" v-show="show" style="margin-left: -20px" @click="updateData">保存</van-button>
    <router-link to="/">
      <van-button size="large" style="margin-top: 14em;" @click="delLocalStorage">退出登录</van-button>
    </router-link>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        comName:'',
        comDescri:'',
        comPhone:'',
        show:true,
        comDatax:'',
        wbqy:''
      }
    },
    // watch:{
    //   comName(val,oldval){
    //     if(!this.show){
    //       this.show = !this.show;
    //     }
    //
    //   },
    //   comDescri(val,oldval){
    //     this.show = !this.show;
    //
    //   },
    //   comPhone(val,oldval){
    //     this.show = !this.show;
    //
    //   }
    // },
    methods:{
      delLocalStorage(){
        window.localStorage.setItem(
          "user", ""
        );
      },
      // 发起网络请求,查询维保企业自己的信息
      getSelfData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/WBQYfindAllContract",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("查询自己信息",res);
          this.wbqy = res.data.data[0].wbqy;
          console.log("维保企业信息"+res.data.data[0].wbqy);
          this.comName = this.wbqy.name;
          this.comDescri = this.wbqy.miaoshu;
          this.comPhone = this.wbqy.phone;
        }).catch((error)=>{
          console.log(error);
        })
      },
      // 发起网络请求
      updateData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/updateWBQY",{
          "name":this.comName,
          "describe":this.comDescri,
          "phone":this.comPhone
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("修改成功",res);
          this.show = false;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      this.getSelfData();
    }

  }
</script>
<style></style>
