import Vue from 'vue';
import App from './App';
import { router } from './router';

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
