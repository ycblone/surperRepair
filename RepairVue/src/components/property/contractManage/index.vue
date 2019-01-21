<template>
  <div>
    <el-tabs type="border-card" class="el-tabs">
      <el-tab-pane label="合同管理" class="el-tab-pane">
        <!--物业所对应的合同展示 -->
        <el-table
          :data="data.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="维保单位">
                  <span>{{ props.row.wbqy.id}}</span>
                </el-form-item>
                <el-form-item label="合同内容">
                  <span>{{ props.row.content}}</span>
                </el-form-item>
                <el-form-item label="开始时间">
                  <span>{{ props.row.startDate }}</span>
                </el-form-item>
                <el-form-item label="结束时间">
                  <span>{{ props.row.endDate }}</span>
                </el-form-item>
                <el-form-item label="负责人">
                  <span>{{ props.row.fuzeren }}</span>
                </el-form-item>
                <el-form-item label="付款方式">
                  <span>{{ props.row.fukuanfangshi }}</span>
                </el-form-item>
                <el-form-item label="付款时间">
                  <span>{{ props.row.fukuanshijian}}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>

          <el-table-column
            label="序号"
            width="90"
            prop="id">
          </el-table-column>
          <el-table-column
            label="合同内容"
            width="90"
            prop="content">
          </el-table-column>
          <el-table-column
            width="135"
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="关键字搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="添加合同">
        <!--equipmentAdd-->
        <div style="margin-top:30px;padding:10px ;">
          <div class="title">
            <h2>添加合同</h2>
          </div>
          <el-input class="input-group" v-model="wbqy" v-on:focus="errmiss"
                    placeholder="维保企业">
          </el-input>
          <el-input class="input-group" v-model="content" v-on:focus="errmiss"
                    placeholder="合同内容">
          </el-input>
          <el-input class="input-group" type="date" v-model="startDate" v-on:focus="errmiss"
                    placeholder="开始日期">
          </el-input>
          <el-input class="input-group" type="date" v-model="endDate" v-on:focus="errmiss"
                    placeholder="结束日期">
          </el-input>
          <el-input class="input-group" v-model="fuzeren" v-on:focus="errmiss"
                    placeholder="负责人">
          </el-input>
          <el-input class="input-group" v-model="fukuanfangshi" v-on:focus="errmiss"
                    placeholder="付款方式">
          </el-input>
          <el-input class="input-group" type="date" v-model="fukuanshijian" v-on:focus="errmiss"
                    placeholder="付款时间">
          </el-input>
          <el-button type="primary" class="input-group btn-login" @click="add" :loading="loading">提交</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
  .el-tabs--border-card>.el-tabs__content{
    padding: 0px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .mx {
    background-color: blue;
    color: #6c6c6c;
  }
  .btn-login {
    width: 100%;
  }
  .title {
    text-align: center;
  }
  .input-group {
    margin-top: 2%;
  }
</style>

<script>
  export default {

    data() {
      return {
        data:[],
        search: '',
        wbqy: '',
        content: '',
        startDate: '',
        endDate: '',
        fuzeren: '',
        fukuanfangshi: '',
        fukuanshijian: '',
        message: "合同信息数据",
        loading: false,
        msg: false,
        notnull: false
      }

    },
    created(){
      this.select()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      errmiss: function () {
        if (this.msg === true || this.notnull === true) {
          this.msg = false;
          this.notnull = false;
        }
      },
      add: function () {
        if (this.content === "" || this.fuzeren === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.content, this.fuzeren)
          this.$http
            .post(
              "/user/addContract",
              {
                wbqy: this.wbqy,
                content: this.content,
                startDate: new Date(this.startDate).getTime(),
                endDate: new Date(this.endDate).getTime(),
                fuzeren: this.fuzeren,
                fukuanfangshi: this.fukuanfangshi,
                fukuanshijian: new Date(this.fukuanshijian).getTime()
              },
              {
                headers: {
                  'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                  'Content-Type': 'application/json'
                }
              },
              {
                emulateJSON: true,
              }
            )
            .then(res => {
              if (res.data.code === "1") {
                window.localStorage.setItem(
                  "contract",
                  JSON.stringify(res.data.token)
                );
                this.$router.push({
                  path: "/index"
                });
              } else {
                this.$router.push({
                  path: "/"
                });
                this.msg = true;
                console.log("this is fail", res);
              }
            })
            .catch(err => {
              this.$notify({
                title: "添加失败",
                message: "服务器请求失败，请检查网络或联系管理员",
                type: "error"
              });
              console.log(err);
            });
        }
      },
      select: function () {
        this.$http
          .post(
            "/user/wyFindAllContract",
            {},
            {
              headers: {
                'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                'Content-Type': 'application/json'
              }
            },
            {
              emulateJSON: true,
            }
          )
          .then(res => {
            if (res.data.code === "1") {
              window.localStorage.setItem(
                "contract",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data,
              console.log("this.msg："+res.data.msg)
            } else {
              this.$router.push({
                path: "/"
              });
              this.msg = true;
              console.log("this is fail", res);
            }
          })
          .catch(err => {
            this.$notify({
              title: "访问失败",
              message: "服务器请求失败，请检查网络或联系管理员",
              type: "error"
            });
            console.log(err);
          });
      }
    }
  }
</script>
