import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Login from '../pages/login/Login'
import Registr from '../pages/login/Registr'
import NotFound from '../pages/404'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/index',
      name: 'index',
      component: Index
    },{
      path: '/register',
      name: 'register',
      component: Registr
    },{
      path: '*',
      name: '/404',
      component: NotFound
    }
  ]
})


/*路由守卫   根据登录获得token*/
router.beforeEach((to,from,next) =>{
    const isLogin = localStorage.eleToken ? true :false ;
    if(to.path ==="/" || to.path ==="/register"){
      next();
    }else{
      isLogin ? next() :next("/")   /*真跳转  假注册*/
    }
})






export default router
