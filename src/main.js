import Vue from 'vue';
import App from './App';
import { router } from './router';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
