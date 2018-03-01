/**
 * Created by ayou on 18/1/25.
 */

import axios from 'axios'

export function fetchItem (id) {
  return axios.get('/api/item')
}
