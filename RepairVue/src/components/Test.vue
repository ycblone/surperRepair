<template>

  <div>
    <button @click="test1">test
    </button>
    <span>{{texts}}</span>
  </div>
</template>

<script>
  export default {
    name: "Test",
    data() {

      return {
        texts: ''
      }
    },
    methods: {
      test: function () {

        this.$http
          .post(
            "/equipment/addEquipment",
            {
              name: "饮水机",
              type: "高层饮水机",
              miaoshu: "我是高贵的饮水机",
              isTeZhongSheBei: "0",
              bumeng: "饮水机部门",
              wbqy: {id: "2"}
            }
            // {
            //   headers: {
            //     'Auth-Token': 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NDY0MTkxMjMsInN1YiI6InR0dCIsImNyZWF0ZWQiOjE1NDM4MjcxMjM2NjF9.xppMpkvngFbWJSD4mXOR62j5nIh0a4Z8eYVNPvWM3S8qwJx6u5Gyh8zYnFvU4k_p_DVGjNAPmgSG9-rqtvbnPg',
            //     'Content-Type': 'application/json'
            //   }
            // },
            // {emulateJSON: true}


          )
          .then(res => {

            console.log("the res is ", res);
          })
          .catch(err => {
            console.log(err);
          });
      },
      test1: function () {

        this.$http
          .post(
            "/hello",

            {},
            {
              headers: {
                'Auth-Token': JSON.parse(window.localStorage.getItem("token") || "[]").toString(),
                'Content-Type': 'application/json'
              }
            }
          )
          .then(res => {

            this.texts = res.data.loginUser;
            console.log("the res1111 is ", res.data.loginUser);

            console.log("the res is ", res.data);
          })
          .catch(err => {
            console.log(err);
          });
      },
    }
  }
</script>

<style scoped>

</style>
