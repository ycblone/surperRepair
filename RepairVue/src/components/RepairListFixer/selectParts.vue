<template>
  <div id="selectA">
    <van-row type="flex" justify="center" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="8">申请配件</van-col>
    </van-row>
    <!--v-for后面的这个key是用来区别当前循环到的元素的。绑定上吧还是，不绑定的话有组件复用的问题,会有警告-->
    <van-collapse v-model="activeName" accordion style="margin-top: 1rem" v-for="(partsA,index) in partsAll" :key="index">
      <van-collapse-item :name="index+1" style="margin: 1rem 0;">
        <div slot="title" class="title">{{partsA.name}}</div>
        <div slot="right-icon" style="line-height: 6rem;font-size: 1em"><van-icon name="setting" /></div>
        <van-row type="flex" justify="space-around">
          <van-col span="10"><van-stepper v-model="partsN[index]" /></van-col>
          <van-col span="4"></van-col>
          <van-col span="6"><van-button size="small" @click="reqParts(partsA.id,index)">申请</van-button></van-col>
        </van-row>
      </van-collapse-item>
    </van-collapse>

  </div>
</template>
<script>
  export default {
    data(){
      return{
        partsAll:'',
        activeName: 1,
        partsN:[],
        listId:''
      }
    },
    methods:{
      //收到sign组件发来的工单id
      getReqParts(){
        this.listId = this.$route.query.selectParts;
      },
      // 发起网络请求 请求所有的配件信息
      getPartsAll(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/parts/wxgSelectAllParts",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("维修工查看配件",res);
          this.partsAll = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
      //网络请求 申请配件
      reqParts(v,k){
        // console.log(v);
        // console.log(this.partsN[k]);
        // console.log(this.listId);
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/parts/shengqingpeijian",{
          "pid":v,
          "num":this.partsN[k],
          "alid":this.listId
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("申请配件",res);
          this.$dialog.alert({
            message: '申请成功！',
          }).then(() => {
            // on close
          });
          this.partsN[k] = 1;
        }).catch((error)=>{
          console.log(error);
        })
      }
    },

    created(){
      this.getReqParts();
      this.getPartsAll();
    }
  }
</script>
<style scoped>
  body{
    background-color: whitesmoke;
  }
  .title{
    line-height: 6rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    padding-left: 2rem;
  }
</style>
