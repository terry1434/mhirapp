// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import '../src/css/font-awesome.css'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui';


Vue.config.productionTip = true;
Vue.prototype.$message = Message;

Vue.filter('snippet', function (item) {
  if (typeof item === "object") {
    return item.value && item.value.length > 10 ? item.value.slice(0, 10) + '...' : item.value;
  } else {
    return item && item.length > 10 ? item.slice(0, 10) + '...' : item;
  }

})

// Vue.directive("colorful", {
//   bind(el, binding, vnode) {
//     console.log(binding)
//     el.style.backgroundColor = binding.value;
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
