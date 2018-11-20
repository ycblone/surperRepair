import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Index from '@/components/Index'
import Login from "@/components/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/index',
      name:'index',
      component:Index
    }
  ]
})
