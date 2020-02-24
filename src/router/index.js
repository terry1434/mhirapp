import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import index from '@/components/pages/Index'
import login from '@/components/common/Login'
import home from '@/components/pages/Home'
import menu from '@/components/pages/Menu'
import sitemanage from '@/components/pages/SiteManage'
import userinfoedit from '@/components/pages/UserInfoEdit'
import page404 from '@/components/pages/page404'

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
          path: "/home",
          name: "home",
          component: home
        },
        {
          path: "/menu",
          name: "menu",
          component: menu
        },
        {
          path: "/sitemanage",
          name: "sitemanage",
          component: sitemanage,
          children: [
            { path: "/sitemanage/useredifinfo", name: "usereditinfo", component: userinfoedit }
          ],

        },
      ]
    },
    { path: '/404', component: page404, name: 'page404' },
  ],
  mode: "history"
})




//挂载路由导航守卫
//to:跳转前路径
//from:跳转后的路径
//next:函数，表示放行
router.beforeEach((to, from, next) => {


  //获取token
  const token = window.sessionStorage.getItem('token');
  console.log(token);
  // if (!token) next('/login');

  //页面内容一旦编辑过，跳转页面时，显示提示消息
  if (store.state.isEdited) {
    store.commit({
      type: "setDialogVisible",
      payload: true
    });
    next(false);
  } else {
    if (store.state.dialogVisible) {
      store.commit({
        type: "setDialogVisible",
        payload: false
      });
    }
    if (to.matched.length == 0) {
      next('/404');
    }
    next(true);
  }

  // if (to.path === "/login") {
  //   return next();
  // } else {
  //   if (to.matched.length == 0) {
  //     next('/404');
  //   }
  // }

  //不存在的页面，强制跳转至404页


  // next();

})

export default router