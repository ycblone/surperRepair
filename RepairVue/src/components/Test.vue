<template>
  <div class="word">
    <span style="font-size: 30px">登录</span>

    <!--Login-->
    <div style="margin-top:30px ">
      
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          icon="question"
          placeholder="请输入用户名"
          @click-icon="$toast('question')"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeKey: 0
      };
    },

    methods: {
      onChange(key) {
        this.activeKey = key;
      }
    }
  }
</script>

<style scoped>

  .word {
    color: grey;
  }
</style>
