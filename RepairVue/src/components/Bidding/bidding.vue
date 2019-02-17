<template>
  <div id="bidding">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="/company">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="6" offset="2">竞价抢修</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <div v-for="(bid,index) in biddingReq" style="text-align: left">
      <van-panel :title="bid.title" :desc="bid.content" :status="bid.wy.name">
        <div><img :src="imgsrc+bid.pic" alt=""></div>
        <div slot="footer" style="text-align: right">
          <van-button size="small" @click="sendId(bid,index)">一键竞价</van-button>
        </div>
      </van-panel>
    </div>
    <van-popup v-model="show" style="width: 93%;border-radius: 1rem;font-size: 1.5rem">
      <div class="showMask">
        <van-cell-group  style="margin-top: 20px">
          <van-field  placeholder="企业名称：" v-model="comName"/>
          <van-field  placeholder="报价：" v-model="price"/>
          <van-field  placeholder="联系人：" v-model="callOne"
          />
          <van-field  placeholder="联系方式：" v-model="callWay"/>
          <van-field  placeholder="所在城市" v-model="city"/>
          <van-row>
            <van-col span="6" offset="1">
              <input type="file" id="file1" style="outline: none; "/>
            </van-col>
            <van-col span="10" offset="4">
              <input type="button" id="upload" value="上传"  @click="upload" style="border:1px solid #ccc;background:#fff"/>
            </van-col>
          </van-row>
        </van-cell-group>

        <van-button type="default" style="margin-top: 2rem" @click="sendpice">确定</van-button>
      </div>
    </van-popup>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        biddingReq:'',
        show:false,
        reqId:'',
        imgsrc:'http://localhost:8080/',
        comName:'',
        price:'',
        callOne:'',
        callWay:'',
        city:'',
        loadsrc:""
      }
    },
    methods:{
      // 上传附件
      upload(){
        var formData = new FormData();
      //这里用jq没成功，原生语法成了，待解
        formData.append("file",document.getElementById("file1").files[0]);
        $.ajax({
          url: "http://localhost:8080/user/uploadPic",
          type: "POST",
          data: formData,
          contentType: false,
          processData: false,
          beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Auth-Token", JSON.parse(window.localStorage.getItem("token") || "[]").toString());
          },
          success: function (data) {
            alert(data.msg);
            console.log(data);
            this.loadsrc = data.data;
          },
          error: function () {
            alert("上传失败！");
          }
        });
      },
      sendId(v,index){
        this.show = true;
        this.reqId = v.id;
      },
      sendpice(){
        this.show = false;
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        this.$http.post("/auction/wbqyAuction",{
          "id":this.reqId,
          "name":this.comName,
          "price":this.price,
          "lianxiren":this.callOne,
          "phone":this.callWay,
          "city":this.city,
          "fujianurl":this.loadsrc
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("竞价抢修",res);
        }).catch((error)=>{
          console.log(error);
        });
      },
      getBiddingM(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        this.$http.post("/auction/wbqyViewRequirement",{},{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("物业需求",res);
          this.biddingReq = res.data.data;
        }).catch((error)=>{
          console.log(error);
        });
      },

    },
    created(){
      this.getBiddingM();
    }

  }
</script>
<style scoped>



</style>
