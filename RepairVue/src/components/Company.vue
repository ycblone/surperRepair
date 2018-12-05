<template>
  <div class="content">

    <van-nav-bar title="维保企业端"/>

    <van-swipe :autoplay="3000" style="height: 200px;margin-top: -1px">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>


    <van-notice-bar :scrollable="true"
                    text="公告：各位员工请注意，季度工作情况汇报中，请备好个人材料到公司进行审核，逾期不候。"
    />

    <div style="padding: 5px">
      <van-row style="margin-top: 20px">
        <van-col span="8">
          <img src="../assets/Company/proman.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">项目管理</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/Company/order.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">维修工单</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/Company/plan.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">巡检计划</div>
        </van-col>
      </van-row>
      <van-row style="margin-top: 20px">
        <van-col span="8">
          <img src="../assets/Company/worker.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">维修工管理</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/Company/storage.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">配件管理</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/Company/require.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">竞价抢修</div>
        </van-col>
      </van-row>
      <van-row style="margin-top: 20px">
        <van-col span="8">
          <img src="../assets/Company/msg.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">公告管理</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/Company/more.png" width="80px" height="80px"/>
          <div style="margin-top: -5px">更多</div>
        </van-col>
      </van-row>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" dot>个人</van-tabbar-item>
    </van-tabbar>
  </div>


</template>

<script>

  export default {
    name: "Company",
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        active: 0
      }

    }
  }
</script>

<style scoped>

</style>
