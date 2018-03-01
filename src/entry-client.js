/**
 * Created by ayou on 18/1/25.
 */

console.log(1214124)
import { createApp } from './app.js'
// 客户端特定引导逻辑……
// const { app, router, store } = createApp()
const { app } = createApp()
// if (window.__INITIAL_STATE__) {
//   store.replaceState(window.__INITIAL_STATE__)
// }
// 这里假定 App.vue 模板中根元素具有 `id="app"`
// router.onReady(() => {
app.$mount('#app')
// })
