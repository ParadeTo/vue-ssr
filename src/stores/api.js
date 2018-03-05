/**
 * Created by ayou on 18/1/25.
 */

import axios from 'axios'

const baseUrl = (DEV ? '/' : 'http://localhost:8081/')

export function fetchItem (id) {
  return axios.get(`${baseUrl}api/items/${id}`)
}

export function fetchItems () {
  return axios.get(`${baseUrl}api/items`)
}

export function addItem (item) {
  return axios.post(`${baseUrl}api/items`, item)
}
