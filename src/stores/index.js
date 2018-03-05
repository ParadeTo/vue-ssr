/**
 * Created by ayou on 18/1/25.
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { fetchItem, fetchItems, addItem } from './api'
export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(res => {
          commit('setItem', { id, item: res.data })
        })
      },
      fetchItems ({ commit }) {
        return fetchItems().then(res => {
          commit('resetItems', res.data)
        })
      },
      addItem ({ commit }, item) {
        return addItem(item).then(res => {
          commit('setItem', { id: res.data.id, item: res.data.item})
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      },
      resetItems (state, items) {
        state.items = items
      }
    }
  })
}
