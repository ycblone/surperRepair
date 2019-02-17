<template>
  <div id="partsAddM">
    <van-cell-group style="padding-top: 1rem">
      <van-field
        clearable
        v-model="partsName"
        label="配件名称："
      />

      <van-field
        label="配件类型："
        v-model="partsType"
        rows="3"
      />
      <van-field
        clearable
        v-model="partsPeice"
        label="价格(元)："
      />
      <van-field
        clearable
        v-model="partsNum"
        label="数量："
      />
      <van-field
        clearable
        v-model="partsUse"
        label="使用项目："
      />
      <van-field
        clearable
        type="textarea"
        rows="3" autosize
        v-model="partsNote"
        label="备注："
      />
    </van-cell-group>
    <van-button size="normal" type="default" style="margin-left: -20px" @click="submit">提交</van-button>

  </div>

</template>
<script>
  export default {
    data() {
      return {
        partsName: '',
        partsType: '',
        partsPeice: '',
        partsNum: '',
        partsUse: '',
        partsNote: ''
      }
    },
    methods:{
      submit(){
        // 登录时，token被存在了localStorage里，现在直接调用它做请求头
        this.$http.post("/parts/insertParts",{
          "name":this.partsName,
          "type":this.partsType,
          "useEquipment":this.partsUse,
          "beizhu":this.partsNote,
          "peice":this.partsPeice,
          "number":this.partsNum
        },{
          headers: {
            'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
            'Content-Type': 'application/json'
          }
        }).then((res)=>{
          console.log("111",res);
        }).catch((error)=>{
          console.log(error);
        })
      }
    }

  }
</script>
<style>

</style>
