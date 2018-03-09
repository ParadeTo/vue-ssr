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
      { path: '/', component: () => import('COMPONENTS/Index') },
      { path: '/list', component: () => import('COMPONENTS/List') },
      { path: '/item/:id', component: () => import('COMPONENTS/Item') }
    ]
  })
}
