import Vue from 'vue';
import App from './App';
import { router } from './router';

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

import {Rate, Icon, Tag} from 'vant'

Vue.component(Rate.name, Rate);
Vue.component(Icon.name, Icon);
Vue.component(Tag.name, Tag);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
