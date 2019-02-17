<template>
  <!--使网页的div高度满屏的方法：直接给div的高度设成  height:100vh，即可用让div的高度是视窗的高度了-->
  <!--使网页的div宽度满屏的方法：直接给div的宽度设成width:100vw,即可将div的宽度设成视窗的宽度-->
  <div id="repairListFixer" style=" height:100vh;background-color: #eaeaea;">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;" class="header">
      <van-col span="4">
        <router-link to="/worker">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">投诉反馈</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div class="listCon container-fluid" style="width: 93%;background-color: white;display: inline-block;text-align: center;border-radius: 5px;margin-top: 10px;font-size: 16px;padding: 20px 15px;color: #989898;" v-for="list in listData" @click="showBackAll" v-if="list.fankui">
      <van-row>
        <van-col span="6">维修状态：</van-col>
        <van-col span="15" offset="2"><span v-html="list.state == 0 ? isSure:isNo"></span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">维修时间：</van-col>
        <van-col span="16"><span>{{list.startTime}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">设备名称：</van-col>
        <van-col span="15" offset="2"><span>{{list.equipment.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">物业名称：</van-col>
        <van-col span="15" offset="2"><span>{{list.equipment.wy.name}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">故障描述：</van-col>
        <van-col span="15" offset="2"><span>{{list.miaoshu}}</span></van-col>
      </van-row>
      <van-row style="margin-top: 0.6rem">
        <van-col span="6">投诉反馈：</van-col>
        <van-col span="16" class="showBack van-ellipsis"><span>{{list.fankui}}卢卡斯昆仑山搭街坊老卡萨利十九分两款手机两款手机流口水就流口水就流口水上来看就是拉开来上课来上课流口水</span></van-col>
      </van-row>
    </div>

  </div>

</template>
<script>
  export default {
    data(){
      return{
        listData:'',
        isSure:'已完成',
        isNo:'未完成',
        visible:false,
        show:true
      }
    },
    methods:{
      toSign(v){
        this.$router.push({name:'sign',query:{listToSign:v}});
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
          this.listData = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
      showBackAll(){
        //通过改变show的Boolean值，实现点击删除类名，再点击添加类名，
        if(this.show){
          $(".van-ellipsis").removeClass("van-ellipsis");
        }else {
          $(".showBack").addClass("van-ellipsis");
        }
        this.show = !this.show;
      }
    },
    created(){
      this.getListData();
    }
  }
</script>
<!--有个有趣的现象：在worker.vue里style后加scoped无法显示背景图片，而在这个里面不加scoped无法显示背景图片-->
<style scoped>
  html{
    width: 100%;
    height: 1000px;
    background-color: black;
  }
  .header{
    background: url(../../assets/image/worker1.jpg)no-repeat;
    background-position: -9px -8px;
  }
  .listCon span{
    color: black;
  }

</style>
