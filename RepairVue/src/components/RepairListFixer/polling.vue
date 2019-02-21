<template>
  <div id="polling">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;" class="header">
      <van-col span="4">
        <router-link to="/worker">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">进行巡检</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div class="listCon container-fluid" style="width: 100%;background-color: white;display: inline-block;text-align: left;margin-top: 10px;font-size: 16px;padding: 20px 15px;color: black;border-bottom: 1px solid whitesmoke" v-for="poll in pollData" v-if="poll.pollingTime == null">
      <van-row>
        <van-col span="6">受检企业：</van-col>
        <van-col span="15" offset="2"><span>{{poll.equipment.wy.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">巡检设备：</van-col>
        <van-col span="15" offset="2"><span>{{poll.equipment.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="8">首次巡检时间：</van-col>
        <van-col span="15"><span>{{poll.firstPollingTime.substr(0,10)}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">巡检类型：</van-col>
        <van-col span="15" offset="2">{{pollingType[poll.pollingType-1]}}</van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6"><img :src="'http://localhost:8080/'+poll.pollingPicUrls" style="width: 100%"></van-col>
        <van-col span="16" offset="2" style="text-align: right;padding-right:3rem;line-height:5rem;">
          <router-link :to="{name:'submitPoll',params:{pollId:poll.id}}">
            <van-button type="warning">巡检完成</van-button>
          </router-link>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        pollData:'',
        pollingType:[
          '周检',
          '月检',
          '季检',
          '年检'
        ],
        is:"asdf"
      }
    },
    methods:{
      // 发起网络请求,查询巡检工单
      getPollData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/polling/selectPollingLogByWXG",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("巡检工单",res);
          this.pollData = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      this.getPollData();
    }
  }

</script>
<style>
  .header{
    background: url(../../assets/image/worker1.jpg)no-repeat;
    background-position: -9px -8px;
  }
</style>
