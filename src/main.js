// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import '../src/css/font-awesome.css'
import '../src/css/index.css'
import '../src/css/loading.css'

// import { Message } from 'element-ui';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = true;
// Vue.prototype.$message = Message;

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

//
const LoadingComponent = {
  template: `<div class='container_loading'>
              <div class='loading'>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
          </div>`
}
const ErrorComponent = {
  template: `<div class='container_loading'>Error</div>`
}

//高级异步组件
const AppComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./App'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { AppComponent },
  template: '<AppComponent/>',
  store
})
