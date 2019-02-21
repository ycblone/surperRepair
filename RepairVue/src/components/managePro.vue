<template>
  <div id="pro-con">
    <div class="header" style="border-bottom: 1px solid gray">
      <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
        <van-col span="4">
          <router-link to="/">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
        <van-col span="8" offset="2">项目管理</van-col>
        <van-col span="6"></van-col>
      </van-row>
        <!--<van-icon name="edit" size="25px" slot="right" @click-right="clickHright"/>-->
    </div>
    <div @click="showProCon(pro)" v-for="(pro,index) in proData1" :key="index">
      <van-panel style="width:93%;background-color: darkgoldenrod;color:white;display: inline-block;text-align: center;border-radius: 5px;margin-top: 1rem;text-align: left;padding-left: 2rem" class="van-hairline--bottom">
        <div slot="header" style="line-height: 6rem;">
          <van-row>
            <van-col span="14">
              <p style="font-size: 1.6rem;line-height: 3.5rem;padding-top: 1.5rem;font-weight: bold">物业名称</p>
              <p style="font-size: 2rem;line-height: 3rem;margin-top: 1.8rem;font-weight: bold">{{pro.wy.name}}</p>
            </van-col>
            <van-col span="8" offset="2">
              <p>{{pro.startDate}}</p>
              <p style="margin-top: -1px">{{pro.endDate}}</p>
            </van-col>
          </van-row>

        </div>
      </van-panel>
    </div>
  </div>
</template>
<script>
  export default {
    name:'managePro',
    data(){
      return{
        propName:'',
        proData1:''
      }
    },
    methods:{
      // 点击跳转到proCon组件并用query发送数据
      showProCon(v){
        console.log('!!!',this.proData1);
        // 向proCon组件发送data
        // this.bus.$emit("proDataTo",this.proData1);
        this.$router.push({name:'proCon',query
            :{proDatax:v}});
      },
      // 发起网络请求
      getProData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/WBQYfindAllContract",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("项目管理",res.data);
          // Bus.$emit("proData",res.data);
          this.proData1 = res.data.data;
          // 提取物业名字
          // this.propName = this.proData1.data[0].wy.name;
          // if (!this.propName){
          //   this.propName = '这里还没有项目哦';
          // }
        }).catch((error)=>{
          console.log(error);
        })
      }
    },
    created(){
      // 初始化调用网络请求方法
      this.getProData();
    }
  }
</script>
<style scoped>
  body,html{
    background-color: whitesmoke;
  }
</style>
