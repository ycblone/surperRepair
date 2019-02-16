<template>
  <div id="parts">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="/">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">配件管理</van-col>
      <van-col span="6">
        <router-link to="/selectAll" style="color: white;font-weight: 100;font-size: 1.5rem;">查询所有</router-link>
      </van-col>
    </van-row>
    <div class="van-hairline--bottom">
      <van-tabs color="chocolate">
        <van-tab>
          <div slot="title">
            <router-link to="/partsManage/partsAddMessage">配件登记</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/partsManage/partsReq">批示申请</router-link>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">
            <router-link to="/partsManage/partsAddNum">入库登记</router-link>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="partsBottom">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  a:link,a:visited{color:black;text-decoration:none;}
  a:hover{color:chocolate;}
  .partsBottom{
    width: 100%;
    height: 100%;
    color: chocolate;
  }
</style>
