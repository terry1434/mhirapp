import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import login from '@/components/Login'
import menu from '@/components/Menu'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/login' },
      name: 'index',
      component: index,
      children: [
        {
          path: "/login",
          name: "login",
          component: login
        },
        {
          path: "/menu",
          name: "menu",
          component: menu
        }
      ]
    }
  ],
  mode: "history"
})

//挂载路由导航守卫
//to:跳转前路径
//from:跳转后的路径
//next:函数，表示放行
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  //获取token
  const token = window.sessionStorage.getItem('token');
  if(!token) return next('/login');
  next();
})

export default router