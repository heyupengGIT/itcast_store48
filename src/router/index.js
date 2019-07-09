import Vue from 'vue'
import Router from 'vue-router'
// 导入login组件
import Login from '@/views/Login'
import Home from '@/views/Home'



// 注册vuerouter插件
Vue.use(Router)


export default new Router({
  routes: [
    { name:'home', path:'/', component: Home },
    { name:'Login', path:'/login',component: Login }
  ]
})
