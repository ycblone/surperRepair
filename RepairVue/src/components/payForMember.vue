<template>
  <div id="member">
    <div class="header" style="border-bottom: 1px solid gray">
      <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
        <van-col span="4">
          <router-link to="selfEdit">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
        <van-col span="8" offset="2">充值中心</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <form method="post" id="form1" name="form1">
      <input type="hidden" name="subject" value="subject" :disabled="disabled">
      <input type="hidden" name="body" value="中通广联充值" :disabled="disabled">
      <input type="hidden" name="username" :value="user">
      <label for="moneyOne" style="width: 100%;margin-top: 1rem">
      <van-panel title="充值金额" style="text-align: left;font-size: 2.5rem" class="title" id="moneyOne">
        <div>
          <van-row type="flex" justify="center">
            <van-col span="1" offset="5"><span>￥</span></van-col>
            <van-col span="6" offset="1">
              <!-- 正则只匹配数字0-9 【str.replace(/[^\d]/g,'')】-->
              <!--设置为readonly的input将会有下面的限制： -->
              <!-- - 可以接收焦点但不能被修改-->
              <!-- - 可以使用tab键进行导航-->
              <!-- - 可能是successful的-->
              <input class="num_rmb" type="text" name="totalAmount" :value="money" @blur="change(money)" onkeyup="this.value=this.value.replace(/[^\d]/g,'')" :readonly="readonly" style="background-color: white">
            </van-col>
            <van-col span="6"></van-col>
          </van-row>
        </div>
      </van-panel>
      </label>
      <!--<label class="type1" style="width: 100%;margin-top: 1rem">-->
        <div class="clearfix" style="width: 100%;margin-top: 1rem">
          <van-row type="flex" justify="space-around">
            <van-col span="6">
              <!--绑定多个类名，其中一个是活动类名的新学到的写法，用对象把两个类名包起来，然后给固定类名加true，给需要判断条件的类名加条件，注意类名要单引号起来-->
              <span :class="{'a-num':true,'active':num==1}" @click="one()">一个月</span>
            </van-col>
            <van-col span="6">
              <span :class="{'a-num':true,'active':num==2}" @click="three()">三个月</span>
            </van-col>
            <van-col span="6">
              <span :class="{'a-num':true,'active':num==3}" @click="halfYear()">半年</span>
            </van-col>
          </van-row>
          <van-row style="margin-top: 1rem">
            <van-col span="8">
              <span :class="{'a-num':true,'active':num==4}" @click="oneYear()">一年</span>
            </van-col>
            <van-col span="8">
              <span :class="{'a-num':true,'active':num==5}" @click="other()">其他金额</span>
            </van-col>
          </van-row>
        </div>
      <!--</label>-->
      <!--label标签中for的id值，代表将id所指块获取聚焦，就自动选中和该 label标签相关连的表单控件上-->
      <label for="weixinSub" style="width: 100%;margin-top: 1rem">
      <van-cell is-link id="weixinSub">
        <van-row>
          <van-col span="2">
            <div style="width: 100%;height: 100%;">
              <img src="../assets/Company/weixin.jpg" alt="" style="width: 100%;">
            </div>
          </van-col>
          <van-col span="20">
            <input type="button" value="微信支付" @click="submitWei(actionWei)" style="width: 100%;border: none;background-color: white;text-align: left;height: 100%;">
          </van-col>
        </van-row>
        </van-cell>
      </label>
      <label for="zhifubaoSub" style="width: 100%;">
        <van-cell is-link id="zhifubaoSub">
          <van-row>
            <van-col span="2">
              <div style="width: 100%;height: 100%;">
                <img src="../assets/Company/zhifubao.png" alt="" style="width: 100%;">
              </div>
            </van-col>
            <van-col span="20">
              <input type="button" value="支付宝" @click="submitZhifubao(actionZhifubao)" style="width: 100%;border: none;background-color: white;text-align: left;height: 100%;">
            </van-col>
          </van-row>
        </van-cell>
      </label>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        money:30,
        num:1,
        user:'',
        disabled:true,
        readonly:true,
        isMember:true,
        actionWei:'http://app.zhongtongguanglian.com:8080/wxpay/pay',
        actionZhifubao:'http://app.zhongtongguanglian.com:8080/alipay/pay'
      }
    },
    methods:{
      change(val){
        if (val < 10) {                                              // 判断里面的值是否大于10，小于10让他大于10
         this.money = 10;
        }
      },
      one(){
        // 点击后选中添加active除其他兄弟元素的active
        // $(this).addClass("active").siblings().removeClass("active");
        this.num=1;
        this.money = 30;
        this.readonly = true;
        this.isMember = true;
        this.disabled = true;

      },
      three(){
        // $(this).addClass("active").siblings().removeClass("active");
        this.money = 90;
        this.num=2;
        this.readonly = true;
        this.isMember = true;
        this.disabled = true;

      },
      halfYear(){
        // $(this).addClass("active").siblings().removeClass("active");
        this.money = 120;
        this.num=3;
        this.readonly = true;
        this.isMember = true;
        this.disabled = true;

      },
      oneYear(){
        // $(this).addClass("active").siblings().removeClass("active");
        this.num=4;
        this.money = 240;
        this.readonly = true;
        this.isMember = true;
        this.disabled = true;

      },
      other(){
        // $(this).addClass("active").siblings().removeClass("active");
        this.money = '';
        this.num=5;
        this.readonly = false;
        this.isMember = false;
        this.disabled = false;

      },
      // 发起网络请求,查询维保企业自己的信息
      getSelfData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/user/WBQYfindAllContract",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("查询自己信息",res);
          this.user = res.data.data[0].wbqy.username;
          console.log("维保企业信息user"+this.user);
        }).catch((error)=>{
          console.log(error);
        })
      },
      submitWei(path){
        // console.log("val"+$('.num_rmb').val());
        if(this.money == '' || $('.num_rmb').val() < 10){
          console.log("金额不能为空！");
        }else if(this.isMember){
          // 如果选择交的是会费
          console.log(this.readonly);
          var data = $('#form1').serialize();
          console.log("表单数据"+data);
          console.log("path"+path);
          $("#form1").removeAttr('action');
          $("#form1").attr('action',path);
          // $('#form1').action=path;此方法不通
          $('#form1').submit();
        }else{
          // 如果选择交的是其他金额
          var data = $('#form1').serialize();
          console.log("表单数据"+data);
          console.log("path"+path);
          $("#form1").removeAttr('action');
          $("#form1").attr('action',path);
          $('#form1').submit();
        }

      },
      submitZhifubao(path){
        if(this.money == '' || $('.num_rmb').val() < 10){
          console.log("金额不能为空！");
        }else if(this.isMember){
          console.log(this.readonly);
          var data = $('#form1').serialize();
          console.log("表单数据"+data);
          console.log("path"+path);
          $("#form1").removeAttr('action');
          $("#form1").attr('action',path);
          // $('#form1').action=path;
          $('#form1').submit();
        }else{
          // 如果选择交的是其他金额
          var data = $('#form1').serialize();
          console.log("表单数据"+data);
          console.log("path"+path);
          $("#form1").removeAttr('action');
          $("#form1").attr('action',path);
          $('#form1').submit();
        }
      }
    },

    created(){
      // 查询企业信息，获取用户名
      this.getSelfData();
    }
  }
</script>
<style>
  html,body{
    background-color: white;
  }
  #form1 .a-num {
    width: 8rem;
    height: 4rem;
    line-height: 4rem;
    border: 1px solid #ececec;
    border-radius: 4px;
    display: inline-block;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    cursor: pointer;
  }
  /* 选中后加蓝色边框 显示小图片 */
  #form1 .active {
    border: 1px solid #229fe7;
  }
  .num_rmb {
    margin-right: 0;
    width: 10rem;
    height: 3rem;
    line-height: 3rem;
    /*border: 1px solid #ececec;*/
    border: none;
    border-radius: 4px;
    display: inline-block;
    font-size: 2.3rem;
    color: #333;
    padding: 0 12px;
  }
  .title>span{
    font-size: 1.5rem;
  }
</style>
