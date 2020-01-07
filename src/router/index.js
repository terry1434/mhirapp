import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import login from '@/components/Login'
import menu from '@/components/Menu'
Vue.use(Router)

export default new Router({
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
