<template>
  <div class="content">
    <van-nav-bar title="物业端"/>
    <div style="margin-top: 50px">
      <van-row style="margin-top: 30px">
        <router-link to="/equipment/add">
          <van-col span="8">
            <img src="../assets/image/ProjectMan.png" style="width: 70px ;height :70px" />
            <!--<van-icon name="info-o" size="40px"/>-->
            <div>设备管理</div>
          </van-col>
        </router-link>
        <van-col span="8">
          <img src="../assets/image/repair.png" style="width: 70px ;height :70px"/>
          <!--<van-icon name="success" size="40px"/>-->
          <div>一键报修</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/image/Inspection.png" style="width: 70px ;height :70px"/>
          <!--<van-icon name="success" size="40px"/>-->
          <div>巡检计划</div>
        </van-col>
      </van-row>
      <van-row style="margin-top: 30px">
        <van-col span="8">
          <img src="../assets/image/MaintenanceUnit.png" style="width: 70px ;height :70px"/>
          <!--<van-icon name="success" size="40px"/>-->
          <div>维保单位</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/image/RepairS.png" style="width: 70px ;height :70px"/>
          <!--<van-icon name="success" size="40px"/>-->
          <div>维修搜索</div>
        </van-col>
        <van-col span="8">
          <img src="../assets/image/ComplaintM.png" style="width: 70px ;height :70px"/>
          <div>投诉管理</div>
        </van-col>
      </van-row>
      <van-row style="margin-top: 30px">
        <van-col span="8">
          <img src="../assets/image/StatisticalC.png" style="width: 70px ;height :70px"/>
          <div>统计中心</div>
          <!--<van-icon name="success" size="40px"/>-->
        </van-col>
        <van-col span="8">
          <img src="../assets/image/notification.png" style="width: 70px ;height :70px"/>
          <div>消息通知</div>
          <!--<van-icon name="success" size="40px"/>-->
        </van-col>
        <van-col span="8">
          <img src="../assets/image/more.png" style="width: 70px ;height :70px"/>
          <div>更多</div>
          <!--<van-icon name="success" size="40px"/>-->
        </van-col>
      </van-row>
    </div>

  </div>

</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>

</style>
