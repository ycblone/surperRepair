import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register';
import Index from '@/components/Property';
import Login from "@/components/Login";
import deviceEdit from "@/components/property/deviceManage/edit";
import deviceIndex from "@/components/property/deviceManage/index";
import deviceWarranty from "@/components/property/deviceManage/warranty";
import warrantyMes from "@/components/property/deviceManage/warrantyMes";
import complaintIndex from "@/components/property/complaintManage/index";
import repairMain from "@/components/property/complaintManage/repairMain";
import repairMain1 from "@/components/property/deviceManage/repairMain";
import contractAdd from "@/components/property/contractManage/add";
import announceAdd from "@/components/property/announceManage/add";
import announceIndex from "@/components/property/announceManage/index";
import demandEdit from "@/components/property/demandManage/edit";
import demandIndex from "@/components/property/demandManage/index";
import patrolReminderIndex from "@/components/property/PatrolReminder/index";
import editSubAccount from "@/components/property/editSubAccount";
import GenerateSubAccount from "@/components/property/GenerateSubAccount";
import subAccount from "@/components/property/subAccount";
import contractIndex from "@/components/property/contractManage/index";
import Company from "@/components/Company";
import blackPage from "@/components/property/black";
import test from "@/components/test";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/equipment/edit/:elementId',
      name:'elementEdit',
      component:deviceEdit
    },
    {
      path:'/equipment/warrantyMes/:elementId',
      name:'warrantyMes',
      component:warrantyMes
    },
    {
      path:'/equipment/index',
      name:'equipmentIndex',
      component:deviceIndex
    },
    {
      path:'/equipment/warranty',
      name:'warrantyIndex',
      component:deviceWarranty
    },
    {
      path:'/contract/add',
      name:'contractAdd',
      component:contractAdd
    },
    {
      path:'/contract/index',
      name:'contractIndex',
      component:contractIndex
    },
    {
      path:'/announce/add',
      name:'announceAdd',
      component:announceAdd
    },
    {
      path:'/announce/index',
      name:'announceIndex',
      component:announceIndex
    },
    {
      path:'/demand/edit',
      name:'demandEdit',
      component:demandEdit
    },
    {
      path:'/demand/index',
      name:'demandIndex',
      component:demandIndex
    },
    {
      path:'/complaint/repair/:repairId',
      name:'repair',
      component:repairMain
    },
    {
      path:'/repairManage/repair/:repairId',
      name:'repair1',
      component:repairMain1
    },
    {
      path:'/complaint/index',
      name:'complaintIndex',
      component:complaintIndex
    },
    {
      path:'/patrolReminder/index',
      name:'patrolReminderIndex',
      component:patrolReminderIndex
    },
    {
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
    },
    {
      path: '/blackPage',
      name: 'blackPage',
      component: blackPage
    },
    {
      path: '/editSubAccount',
      name: 'editSubAccount',
      component: editSubAccount
    },
    {
      path: '/GenerateSubAccount',
      name: 'GenerateSubAccount',
      component: GenerateSubAccount
    },
    {
      path: '/subAccount',
      name: 'subAccount',
      component: subAccount
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
