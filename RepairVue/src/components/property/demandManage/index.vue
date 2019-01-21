<!-- 需求管理-->
<template>
  <div>
    <el-tabs type="border-card" class="el-tabs">
      <el-tab-pane label="需求管理" class="el-tab-pane">
      <el-table
        ref="filterTable"
        :data="data.filter(data => !search || data.text.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="100">
        </el-table-column>
        <el-table-column
          prop="addDate"
          label="发布时间"
          width="100">
        </el-table-column>
        <el-table-column
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
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="添加需求" class="el-tab-pane">
        <div class="title">
          <h2>添加需求</h2>
        </div>
        <el-form ref="form" label-width="80px" size="mini">
          <el-input class="input-group" v-model="title" placeholder="标题">
          </el-input>
          <el-input class="input-group" v-model="content" placeholder="内容">
          </el-input>
          <!--<el-input class="input-group" v-model="pic" placeholder="图片">
          </el-input>-->
          <!--<el-form-item label="限定区域">
            <el-radio-group v-model="sizeForm.resource" size="medium">
              <el-radio border label="省份"></el-radio>
              <el-radio border label="市"></el-radio>
            </el-radio-group>
          </el-form-item>-->
          <el-input class="input-group" v-model="area" placeholder="区域">
          </el-input>
          <el-button type="primary" class="input-group btn-login" @click="add()">发布需求</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data:[],
        title:'',
        pic:'',
        content:'',
        area:'',
        search: '',
        radio: "",
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
      add: function () {
        if (this.title === "") {
          this.notnull = true;
        } else {
          console.log("the msg is ", this.title)
          this.$http
            .post(
              "/auction/wyPublishRequirement",
              {
                title: this.title,
                content: this.content,
                area:this.area
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
                  "demand",
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
            "/auction/wyViewRequirement",
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
                "demand",
                JSON.stringify(res.data.token)
              );
              this.data = res.data.data,
              console.log("this.msg："+res.data.msg);
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
