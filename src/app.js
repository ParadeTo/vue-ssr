/**
 * Created by ayou on 18/1/25.
 */

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes'
import { createStore } from './stores'
import { sync } from 'vuex-router-sync'
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // 创建 router 和 store 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(route state)到 store
  sync(store, router)

  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { router, app, store }
  // return { app }
}
