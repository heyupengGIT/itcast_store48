import Vue from 'vue'
import Router from 'vue-router'
// 导入login组件
import Login from '@/views/Login'


// 注册vuerouter插件
Vue.use(Router)


export default new Router({
  routes: [
    { name:'login', path:'/login',component:Login }
  ]
})
