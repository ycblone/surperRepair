import Vue from 'vue'
import Router from 'vue-router'
// import $ from 'jquery' ;
// const Vue = require('vue');
// const Router = require('vue-router');
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import Register from '@/components/Register'
import Index from '@/components/Index'
import Login from "@/components/Login";
import Add from "@/components/property/deviceManage/add";
import Company from "@/components/Company";
import CompanyA from '@/components/companyA'
import Worker from '@/components/Worker'
import Test from "@/components/Test";
import ManagePro from "@/components/managePro";
import ProCon from '@/components/proCon'
import SelfEdit from '@/components/selfEdit'
import PartsManage from '@/components/PartsManage/PartsManage'
import PartsAddMessage from '@/components/PartsManage/PartsAddMessage'
import PartsAddNum from '@/components/PartsManage/PartsAddNum'
import PartsReq from '@/components/PartsManage/PartsReq'
import PartsReqAll from '@/components/PartsManage/PartsReqAll'
import SelectAll from '@/components/PartsManage/SelectAll'
import ShowPartsMessage from '@/components/PartsManage/showPartsMessage'
import FixerManage from '@/components/FixerManage/fixerManage'
import ShowFixerReqs from '@/components/FixerManage/showFixerReqs'
import EditFixerMessage from '@/components/FixerManage/editFixerMessage'
import SendTask from '@/components/FixerManage/sendTask'
import EditFixerM from '@/components/FixerManage/editFixerM'
import RepairList from '@/components/RepairList/RepairList'
import NoRepair from '@/components/RepairList/NoRepair'
import Repairing from '@/components/RepairList/Repairing'
import FinishList from '@/components/RepairList/FinishList'
import Bidding from '@/components/Bidding/bidding'
import Notice from '@/components/Notice/notice'
import AddNotice from '@/components/Notice/addNotice'
import ShowAllRepair from '@/components/RepairList/ShowAllRepair'
import RepairListFixer from '@/components/RepairListFixer/repairListFixer'
import Sign from '@/components/RepairListFixer/sign'
import Saoma from '@/components/RepairListFixer/saoma'
import EditFixerSelf from '@/components/RepairListFixer/editFixerSelf'
import WaitListFixer from '@/components/RepairListFixer/waitListFixer'
import ListHistory from '@/components/RepairListFixer/listHistory'
import SelectParts from '@/components/RepairListFixer/selectParts'
import BackMessage from '@/components/RepairListFixer/backMessage'
import SelectAllEquipment from '@/components/checkPlan/selectAllEquipment'
import SubmitPlan from '@/components/checkPlan/submitPlan'
import PayForMember from '@/components/payForMember'
import Polling from '@/components/RepairListFixer/polling'
import SubmitPoll from '@/components/RepairListFixer/submitPoll'
import Count from '@/components/countCenter/count'
import Fault from '@/components/countCenter/fault'
import CheckHistory from '@/components/countCenter/checkHistory'
import ReplaceParts from '@/components/countCenter/replaceParts'
import Equipment from '@/components/countCenter/equipment'
Vue.use(Router);
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
      // name: 'company',
      component: Company,
      // 嵌套路由
      children:[
        //   // 重定向，默认打开页面是companyA  (注意：当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性。
        // 解决办法：即去除父级的name属性即可。)
        {
          path:"/",
          redirect:{
            name:"companyA"
          }
        },
        {
          path:"/companyA",
          name:"companyA",
          component:CompanyA
        },
        {
          path:"/selfEdit",
          name:"selfEdit",
          component:SelfEdit
        }
      ]
    },
    {
      path: '/worker',
      name: 'worker',
      component: Worker
    },
    {
      path:'/managePro',
      name:'managePro',
      component: ManagePro,
    },
    {
      path: '/proCon',
      name:'proCon',
      component: ProCon
    },
    {
      path:'/partsManage',
      // name:'partsManage',
      component:PartsManage,
      // 嵌套路由
      children:[
        {
          // 重定向，默认打开页面是PartsAddMessage
          path:'/',
          redirect:{
            name:"partsAddMessage"
          }
        },
        {
          path:"/partsManage/partsAddMessage",
          name:"partsAddMessage",
          component:PartsAddMessage
        },
        {
          path:"/partsManage/partsAddNum",
          name:"partsAddNum",
          component:PartsAddNum
        },
        {
          path:"/partsManage/partsReq",
          name:"partsReq",
          component:PartsReq
        },
        {
          path:"/partsManage/partsReqAll",
          name:"partsReqAll",
          component:PartsReqAll
        }
      ]
    },
    {
      path:"/selectAll",
      name:"selectAll",
      component:SelectAll
    },
    {
      path:"/showPartsMessage",
      name:"showPartsMessage",
      component:ShowPartsMessage
    },
    {
      path:"/fixerManage",
      // name:"fixerManage",
      component:FixerManage,
      // 嵌套路由
      children: [
        {
          // 重定向，默认打开页面是showFixerReqs
          path:'/',
          redirect:{
            name:"showFixerReqs"
          }
        },
        {
          path:"/fixerManage/showFixerReqs",
          name:"showFixerReqs",
          component:ShowFixerReqs,
        },
        {
          path:"/fixerManage/editFixerMessage",
          name:"editFixerMessage",
          component:EditFixerMessage,
        },
        {
          path:"/fixerManage/sendTask",
          name:"sendTask",
          component:SendTask,
        }
      ]
    },
    {
      path:"/editFixerM",
      name:"editFixerM",
      component:EditFixerM
    },
    {
      path:"/repairList",
      // name:"repairList",
      component:RepairList,
      children:[
        {
          // 重定向，默认打开页面是noRepair
          path:'/',
          redirect:{
            name:"noRepair"
          }
        },
        {
          path:"/repairList/noRepair",
          name:"noRepair",
          component:NoRepair
        },
        {
          path:"/repairList/repairing",
          name:"repairing",
          component:Repairing
        },
        {
          path:"/repairList/finishList",
          name:"finishList",
          component:FinishList
        },
        {
          path:"/repairList/showAllRepair",
          name:"showAllRepair",
          component:ShowAllRepair
        }
      ]
    },
    {
      path:"/bidding",
      name:"bidding",
      component:Bidding
    },
    {
      path:"/notice",
      name:"notice",
      component:Notice
    },
    {
      path:"/addNotice",
      name:"addNotice",
      component:AddNotice
    },
    {
      path:"/RepairListFixer/repairListFixer",
      name:"repairListFixer",
      component:RepairListFixer
    },
    {
      path:"/RepairListFixer/sign",
      name:"sign",
      component:Sign
    },
    {
      path:"/RepairListFixer/saoma",
      name:"saoma",
      component:Saoma
    },
    {
      path:"/RepairListFixer/editFixerSelf",
      name:"editFixerSelf",
      component:EditFixerSelf
    },
    {
      path:"/RepairListFixer/waitListFixer",
      name:"waitListFixer",
      component:WaitListFixer
    },
    {
      path:"/RepairListFixer/listHistory",
      name:"listHistory",
      component:ListHistory
    },
    {
      path:"/RepairListFixer/selectParts",
      name:"selectParts",
      component:SelectParts
    },
    {
      path:"/RepairListFixer/backMessage",
      name:"backMessage",
      component:BackMessage
    },
    {
      path:"/RepairListFixer/polling",
      name:"polling",
      component:Polling
    },
    {
      path:"/RepairListFixer/submitPoll",
      name:"submitPoll",
      component:SubmitPoll
    },
    {
      path:"/checkPlan/selectAllEquipment",
      name:"selectAllEquipment",
      component:SelectAllEquipment
    },
  {
    path:"/checkPlan/submitPlan",
    name:"submitPlan",
    component:SubmitPlan
  },
  {
    path:"/payForMember",
    name:"payForMember",
    component:PayForMember
  },
  {
    path:"/countCenter/count",
    name:'count',
    component:Count,
    children:[
      // {
      //   path:'/',
      //   redirect:{
      //     name:'fault'
      //   }
      // },
      {
        path:'/countCenter/fault',
        name:'fault',
        component:Fault,
      },
      {
        path:'/countCenter/checkHistory',
        name:'checkHistory',
        component:CheckHistory
      },
      {
        path:'/countCenter/replaceParts',
        name:'replaceParts',
        component:ReplaceParts
      }
    ]
  },
  {
    path:'/countCenter/equipment',
    name:'equipment',
    component:Equipment
  }
  ]
})
