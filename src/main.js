import Vue from 'vue';
import App from './App';
import { router } from './router';
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
