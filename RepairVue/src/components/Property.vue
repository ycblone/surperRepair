<template>
  <el-container>
    <el-header style="background-color: #3a8ee6"><!--<van-nav-bar title="物业端"/>-->
      <i class="el-icon-arrow-left" style="margin-right: 100%;margin-top:18px;"></i>
    </el-header>
    <el-main>
      <div class="content">
        <van-swipe :autoplay="3000" style="height: 200px;margin-top: -1px">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image"/>
          </van-swipe-item>
        </van-swipe>

        <van-notice-bar :scrollable="true">{{text}}</van-notice-bar>
        <div style="margin-top: 50px">
          <van-row style="margin-top: 30px">
            <router-link to="/contract/index">
              <van-col span="8">
                <img src="../assets/property/image/MaintenanceUnit.png" style="width: 70px ;height :70px"/>
                <!--<van-icon name="success" size="40px"/>-->
                <div>项目管理</div>
              </van-col>
            </router-link>
            <router-link to="/equipment/warranty">
              <van-col span="8">
                <img src="../assets/property/image/repair.png" style="width: 70px ;height :70px"/>
                <!--<van-icon name="success" size="40px"/>-->
                <div>一键报修</div>
              </van-col>
            </router-link>
            <van-col span="8">
              <img src="../assets/property/image/Inspection.png" style="width: 70px ;height :70px"/>
              <!--<van-icon name="success" size="40px"/>-->
              <div>巡检提醒</div>
            </van-col>
          </van-row>
          <van-row style="margin-top: 30px">
            <router-link to="/equipment/index">
              <van-col span="8">
                <img src="../assets/property/image/ProjectMan.png" style="width: 70px ;height :70px" />
                <!--<van-icon name="info-o" size="40px"/>-->
                <div>设备管理</div>
              </van-col>
            </router-link>
            <router-link to="/complaint/index">
              <van-col span="8">
                <img src="../assets/property/image/ComplaintM.png" style="width: 70px ;height :70px"/>
                <div>投诉管理</div>
              </van-col>
            </router-link>
            <router-link to="/demand/index">
              <van-col span="8">
                <img src="../assets/property/image/RepairS.png" style="width: 70px ;height :70px"/>
                <div>需求发布</div>
              </van-col>
            </router-link>
          </van-row>
          <van-row style="margin-top: 30px">
            <van-col span="8">
              <img src="../assets/property/image/StatisticalC.png" style="width: 70px ;height :70px"/>
              <div>统计中心</div>
            </van-col>
            <router-link to="/announce/index">
              <van-col span="8">
                <img src="../assets/property/image/notification.png" style="width: 70px ;height :70px"/>
                <div>发布公告</div>
              </van-col>
            </router-link>
            <router-link to="/GenerateSubAccount">
              <van-col span="8">
                <img src="../assets/property/image/more.png" style="width: 70px ;height :70px"/>
                <div>更多</div>
              </van-col>
            </router-link>
          </van-row>

        </div>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        data:'',
        text:'',
        i:'',
        images: [
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        active: 0
      }
    },
    created(){
      this.select()
    },
    methods: {
      select: function () {
        this.$http
          .post(
            "/notice/findNotice",
            {},
            {
              headers: {
                'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                'Content-Type': 'application/json'
              }
            },
            {
              emulateJSON: true,
            }
          )
          .then(res => {
            if (res.data.code === "1") {
              window.localStorage.setItem(
                "announce",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data;
              for(this.i = 0;this.i<this.data.length; this.i++){
                this.text += this.data[this.i].text+"  ";
              }
              console.log("this.msg："+this.text);
              console.log("this.msg："+res.data.msg);
            } else {
              this.$router.push({
                path: "/"
              });
              this.msg = true;
              console.log("this is fail", res);
            }
          })
          .catch(err => {
            this.$notify({
              title: "访问失败",
              message: "服务器请求失败，请检查网络或联系管理员",
              type: "error"
            });
            console.log(err);
          });
      }
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0 5px;}
  .el-main {
    padding: 0 0px;
  }
  .el-footer {
    padding: 0 0px;
  }
</style>
