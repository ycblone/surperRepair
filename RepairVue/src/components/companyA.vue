<template>
  <div id="contentA">
    <div class="header" style="width: 100%;height: 67px;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;text-align: center;letter-spacing:4px;">
      维保企业端
    </div>

    <van-swipe :autoplay="3000" style="height: 12.5rem;margin-top: -0.08em">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>


    <van-notice-bar :scrollable="true"
                    :text="'公告：'+notice.text"
    />

    <div style="padding: 0.4em;font-size: 1.4rem">
      <van-row style="margin-top: 1.4em">
        <van-col span="8">
          <router-link to="/managePro">
            <img src="../assets/Company/proman.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em;">项目管理</div>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/repairList">
            <img src="../assets/Company/order.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">维修工单</div>
          </router-link>

        </van-col>
        <van-col span="8">
          <router-link to="/checkPlan/selectAllEquipment">
            <img src="../assets/Company/plan.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">巡检计划</div>
          </router-link>

        </van-col>
      </van-row>
      <van-row style="margin-top: 1.4em">
        <van-col span="8">
          <router-link to="/fixerManage">
            <img src="../assets/Company/worker.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">维修工管理</div>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/partsManage">
            <img src="../assets/Company/storage.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">配件管理</div>
          </router-link>

        </van-col>
        <van-col span="8">
          <router-link to="/bidding">
            <img src="../assets/Company/require.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">竞价抢修</div>
          </router-link>

        </van-col>
      </van-row>
      <van-row style="margin-top: 1.4em">
        <van-col span="8">
          <router-link to="/notice">
            <img src="../assets/Company/msg.png" style="width:5.7em;height:5.7em"/>
            <div style="margin-top: -0.35em">公告管理</div>
          </router-link>

        </van-col>
        <van-col span="8">
          <router-link to="/countCenter/equipment">
          <img src="../assets/Company/more1.png" style="width:5.7em;height:5.7em"/>
          <div style="margin-top: -0.35em">统计中心</div>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        active: 0,
        notice:""
      }

    },
    methods:{
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
          this.notice = res.data.data[res.data.data.length-1];
          console.log(this.notice);
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      this.active = 0;
      this.getNoticeData();
    }
  }
</script>
<style scoped>
  body{
    background-color: whitesmoke;
  }
  .header{
    background: url(../assets/image/worker1.jpg)no-repeat;
    background-position: -9px -8px;
  }
</style>
