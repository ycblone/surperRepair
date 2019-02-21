<template>
  <div id="editFixerM">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="/fixerManage/editFixerMessage">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">{{fixerName}}</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <van-cell-group style="padding-top: 1rem">
      <van-field
        clearable
        v-model="fixerId"
        disabled
        label="维修工号："
      />
      <van-field
        clearable
        v-model="fixerUsername"
        disabled
        label="账号："
      />
      <van-field
        label="密码："
        v-model="fixerPassword"
      />
      <van-field
        clearable
        v-model="fixerName"
        label="姓名："
      />
      <van-field
        clearable
        v-model="fixerPhone"
        label="电话："
      />
      <van-field
        clearable
        v-model="fixerEmail"
        label="email："
      />

    </van-cell-group>
    <van-button size="normal" type="default" style="margin-left: -20px" @click="submit">修改</van-button>
    <van-popup v-model="show">
      <div class="showMask" style="width: 25rem;height:13rem;">
        <p style="line-height: 86px;margin-left:20px;font-size: 20px;font-weight: bold;">修改成功！</p>
        <button style="background-color: #4CAF50;border: none;color: white;padding: 6px 21px;text-align: center;text-decoration: none;display: inline-block;font-size: 13px;" @click="show = false">确定</button>
      </div>
    </van-popup>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        fixerM:'',
        fixerId: '',
        fixerUsername:'',
        fixerPassword: '',
        fixerName: '',
        fixerPhone:'',
        fixerEmail: '',
        show:false
      }
    },
    methods:{
      submit(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        this.$http.post("/user/wbqyupdateWXG",{
          "username":this.fixerUsername,
          "password":this.fixerPassword,
          "name":this.fixerName,
          "email":this.fixerEmail,
          "phone":this.fixerPhone

        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("111",res);
          this.show = true;
        }).catch((error)=>{
          console.log(error);
        })
      },
      getFixerM(){
          this.fixerM = this.$route.query.fixerM;
          this.fixerUsername = this.fixerM.username;
          this.fixerId = this.fixerM.id;
          this.fixerPassword = this.fixerM.password;
          this.fixerName = this.fixerM.name;
          this.fixerEmail = this.fixerM.email;
          this.fixerPhone = this.fixerM.phone;

      },
      // 点击返回到上个组件
      clickH(){
        this.$router.replace({path:'/fixerManage/editFixerMessage'});
      }
    },
    created(){
      this.getFixerM();
    }

  }
</script>
<style scoped>
  .van-field{
    margin-top: 20px;
  }
</style>
