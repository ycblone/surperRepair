<template>
  <div id="fixersM" style="background: whitesmoke;height:100vh;">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="/">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">维修工管理</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div class="van-hairline--bottom">
      <van-tabs v-model="active" color="chocolate">
        <van-tab>
          <div slot="title">
            <router-link to="/fixerManage/showFixerReqs">添加技师</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/fixerManage/editFixerMessage">修改信息</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/fixerManage/sendTask">派发任务</router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="fixerCon">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        active:0,
        changeColor:1
      }
    },
    methods:{
      change(t){
        this.changeColor = t;
      }
    }
  }
</script>
<style scoped>
  body{
    height: 100%;
    background: whitesmoke;
  }
  a:link,a:visited{color:black;text-decoration:none;}
  a:hover{color:chocolate;}
  .fixerCon{
    width: 100%;
    height: 100%;
    color: chocolate;
    /*border: 1px solid red;*/
  }
</style>
