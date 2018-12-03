// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import Vuex from 'vuex'
import {Lazyload} from 'vant';


Vue.use(Lazyload);
Vue.use(Vuex)

Vue.prototype.$http = axios;

Vue.use(Vant);

Vue.use(ElementUI);

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://www.haojunqian.cn:8080/';

document.addEventListener('jpush.receiveRegistrationId', function (event) {
  console.log(event.registrationId)
}, false)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
