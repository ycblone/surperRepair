<template>
  <div>
    <el-tabs type="border-card" class="el-tabs">
      <el-tab-pane label="巡检工单管理" class="el-tab-pane">
        <!--物业对巡检工单信息的展现 -->
        <el-table
          :data="data.filter(data => !search || data.creationTime.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%">
          <el-table-column
            label="设备名称"
            width="90"
            prop="equipment.name">
          </el-table-column>
          <el-table-column
            label="维保企业"
            width="90"
            prop="wbqy.username">
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
              <router-link :to="{ name: 'PatrolReminderSelect', params: { xjgdId: scope.row.id }}">
                <el-button size="mini" type="primary" icon="el-icon-edit" class="input-group">巡检工单查看</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style>
  .el-tabs--border-card>.el-tabs__content{
    padding: 0px;
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
        message: "巡检工单信息数据",
        msg: false,
        notnull: false
      }
    },
    created(){
      this.select();
    },
    methods: {
      select: function () {
          this.$http
            .post(
              "/polling/selectPollingLogByWY",
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
                  "xjgd",
                  JSON.stringify(res.data.token)
                );
                this.data = res.data.data;
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
