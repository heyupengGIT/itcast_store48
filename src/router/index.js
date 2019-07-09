import Vue from 'vue'
import Router from 'vue-router'
// 导入login组件
import Login from '@/views/Login'
import Home from '@/views/Home'
import Users from '@/views/users/Users'



// 注册vuerouter插件
Vue.use(Router)


export default new Router({
  routes: [
    { name:'Login', path:'/login',component: Login },

    { name:'home', path:'/', component: Home,  
      children:[
      { name:'Users', path:'/users', component: Users },
      // { name:'Users', path:'/users', component: Users },
    ]}

  ]
})
