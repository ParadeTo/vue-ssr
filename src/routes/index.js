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
      { path: '/', component: (resolve) => require(['COMPONENTS/Index'], resolve) },
      { path: '/list', component: () => require(['COMPONENTS/List'], resolve) },
      { path: '/item', component: () => require(['COMPONENTS/Item'], resolve) }
    ]
  })
}
