import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import Index from '@/components/Index'
import Login from "@/components/Login";

import Add from "@/components/property/deviceManage/add";

import Company from "@/components/Company";
import Test from "@/components/Test";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },

    {
      path:'/equipment/add',
      name:'add',
      component:Add
},{
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/company',
      name: 'company',
      component: Company

    }
  ]
})
