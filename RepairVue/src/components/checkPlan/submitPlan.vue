<template>
  <div id="submitPlan">
    <div class="header" style="border-bottom: 1px solid gray">
      <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
        <van-col span="4">
          <router-link to="selectAllEquipment">
            <van-icon name="arrow-left" size="1em" color="white"/>
          </router-link>
        </van-col>
        <van-col span="8" offset="2">巡检计划</van-col>
        <van-col span="6"></van-col>
      </van-row>
    </div>
    <van-cell-group  style="padding-top: 1rem">
      <van-row>
        <van-col span="24" id="span">
          <van-field label="巡检时间:" v-model="checkTime" placeholder="格式：2019-01-15" style="font-size: 1.8rem"/>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="7" style="margin-left: -0.3rem;margin-top: 1rem">
          <span style="font-size: 1.8rem">巡检类型</span>
        </van-col>
        <van-col span="7" style="margin-top: 1rem;">
          <!--通过v-model绑定值当前选中项的 name-->
          <van-radio-group v-model="radio">
            <van-radio name="1">周检</van-radio>
            <van-radio name="2" style="margin-top: 0.5rem">月检</van-radio>
            <van-radio name="3" style="margin-top: 0.5rem">季检</van-radio>
            <van-radio name="4" style="margin-top: 0.5rem">年检</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>

      <van-row style="margin-top: 5rem;font-size: 1.8rem;">
        <van-col span="7">
          <span style="line-height: 9rem;">图片</span>
          <van-icon name="photograph" style="font-size: 2rem;"/>

        </van-col>
        <van-col span="10" style="margin-left: -5rem">
          <!--使用vant图片上传插件-->
          <van-uploader :after-read="onRead">
            <!--图片预览修饰作用-->
            <img class="head-img" src="../../../src/assets/Company/nothing.jpg" ref="goodsImg" style="width: 60%;height: 10rem;margin-left: 6rem">
          </van-uploader>
        </van-col>
        <van-col span="8" style="padding-top: 3rem"><span style="font-size: 1.5rem;" class="imgSpan">未选择任何文件</span></van-col>
      </van-row>
    </van-cell-group>
    <van-button size="large" class="dis" :disabled="disabled" @click="submit">提交</van-button>
    <van-button size="large" @click="selectWorkers" v-if="isAggre == 1">派出维修工</van-button>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-picker
        show-toolbar
        title="请选择维修技师"
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        equip:'',
        radio:'1',
        checkTime:'',
        file:'',
        disabled:false,
        imgData:'',
        isAggre:'',
        show:false,
        columns: [],
        fixerData:""
      }
    },
    methods:{
      // 接收设备id
      getEuip(){
        this.equip = this.$route.params.equip;
        this.isAggre = this.$route.params.isAggre;
        if(this.isAggre == 1){
          $(".dis").attr("disabled","false");
          $(".dis").css("background","whitesmoke");
        }
      },
      onRead(file) {
        // 将选中图片展示在界面上
        this.$refs.goodsImg.src = file.content;
        // 创建formData对象
        var formData = new FormData();
        // 往formData对象添加键值对，值为file.file
        formData.append("file", file.file);
        // ajax里的this不是指向的vue实例,创建实例别名that
        var that = this;
        // Ajax网络请求
        $.ajax({
          url:"http://localhost:8080/user/uploadPic",
          type:"post",
          data:formData,
          processData:false,
          contentType:false,
          beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Auth-Token", JSON.parse(window.localStorage.getItem("token") || "[]").toString());
          },
          success:function(data){
            // 上传成功code返回1
            if(data.code == 1){
              // 将图片旁边的span文本转换
              $(".imgSpan").text("");
            }
            that.imgData = data.data;
            console.log("data",data);
          },
          error:function(e){
            alert("错误！！");
          }
        });
      },
      // 提交计划网络请求
      submit(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        console.log("imgdata",this.imgData);

        this.$http.post("/polling/WBQYSettingPollingPlan",{
          "id":this.equip,
          "firstPollingTime":this.checkTime,
          "pollingType":this.radio,
          "pollingPicUrls":this.imgData
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("提交计划",res);
          if(res.data.code == 1){
            $(".dis").attr("disabled","false");
            $(".dis").css("background","whitesmoke");
            $(".dis").text("待审核");

          }

        }).catch((error)=>{
          console.log(error);
        })
      },
      // 查询所有维修工
      selectWorkers(){
        this.$http.post("/user/findWXGsByWBQYUsername",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("维修工信息",res);
          this.fixerData = res.data.data;
          // 用forEach方法遍历数组
          this.fixerData.forEach(item=>
          {
            // 把name用push方法依次放在数组的末尾  push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            this.columns.push(item.name);
          })
          this.show = true;
        }).catch((error)=>{
          console.log(error);
        })
      },
      onConfirm(value, index) {

        console.log("点击维修工号",this.fixerData[index].id);
        // this.fixerData[index].id  是当前确定技师的id。
        this.$http.post("/polling/createPollingLog",{
          "equipmentId":this.equip,
          "WXGId":this.fixerData[index].id,
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("派出成功",res);
          this.show = false;
          this.$toast('派出成功');
        }).catch((error)=>{
          console.log(error);
        })
      },
      onCancel() {
        this.show = false;
      }
    },
    created(){
      this.getEuip();
    }
  }

</script>
<style scoped>
  /*vant单选框点击效果似乎被其他默认样式影响，导致点击位置下移，查看控制台后，在此清零*/
  input[type="radio"], input[type="checkbox"]{
    margin: 0;
  }
</style>
