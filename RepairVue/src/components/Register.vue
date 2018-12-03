<template>

  <div class="content">
    <van-nav-bar
      title="注册"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div style="margin-top:30px;margin-right: 20px">

      <div class="title">
        <h2>注册</h2>
      </div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="20px" class="demo-ruleForm">

        <el-form-item prop="username">
          <el-input class="input-group" v-model="ruleForm2.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-select v-model="value7" placeholder="请选择" style="width: 100%;margin-top: 8px">
            <el-option-group
              v-for="group in options3"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
          <!--<el-button @click="test">重置</el-button>-->
        </el-form-item>
      </el-form>


    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      /**
       * 表单验证
       * @param rule
       * @param value
       * @param callback
       * @returns {*}
       */
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        message: "测试数据",
        loading: false,
        msg: false,
        notnull: false,
        checked: false,
        classId: "",
        options3: [{
          label: '选择角色',
          options: [{
            value: 1,
            label: '物业'
          }, {
            value: 2,
            label: '维保企业'
          }]
        }],
        value7: '',
        ruleForm2: {
          username: '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        }
      };
    },

    methods: {

      /**
       * 表单提交与重置
       * @param formName
       */
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.register();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      onClickLeft() {
        this.$router.push({
          path: "/"
        });
      },
      register: function () {


        this.$http
          .post(
            "/register",
            {
              username: this.ruleForm2.username,
              password: this.ruleForm2.pass,
              role: this.value7
            },
            {
              emulateJSON: true,
            }
          )
          .then(res => {
            if (res.data.code === "1") {
              console.log("Regis msg is ",res.data);
              // window.localStorage.setItem(
              //   "user",
              //   JSON.stringify(res.data.msg)
              // );
              // window.localStorage.setItem(
              //   "token", JSON.stringify(res.data.token)
              // );
              this.$router.push({
                path: "/"
              });
            } else {
              this.msg = true;
              console.log("this is fail", res);
            }
          })
          .catch(err => {
            this.$notify({
              title: "注册失败",
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

  .content {
    /*margin-top: 40%;*/
  }
</style>
