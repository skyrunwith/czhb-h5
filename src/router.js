import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: 'tabs页'
    }
  },
  {
    name: 'rank',
    component: () => import('./view/rank'),
    meta: {
      title: '排行页'
    }
  },
  {
    name: 'warning',
    component: () => import('./view/warn'),
    meta: {
      title: '预警页'
    }
  },
  {
    name: 'other',
    component: () => import('./view/other'),
    meta: {
      title: 'other页'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};