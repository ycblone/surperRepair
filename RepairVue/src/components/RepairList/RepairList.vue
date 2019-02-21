<template>
  <div id="RepairList" style="height:100vh;background: whitesmoke;overflow: scroll;
">
      <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
          <van-col span="4">
            <router-link to="/">
              <van-icon name="arrow-left" size="1em" color="white"/>
            </router-link>
          </van-col>
          <van-col span="6" offset="2">维修工单</van-col>
          <van-col span="6"></van-col>
        </van-row>
    <div class="van-hairline--bottom">
      <van-tabs v-model="active" color="chocolate">
        <van-tab>
          <div slot="title">
            <router-link to="/repairList/noRepair">未处理</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/repairList/repairing">维修中</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/repairList/finishList">已完成</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/repairList/ShowAllRepair">所有工单</router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="listCon">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        active:0
      }
    },
    methods:{
    }
  }
</script>
<style scoped>
  a:link,a:visited{color:black;text-decoration:none;}
  a:hover{color:chocolate;}
  .listCon{
    width: 100%;
    height: 100%;
    color: chocolate;
    /*border: 1px solid red;*/
  }
</style>
