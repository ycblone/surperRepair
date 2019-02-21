<template>
  <div id="subPoll">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;" class="header">
      <van-col span="4">
        <router-link to="polling">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="9" offset="2">巡检结果</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <van-cell-group style="margin-top: 1rem;">
      <van-field
        v-model="message"
        label="巡检描述："
        type="textarea"
        placeholder="请输入"
        rows="3"
        autosize  style="font-size: 1.8rem;"
      />
    </van-cell-group>
    <van-row style="font-size: 1.8rem;">
      <van-col span="7">
        <span style="line-height: 9rem;">上传图片：</span>
        <!--<van-icon name="photograph" style="font-size: 2rem;"/>-->
      </van-col>
      <van-col span="10" style="margin-left: -5rem">
        <!--使用vant图片上传插件-->
        <van-uploader :after-read="onRead">
          <!--图片预览修饰作用-->
          <img class="head-img" src="../../../src/assets/Company/nothing.jpg" ref="goodsImg" style="width: 55%;height: 8.5rem;margin-left: 6rem">
        </van-uploader>
      </van-col>
      <van-col span="8" style="padding-top: 3rem"><span style="font-size: 1.5rem;" class="imgSpan">未选择任何文件</span></van-col>
    </van-row>
    <van-button size="large" style="margin-top: 1rem" @click="subPollData">上传巡检结果</van-button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        imgData:'',
        message:"",
        pollId:''
      }
    },
    methods:{
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
            //图片路径
            that.imgData = data.data;
            console.log("data",data);
          },
          error:function(e){
            alert("错误！！");
          }
        });
      },
      // 发起网络请求
      subPollData(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        // console.log(JSON.parse(window.localStorage.getItem("token") || "[]").toString());
        this.$http.post("/polling/uploadPollingResult",{
          pollingId:this.pollId,
          pollingEndPicUrls:this.imgData,
          pollingMsg:this.message
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("上传结果",res);
        }).catch((error)=>{
          console.log(error);
        })
      },
      //接收传来的id
      getId(){
        this.pollId = this.$route.params.pollId;
      }
    },
    created(){
      this.getId();

    }
  }

</script>
<style>
  .header{
    background: url(../../assets/image/worker1.jpg)no-repeat;
    background-position: -9px -8px;
  }
</style>
