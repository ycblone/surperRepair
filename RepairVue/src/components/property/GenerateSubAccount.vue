<!-- 物业生成子账号-->
<template>
  <div>
    <el-table
      ref="filterTable"
      :data="data.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名称"
        sortable
        width="120"
        column-key="date">
      </el-table-column>
      <el-table-column
        prop="city"
        label="所属地址"
        width="100">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <router-link :to="{ name: 'repair', params: { repairId: scope.row.id }}">子账号详情</router-link>;
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data:[],
        search: '',
        radio: "",
      }
    },
    created(){
      this.select()
    },
    methods: {
      select: function () {
        this.$http
          .post(
            "/actionLog/findActionLogByWyUsername",
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
                "GenerateSubAccount",
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

<style scoped>

</style>
