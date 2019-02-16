<template>
  <div id="addN">
    <div class="header" style="border-bottom: 1px solid gray">
      <van-row type="flex" justify="space-between" style="height: 5.5rem;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
        <van-col span="4">
          <router-link to="/notice">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
        <van-col span="6" offset="2">添加公告</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <van-cell-group>
      <van-field
        v-model="message"
        label="公告内容"
        type="textarea"
        placeholder="请输入"
        rows="3"
        autosize
      />
    </van-cell-group>
    <van-button type="default" style="margin-top: 10px" @click="sendNotice">确定</van-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        message:''
      }
    },
    methods:{
      sendNotice(){
        this.$http.post("/notice/addNotice",{
          "text":this.message
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("添加公告",res);

        }).catch((error)=>{
          console.log(error);
        })
      }
    }
  }
</script>
<style scoped>
  .header{
    margin-bottom: 30px;
  }
  .van-nav-bar__left{
    font-size: 16px;
  }
  .van-nav-bar__title{
    font-size: 20px;
  }
  div.van-cell{
    font-size: 20px;
  }
  .van-swipe-cell{
    width: 100%;
    height: 100px;
    box-shadow: 0 3px 3px 4px #ccc;
    margin-bottom: 8px;
  }
  .van-notice-bar{
    margin-top: 5px;
  }
  div.van-cell{
    font-size: 15px;
  }
</style>
