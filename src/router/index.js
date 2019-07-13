import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/frontend/single-vue-page',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
      children: [
        {
          path: 'concat',
          component: () => import(/* webpackChunkName: "concat" */ '../views/about/Contact.vue')
        }
      ]
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import(/* webpackChunkName: "icon" */ '../views/icon/Icon.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import(/* webpackChunkName: "media" */ '../views/media/Media.vue')
    }
  ],
  // 记录之前保存的滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
