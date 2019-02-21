import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register';
import Login from "@/components/Login";
/*手机端*/
import Index from '@/components/Property';
import deviceEdit from "@/components/property/deviceManage/edit";
import deviceIndex from "@/components/property/deviceManage/index";
import deviceBlack from "@/components/property/deviceManage/black";
import deviceWarranty from "@/components/property/deviceManage/warranty";
import deviceXjPlan from "@/components/property/deviceManage/xjPlan";
import warrantyMes from "@/components/property/deviceManage/warrantyMes";
import complaintIndex from "@/components/property/complaintManage/index";
import repairMain from "@/components/property/complaintManage/repairMain";
import repairMain1 from "@/components/property/deviceManage/repairMain";
import contractEdit from "@/components/property/contractManage/edit";
import contractSelect from "@/components/property/contractManage/select";
import contractBlack from "@/components/property/contractManage/black";
import announceEdit from "@/components/property/announceManage/edit";
import announceBlack from "@/components/property/announceManage/black";
import announceIndex from "@/components/property/announceManage/index";
import demandEdit from "@/components/property/demandManage/edit";
import demandBlack from "@/components/property/demandManage/black";
import demandIndex from "@/components/property/demandManage/index";
import quoteSelect from "@/components/property/demandManage/select";
import patrolReminderIndex from "@/components/property/PatrolReminder/index";
import editSubAccount from "@/components/property/editSubAccount";
import GenerateSubAccount from "@/components/property/GenerateSubAccount";
import subAccount from "@/components/property/subAccount";
import contractIndex from "@/components/property/contractManage/index";
import checkHistoryPH from "@/components/property/countCenter/checkHistory";
import countPH from "@/components/property/countCenter/count";
import equipmentPH from "@/components/property/countCenter/equipment";
import faultPH from "@/components/property/countCenter/fault";
import replacePartsPH from "@/components/property/countCenter/replaceParts";
import PatrolReminderIndex from "@/components/property/PatrolReminder/index";
import PatrolReminderSelect from "@/components/property/PatrolReminder/select";
import PatrolReminderBlack from "@/components/property/PatrolReminder/black";
/*PC端*/
import PropertyPCIndex from "@/components/propertyPC/index";
import devicePCEdit from "@/components/propertyPC/deviceManage/edit";
import devicePCIndex from "@/components/propertyPC/deviceManage/index";
import devicePCXjPlan from "@/components/propertyPC/deviceManage/xjPlan";
import devicePCBlack from "@/components/propertyPC/deviceManage/black";
import devicePCWarranty from "@/components/propertyPC/deviceManage/warranty";
import warrantyPCMes from "@/components/propertyPC/deviceManage/warrantyMes";
import complaintPCIndex from "@/components/propertyPC/complaintManage/index";
import repairMainPC from "@/components/propertyPC/complaintManage/repairMain";
import repairMain1PC from "@/components/propertyPC/deviceManage/repairMain";
import contractPCEdit from "@/components/propertyPC/contractManage/edit";
import contractPCSelect from "@/components/propertyPC/contractManage/select";
import contractPCBlack from "@/components/propertyPC/contractManage/black";
import announcePCEdit from "@/components/propertyPC/announceManage/edit";
import announcePCBlack from "@/components/propertyPC/announceManage/black";
import announcePCIndex from "@/components/propertyPC/announceManage/index";
import demandPCEdit from "@/components/propertyPC/demandManage/edit";
import demandPCBlack from "@/components/propertyPC/demandManage/black";
import demandPCIndex from "@/components/propertyPC/demandManage/index";
import quotePCSelect from "@/components/propertyPC/demandManage/select";
import patrolReminderPCIndex from "@/components/propertyPC/PatrolReminder/index";
import editPCSubAccount from "@/components/propertyPC/editSubAccount";
import GeneratePCSubAccount from "@/components/propertyPC/GenerateSubAccount";
import subPCAccount from "@/components/propertyPC/subAccount";
import contractPCIndex from "@/components/propertyPC/contractManage/index";
import checkHistoryPC from "@/components/propertyPC/countCenter/checkHistory";
import countPC from "@/components/propertyPC/countCenter/count";
import equipmentPC from "@/components/propertyPC/countCenter/equipment";
import faultPC from "@/components/propertyPC/countCenter/fault";
import replacePartsPC from "@/components/propertyPC/countCenter/replaceParts";
import PatrolReminderPCIndex from "@/components/propertyPC/PatrolReminder/index";
import PatrolReminderPCSelect from "@/components/propertyPC/PatrolReminder/select";
import PatrolReminderPCBlack from "@/components/propertyPC/PatrolReminder/black";


