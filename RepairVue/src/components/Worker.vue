<template>
  <div id="worker">
    <div class="w-header" style="height: 235px;">
      <van-row type="flex" justify="end" style="padding-top: 2rem">
        <van-col span="4" ><router-link to="/RepairListFixer/editFixerSelf"><div><van-icon name="edit" size="20px" style="color: white;"/></div></router-link></van-col>
      </van-row>
        <div style="width:200px;height:142px;position: relative;top: 30px;left: 0px;right:0;margin:0 auto;">
          <div style="width: 75px;height: 75px;border-radius: 50%;position: absolute;top: 10px;overflow: hidden;left:0;right: 0;margin: 0 auto;">
            <img src="../assets/image/guys.png" alt="" style="width: 100%;height: 100%;">

          </div>
          <span style="color: white;font-size: 20px;position: absolute;bottom: 20px;left: 0;right: 0;margin: 0 auto;">{{this.name.name}}</span>

        </div>
    </div>
    <van-notice-bar :scrollable="true"
                    :text="'公告：'+notice.text"
    />
    <div class="listIcon container-fluid" style="height: 100px;background-color: white">
        <div class="row">
          <div class="col-xs-4 col-sm-4" style="position: relative;height: 100px;">
              <div style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;height: 50%;" @click="toAllList">
                <van-icon name="records" size="25px" color="#828282"/>
                <p style="font-size: 16px;color: #a6a6a6;">全部工单</p>
              </div>
          </div>
          <div class="col-xs-4 col-sm-4" style="position: relative;height: 100px;">
            <div style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;height: 50%;" @click="toWaitList">
              <van-icon name="logistics" size="26px" color="#828282"/>
              <p style="font-size: 16px;color: #a6a6a6;">待确认</p>
            </div>
          </div>
          <div class="col-xs-4 col-sm-4" style="position: relative;height: 100px;">
            <div style="position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: auto;height: 50%;" @click="toHistory">
              <van-icon name="tosend" size="25px" color="#828282"/>
              <p style="font-size: 16px;color: #a6a6a6;">维修记录</p>
            </div>
          </div>
        </div>
      </div>
    <p style="height: 0.1rem;background-color: #f7f7f7"></p>
    <div>
      <router-link to="/RepairListFixer/backMessage">
        <div class="partsReq" style="width: 100%;height: 60px;">
          <div style="width: 90%;height:100%;display:inline-block;text-align: center;border-bottom: 1px solid #f3f3f3;position: relative;">
            <van-icon name="records" size="25px" color="#3c3c3c" style="position: absolute;left: 0;top: 50%;transform: translate(0,-50%);font-weight: bold"></van-icon>
            <span style="font-weight: bold;font-size: 18px;color: #414141;position: absolute;left: 40px;top: 50%;transform: translate(0,-50%);">查看投诉</span>
            <van-icon name="arrow" size="20px" style="position: absolute;right: 0;line-height: 60px"></van-icon>
          </div>
        </div>
      </router-link>
    </div>
    <div class="partsReq" style="width: 100%;height: 60px;">
      <router-link to="/RepairListFixer/polling">
      <div style="width: 90%;height:100%;display:inline-block;text-align: center;border-bottom: 1px solid #f3f3f3;position: relative;">
        <van-icon name="aim" size="25px" color="#3c3c3c" style="position: absolute;left: 0;top: 50%;transform: translate(0,-50%);font-weight: bold"/>
        <span style="font-weight: bold;font-size: 18px;color: #414141;position: absolute;left: 40px;top: 50%;transform: translate(0,-50%);">进行巡检</span>
        <van-icon name="arrow" size="20px" style="position: absolute;right: 0;line-height: 60px"/>
      </div>
        </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        listDataF: '',
        name:'',
        notice:''
      }
    },
    methods:{
      toAllList(){
        this.$router.push({name:'repairListFixer',query
            :{listDatax:this.listDataF}});
      },
      toWaitList(){
        this.$router.push({path:'/RepairListFixer/waitListFixer'});
      },
      toHistory(){
        this.$router.push({path:'/RepairListFixer/listHistory'});
      },
      // 发起网络请求
      getListData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/actionLog/findByWxgUsername",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("被派维修工单",res);
          this.listDataF = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
      // 发起网络请求
      getData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/WXG",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("维修工信息",res);
          this.name = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
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
      this.getData();
      this.getListData();
      this.getNoticeData();
      // 销毁插件
      QRScanner.destroy();
      $("body").css("background","whitesmoke");
    }
  }
</script>
<style>
  .w-header{
    background: url(../assets/image/worker1.jpg)no-repeat;
    background-position: -9px -8px;
  }
  body,html{
    background-color: white;
  }
</style>
