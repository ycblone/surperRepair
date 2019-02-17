<template>
  <div id="partsReq">
    <div style="margin-top: 1rem;">
      <router-link to="/partsManage/partsReqAll" class="selectAll" style="color: black;">查询所有配件申请记录</router-link>
    </div>
    <!--动态生成申请数据栏，得到每栏的数据源和下标。利用v-if来显示移除数据栏-->
    <div class="listCon container-fluid" style="width: 93%;background-color: white;display: inline-block;text-align: center;border-radius: 5px;margin-top: 10px;font-size: 16px;padding: 20px 15px;color: #989898;" v-for="(part,index) in partsReq" v-if="!showFlag[index]">
      <van-row style="text-align: left">
        <van-col span="13">申请人：<span>{{part.user.name}}</span></van-col>
        <van-col span="5" offset="5"><van-button type="warning" size="small" @click="confirmList(part.id,1,index)">确认</van-button></van-col>
      </van-row>
      <van-row style="text-align: left;margin-top: 0.5rem">
        <van-col span="18">
          申请时间：<span>{{part.applicationTime}}</span>
        </van-col>
      </van-row>

      <van-row style="text-align: left;margin-top: 1rem">
        <van-col span="13">申请配件：<span>{{part.parts.name}}</span></van-col>
        <van-col span="5" offset="5"><van-button type="danger" size="small" @click="confirmList(part.id,0,index)">退回</van-button></van-col>
      </van-row>

      <p style="text-align: left;margin-top: 0.5rem">应用项目：<span>{{part.actionLog.id}}号工单</span></p>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    data(){
      return{
        activeName: 1,
        plid:'',
        istongyi:0,
        showFlag:[],
        partsReq:''

      }
    },
    methods:{
      // 发起网络请求
      getPartsReqData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/parts/chaxunshengqing",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("所有申请",res);
          this.partsReq = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
      //利用数组的监测set方法来监测数组变化，以便在数组数据变化时重新渲染视图
      confirmList(v,j,k){
        this.plid = v;
        Vue.set(this.showFlag,k,true);
        console.log(this.showFlag[k]);
        if (j){
          this.istongyi = j;
        }
        //发起网络请求，传输body数据给后台
        this.$http.post("/parts/pishi",{
          "plid":this.plid,
          "istongyi":this.istongyi
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("111",res.data);
        }).catch((error)=>{
          console.log(error);
        })
      },
    },

    created(){
      this.getPartsReqData();
    },
  }
</script>
<style>
  body{
    background-color: whitesmoke;
  }
</style>