// import $ from 'jquery' ;
// const Vue = require('vue');
// const Router = require('vue-router');
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
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
      path:'/equipment/xjPlan/:elementId',
      name:'equipmentXjPlan',
      component:deviceXjPlan
    },
    {
      path:'/equipment/warranty',
      name:'warrantyIndex',
      component:deviceWarranty
    },
    {
      path:'/contract/edit/:contractId',
      name:'contractEdit',
      component:contractEdit
    },
    {
      path:'/contract/index',
      name:'contractIndex',
      component:contractIndex
    },
    {
      path:'/contract/select/:contractId',
      name:'contractSelect',
      component:contractSelect
    },
    {
      path:'/announce/edit/:announceId',
      name:'announceEdit',
      component:announceEdit
    },
    {
      path:'/announce/index',
      name:'announceIndex',
      component:announceIndex
    },
    {
      path:'/demand/edit/:demandId',
      name:'demandEdit',
      component:demandEdit
    },
    {
      path:'/quoteSelect/:quoteId',
      name:'quoteSelect',
      component:quoteSelect
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
      path: '/deviceBlack',
      name: 'deviceBlack',
      component: deviceBlack
    },
    {
      path: '/demandBlack',
      name: 'demandBlack',
      component: demandBlack
    },
    {
      path: '/PatrolReminderBlack',
      name: 'PatrolReminderBlack',
      component: PatrolReminderBlack
    },
    {
      path: '/contractBlack',
      name: 'contractBlack',
      component: contractBlack
    },
    {
      path: '/announceBlack',
      name: 'announceBlack',
      component: announceBlack
    },
    {
      path: '/editSubAccount/:subAccountId',
      name: 'editSubAccount',
      component: editSubAccount
    },
    {
      path: '/GenerateSubAccount',
      name: 'GenerateSubAccount',
      component: GenerateSubAccount
    },
    {
      path: '/subAccount/:subAccountId',
      name: 'subAccount',
      component: subAccount
    },
  {
    path: "/countCenterPH/count",
    name: 'countPH',
    component: countPH,
    children: [
      {
        path: '/countCenterPH/fault',
        name: 'faultPH',
        component: faultPH,
      },
      {
        path: '/countCenterPH/checkHistory',
        name: 'checkHistoryPH',
        component: checkHistoryPH
      },
      {
        path: '/countCenterPH/replaceParts',
        name: 'replacePartsPH',
        component: replacePartsPH
      },
      {
        path: '/countCenterPH/equipment',
        name: 'equipmentPH',
        component: equipmentPH
      },
      {
        path: '/PatrolReminder/index',
        name: 'PatrolReminderIndex',
        component: PatrolReminderIndex
      },
      {
        path: '/PatrolReminder/select/:xjgdId',
        name: 'PatrolReminderSelect',
        component: PatrolReminderSelect
      },
      /*PC端*/
      {
        path: '/PropertyPCIndex',
        name: 'PropertyPCIndex',
        component: PropertyPCIndex
      },
      {
        path: '/equipmentPC/edit/:elementId',
        name: 'elementPCEdit',
        component: devicePCEdit
      },
      {
        path: '/equipmentPC/xjPlan/:elementId',
        name: 'equipmentPCXjPlan',
        component: devicePCXjPlan
      },
      {
        path: '/equipmentPC/warrantyMes/:elementId',
        name: 'warrantyPCMes',
        component: warrantyPCMes
      },
      {
        path: '/equipmentPC/index',
        name: 'equipmentPCIndex',
        component: devicePCIndex
      },
      {
        path: '/equipmentPC/warranty',
        name: 'warrantyPCIndex',
        component: devicePCWarranty
      },
      {
        path: '/contractPC/edit/:contractId',
        name: 'contractPCEdit',
        component: contractPCEdit
      },
      {
        path: '/contractPC/index',
        name: 'contractPCIndex',
        component: contractPCIndex
      },
      {
        path: '/contractPC/select/:contractId',
        name: 'contractPCSelect',
        component: contractPCSelect
      },
      {
        path: '/announcePC/edit/:announceId',
        name: 'announcePCEdit',
        component: announcePCEdit
      },
      {
        path: '/announcePC/index',
        name: 'announcePCIndex',
        component: announcePCIndex
      },
      {
        path: '/demandPC/edit/:demandId',
        name: 'demandPCEdit',
        component: demandPCEdit
      },
      {
        path: '/quotePCSelect/:quoteId',
        name: 'quotePCSelect',
        component: quotePCSelect
      },
      {
        path: '/demandPC/index',
        name: 'demandPCIndex',
        component: demandPCIndex
      },
      {
        path: '/complaintPC/repair/:repairId',
        name: 'repairPC',
        component: repairMainPC
      },
      {
        path: '/repairManagePC/repair/:repairId',
        name: 'repair1PC',
        component: repairMain1PC
      },
      {
        path: '/complaintPC/index',
        name: 'complaintPCIndex',
        component: complaintPCIndex
      },
      {
        path: '/patrolReminderPC/index',
        name: 'patrolReminderPCIndex',
        component: patrolReminderPCIndex
      },
      {
        path: '/devicePCBlack',
        name: 'devicePCBlack',
        component: devicePCBlack
      },
      {
        path: '/demandPCBlack',
        name: 'demandPCBlack',
        component: demandPCBlack
      },
      {
        path: '/contractPCBlack',
        name: 'contractPCBlack',
        component: contractPCBlack
      },
      {
        path: '/announcePCBlack',
        name: 'announcePCBlack',
        component: announcePCBlack
      },
      {
        path: '/editPCSubAccount/:subAccountId',
        name: 'editPCSubAccount',
        component: editPCSubAccount
      },
      {
        path: '/GeneratePCSubAccount',
        name: 'GeneratePCSubAccount',
        component: GeneratePCSubAccount
      },
      {
        path: '/subPCAccount/:subAccountId',
        name: 'subPCAccount',
        component: subPCAccount
      },
      {
        path: "/countCenterPC/count",
        name: 'countPC',
        component: countPC,
        children: [
          {
            path: '/countCenterPC/fault',
            name: 'faultPC',
            component: faultPC,
          },
          {
            path: '/countCenterPC/checkHistory',
            name: 'checkHistoryPC',
            component: checkHistoryPC
          },
          {
            path: '/countCenterPC/replaceParts',
            name: 'replacePartsPC',
            component: replacePartsPC
          }
        ]
      },
      {
        path: '/countCenterPC/equipment',
        name: 'equipmentPC',
        component: equipmentPC
      },
      {
        path: '/PatrolReminderPC/index',
        name: 'PatrolReminderPCIndex',
        component: PatrolReminderPCIndex
      },
      {
        path: '/PatrolReminderPC/select/:xjgdId',
        name: 'PatrolReminderPCSelect',
        component: PatrolReminderPCSelect
      },
      {
        path: '/PatrolReminderPCBlack',
        name: 'PatrolReminderPCBlack',
        component: PatrolReminderPCBlack
      },
      {
        path: '/company',
        // name: 'company',

        component: Company,
        // 嵌套路由
        children: [
          //   // 重定向，默认打开页面是companyA  (注意：当某个路由有子集路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性。
          // 解决办法：即去除父级的name属性即可。)
          {
            path: "/",
            redirect: {
              name: "companyA"
            }
          },
          {
            path: "/companyA",
            name: "companyA",
            component: CompanyA
          },
          {
            path: "/selfEdit",
            name: "selfEdit",
            component: SelfEdit
          }
        ]
      },
      {
        path: '/worker',
        name: 'worker',
        component: Worker
      },
      {
        path: '/managePro',
        name: 'managePro',
        component: ManagePro,
      },
      {
        path: '/proCon',
        name: 'proCon',
        component: ProCon
      },
      {
        path: '/partsManage',
        // name:'partsManage',
        component: PartsManage,
        // 嵌套路由
        children: [
          {
            // 重定向，默认打开页面是PartsAddMessage
            path: '/',
            redirect: {
              name: "partsAddMessage"
            }
          },
          {
            path: "/partsManage/partsAddMessage",
            name: "partsAddMessage",
            component: PartsAddMessage
          },
          {
            path: "/partsManage/partsAddNum",
            name: "partsAddNum",
            component: PartsAddNum
          },
          {
            path: "/partsManage/partsReq",
            name: "partsReq",
            component: PartsReq
          },
          {
            path: "/partsManage/partsReqAll",
            name: "partsReqAll",
            component: PartsReqAll
          }
        ]
      },
      {
        path: "/selectAll",
        name: "selectAll",
        component: SelectAll
      },
      {
        path: "/showPartsMessage",
        name: "showPartsMessage",
        component: ShowPartsMessage
      },
      {
        path: "/fixerManage",
        // name:"fixerManage",
        component: FixerManage,
        // 嵌套路由
        children: [
          {
            // 重定向，默认打开页面是showFixerReqs
            path: '/',
            redirect: {
              name: "showFixerReqs"
            }
          },
          {
            path: "/fixerManage/showFixerReqs",
            name: "showFixerReqs",
            component: ShowFixerReqs,
          },
          {
            path: "/fixerManage/editFixerMessage",
            name: "editFixerMessage",
            component: EditFixerMessage,
          },
          {
            path: "/fixerManage/sendTask",
            name: "sendTask",
            component: SendTask,
          }
        ]
      },
      {
        path: "/editFixerM",
        name: "editFixerM",
        component: EditFixerM
      },
      {
        path: "/repairList",
        // name:"repairList",
        component: RepairList,
        children: [
          {
            // 重定向，默认打开页面是noRepair
            path: '/',
            redirect: {
              name: "noRepair"
            }
          },
          {
            path: "/repairList/noRepair",
            name: "noRepair",
            component: NoRepair
          },
          {
            path: "/repairList/repairing",
            name: "repairing",
            component: Repairing
          },
          {
            path: "/repairList/finishList",
            name: "finishList",
            component: FinishList
          },
          {
            path: "/repairList/showAllRepair",
            name: "showAllRepair",
            component: ShowAllRepair
          }
        ]
      },
      {
        path: "/bidding",
        name: "bidding",
        component: Bidding
      },
      {
        path: "/notice",
        name: "notice",
        component: Notice
      },
      {
        path: "/addNotice",
        name: "addNotice",
        component: AddNotice
      },
      {
        path: "/RepairListFixer/repairListFixer",
        name: "repairListFixer",
        component: RepairListFixer
      },
      {
        path: "/RepairListFixer/sign",
        name: "sign",
        component: Sign
      },
      {
        path: "/RepairListFixer/saoma",
        name: "saoma",
        component: Saoma
      },
      {
        path: "/RepairListFixer/editFixerSelf",
        name: "editFixerSelf",
        component: EditFixerSelf
      },
      {
        path: "/RepairListFixer/waitListFixer",
        name: "waitListFixer",
        component: WaitListFixer
      },
      {
        path: "/RepairListFixer/listHistory",
        name: "listHistory",
        component: ListHistory
      },
      {
        path: "/RepairListFixer/selectParts",
        name: "selectParts",
        component: SelectParts
      },
      {
        path: "/RepairListFixer/backMessage",
        name: "backMessage",
        component: BackMessage
      },
      {
        path: "/RepairListFixer/polling",
        name: "polling",
        component: Polling
      },
      {
        path: "/RepairListFixer/submitPoll",
        name: "submitPoll",
        component: SubmitPoll
      },
      {
        path: "/checkPlan/selectAllEquipment",
        name: "selectAllEquipment",
        component: SelectAllEquipment
      },
      {
        path: "/checkPlan/submitPlan",
        name: "submitPlan",
        component: SubmitPlan
      },
      {
        path: "/payForMember",
        name: "payForMember",
        component: PayForMember
      },
      {
        path: "/countCenter/count",
        name: 'count',
        component: Count,
        children: [
          // {
          //   path:'/',
          //   redirect:{
          //     name:'fault'
          //   }
          // },
          {
            path: '/countCenter/fault',
            name: 'fault',
            component: Fault,
          },
          {
            path: '/countCenter/checkHistory',
            name: 'checkHistory',
            component: CheckHistory
          },
          {
            path: '/countCenter/replaceParts',
            name: 'replaceParts',
            component: ReplaceParts
          }
        ]
      },
      {
        path: '/countCenter/equipment',
        name: 'equipment',
        component: Equipment
      }
    ]}
  ]})
