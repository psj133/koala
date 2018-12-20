// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from './components/styles/reset.less'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios';
import '../src/assets/font_guo2g3puy0j/iconfont.css'
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
Vue.prototype.$axios=axios;
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
