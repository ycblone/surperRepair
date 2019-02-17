<template>
  <div id="selectA">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="partsManage">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">全部配件</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div class="pro-con-con" @click="showPartsM(partsA)" v-for="partsA in partsAll">
        <van-cell-group style="text-align: left">
          <!--数据绑定设置项目标题-->
          <van-cell :title="partsA.name" :value="partsA.number"/>
        </van-cell-group>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        partsAll:''
      }
    },
    methods:{
      // 发起网络请求
      getPartsAll(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/parts/wbqySelectAllParts",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("111",res);
          this.partsAll = res.data.data;
        }).catch((error)=>{
          console.log(error);
        })
      },
      showPartsM(v){
// 向showPartsMessage组件发送data
        this.$router.push({name:'showPartsMessage',query
            :{partsMessage:v}});
      }
    },
    created(){
      this.getPartsAll();
    }
  }
</script>
<style scoped>
  body{
    background-color: white;
  }
</style>
