<template>
  <div id="proCon">
    <div class="header" style="border-bottom: 1px solid gray">
      <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
        <van-col span="4">
          <router-link to="managePro">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
        <van-col span="8" offset="2">{{comName}}</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <van-cell-group style="padding-top: 1rem">
      <van-field
        disabled
        label="合作企业"
        v-model="comName"
      />

      <van-field
        disabled
        label="合作内容"
        type="textarea"
        v-model="proCon"
        rows="3" autosize
      />
      <van-field
        disabled
        label="开始时间"
        v-model="startTime"
      />
      <van-field
        disabled
        label="结束时间"
        v-model="endTime"
      />
      <van-field
        disabled
        label="负责人"
        v-model="person"

      />
      <van-field
        disabled
        label="付款方式"
        v-model="payWay"

      />
      <van-field
        disabled
        label="付款时间"
        v-model="payTime"

      />
    </van-cell-group>

  </div>
</template>
<script>
  export default {
    created(){
     this.getProDataEnd();
    },
    data(){
      return{
        proData2:'',
        comName:'',
        proCon:'',
        startTime:'',
        endTime:'',
        person:'',
        payWay:'',
        payTime:''
      }
    },
    methods:{
      // 接收上个组件发送的信息，并赋值
      getProDataEnd(){
        console.log("11111",this.$route.query.proDatax);
        this.proData2 = this.$route.query.proDatax;
        this.comName = this.proData2.wy.name;
        this.proCon = this.proData2.content;
        this.startTime = this.proData2.startDate;
        this.endTime = this.proData2.endDate;
        this.person = this.proData2.fuzeren;
        this.payWay = this.proData2.fukuanfangshi;
        this.payTime = this.proData2.fukuanshijian;
      },
      // 点击返回到上个组件
      clickH(){
        this.$router.replace({path:'/managePro'});
      }
    }

  }
</script>
<style scoped>
  .van-nav-bar .van-icon{
    margin-top: -10px;
    margin-left: 10px;
  }
</style>

