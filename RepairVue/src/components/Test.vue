<template>
  <div class="dial-header">
        <!--<el-dialog title="请选择适配器" :visible.sync="showFlag" style="width:100%;">
          <div style="text-align: left; height: 30px" >


            &lt;!&ndash;<div class="adp" v-for="adapter in adapters" style="width:300px;height:30px;line-height:30px;border-top:none;margin:0px 0px 0px 40px">
              <el-radio :label="adapter.ip" style="width:200px;padding-left:40px" v-model="radio"></el-radio>
              <div style="display: inline-block;width:30px"><img v-if="!adapter.val" src="../assets/image/ComplaintM.png"><img v-if="adapter.val" src="../assets/image/ComplaintM.png"></div>
            </div>&ndash;&gt;
            <div style="padding-top:20px;text-align: right">
              <el-button type="text" size="small" @click="showFlag = false">取消</el-button>
              <el-button type="primary" size="small" @click="radioEvent()">确定</el-button>
            </div>


          </div>
        </el-dialog>


       <el-button type="primary" @click="showFlag = true">选择</el-button>-->
        <form action="http://www.haojunqian.cn:8080/alipay/pay" methods="post" >

         标题： <input type="text" name="subject" value=""/>
         文本： <input type="text" name="body" value=""/>
         金额： <input type="text" name="totalAmount" value=""/>
          <input type="submit" value="提交数据"/>
        </form>
   </div>
</template>
