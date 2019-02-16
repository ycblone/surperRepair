<template>
  <div id="showPartsM">
    <van-row type="flex" justify="space-between" style="height: 67px;background-color: darkgoldenrod;color: whitesmoke;font-size: 20px;font-weight: bold;line-height: 67px;letter-spacing:4px;">
      <van-col span="4">
        <router-link to="selectAll">
          <van-icon name="arrow-left" size="1em" color="white"/>
        </router-link>
      </van-col>
      <van-col span="8" offset="2">{{partsName}}</van-col>
      <van-col span="6"></van-col>
    </van-row>
    <van-cell-group style="padding-top: 20px">
      <van-field
        clearable
        v-model="partsName"
        label="配件名称："
      />
      <van-field
        clearable
        v-model="partsId"
        label="配件ID："
      />
      <van-field
        label="配件类型："
        v-model="partsType"
        rows="3"
      />
      <van-field
        clearable
        v-model="partsPeice"
        label="价格："
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
  </div>
</template>
<script>
  export default {
    created(){
      this.getpartsM();
    },
    data(){
      return{
        partsData:'',
        partsName: '',
        partsId:'',
        partsType: '',
        partsPeice: '',
        partsNum: '',
        partsUse: '',
        partsNote: ''
      }
    },
    methods:{
      getpartsM(){
        this.partsData = this.$route.query.partsMessage;
        this.partsName = this.partsData.name;
        this.partsId = this.partsData.id;
        this.partsType = this.partsData.type;
        this.partsPeice = this.partsData.peice;
        this.partsNum = this.partsData.number;
        this.partsUse = this.partsData.useEquipment;
        this.partsNote = this.partsData.beizhu;
      }
    }
  }
</script>
<style></style>
