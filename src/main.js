// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import '../src/css/font-awesome.css'


Vue.config.productionTip = true

Vue.filter('snippet', function (value) {
  console.log(value)
  return value && value.length > 10 ? value.slice(0, 10) + '...' : value;
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
