import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/pages/home/home.vue'
import types from '../components/pages/types/types.vue'
import my from '../components/pages/my/my.vue'
import shopcar from '../components/pages/shopcar/shopcar.vue'
Vue.use(Router);
const router=new Router({
  routes:[
    {path:"/",redirect:'/home',mode:'history'},
    {path:"/home",component:home,mode:'history'},
    {path:"/types",component:types,mode:'history'},
    {path:"/my",component:my,mode:'history'},
    {path:"/shopcar",component:shopcar,mode:'history'}
  ],
  mode:'history'
})
export default router