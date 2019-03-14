import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/book')
        .then(data => {
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  requestBannerData () {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/book/banner')
        .then(data => {
          resolve(data.data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
