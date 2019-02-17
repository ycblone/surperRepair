<template>
  <div id="NoRepair">
    <div class="listCon container-fluid" style="width: 93%;background-color: white;display: inline-block;text-align: center;border-radius: 5px;margin-top: 10px;font-size: 16px;padding: 20px 15px;color: #989898;"  v-for="(rep,index) in RepairList" @click="showBackAll">
      <!--<van-row type="flex">-->
      <!--<van-col span="9">维修状态：<span v-html="list.state == 0 ? isSure:isNo"></span></van-col>-->
      <!--</van-row>-->
      <!--<div class="row">-->
      <!--<div class="col-xs-4 col-sm-4">维修状态：<span v-html="list.state == 2 ? isSure:isNo"></span></div>-->
      <!--</div>-->
      <van-row>
        <van-col span="6">维修状态：</van-col>
        <van-col span="15" offset="2"><span>未处理</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">维修时间：</van-col>
        <van-col span="16"><span>{{rep.startTime}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">设备名称：</van-col>
        <van-col span="15" offset="2"><span>{{rep.equipment.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">物业名称：</van-col>
        <van-col span="15" offset="2"><span>{{rep.equipment.wy.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">故障描述：</van-col>
        <van-col span="16" class="showBack van-ellipsis"><span>{{rep.miaoshu}}卢卡斯昆仑山搭街坊老卡萨利十九分两款手机两款手机流口水就流口水就流口水上来看就是拉开来上课来上课流口水</span></van-col>
      </van-row>
    </div>
    <!--<div class="NoRepair-con" v-for="(rep,index) in RepairList">-->
      <!--<van-cell-group style="width:85%;margin:10px auto;text-align:center;margin-bottom: 20px;background-color: lemonchiffon;border-radius: 10px">-->
        <!--&lt;!&ndash;数据绑定设置项目标题&ndash;&gt;-->
        <!--&lt;!&ndash;<span>维修工单号：</span>&ndash;&gt;-->
        <!--<van-cell :title="'维修工单号：'+rep.equipment.id" style="background-color: lemonchiffon;border-radius: 10px">-->
        <!--</van-cell>-->
      <!--</van-cell-group>-->

    <!--</div>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        RepairList:"",
        show:true

      }
    },
    methods:{
      showBackAll(){
        //通过改变show的Boolean值，实现点击删除类名，再点击添加类名，
        if(this.show){
          $(".van-ellipsis").removeClass("van-ellipsis");
        }else {
          $(".showBack").addClass("van-ellipsis");
        }
        this.show = !this.show;
      },
      getNoRepairList(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        this.$http.post("/actionLog/selectAllActionLogByWBQYNameAndstate",{
          "state":"4"
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("未维修工单",res);
          this.RepairList = res.data.data;
        }).catch((error)=>{
          console.log(error);
        });
      },

    },
    created(){
      this.getNoRepairList();
    }

  }
</script>
<style scoped>
  div.van-cell{
    font-size: 20px;
  }
  .van-swipe-cell{
    width: 100%;
    height: 100px;
    box-shadow: 0 3px 3px 4px #ccc;
    margin-bottom: 8px;
  }
</style>
