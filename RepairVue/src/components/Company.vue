<template>
  <div class="content">


    <div class="companyCon">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" @click="toCompany">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" dot @click="editBtn">个人</van-tabbar-item>
    </van-tabbar>
  </div>


</template>

<script>
  export default {
    name: "Company",
    data(){
      return{
        active: 0,
        comDatax:''
      }
    },
    methods:{
// 编辑企业信息方法
      editBtn(){
        this.$router.push({name:'selfEdit',query
            :{comDatax:this.comDatax}});
      },
      toCompany(){
        this.$router.push({path:"/company"});
      },
      getcomDatax(){
        this.comDatax = this.$route.query.comDatax;
      }
      },
    created(){
      this.getcomDatax();
    }


  }
</script>

<style>

</style>
