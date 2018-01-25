/**
 * Created by ayou on 18/1/25.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('./components/Index.vue') },
      { path: '/list', component: () => import('./components/List.vue') }
    ]
  })
}