import axios from 'axios';
import baseUrl from '@/api'
const api = {
  requestData (id) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/detail?id=' + id)
        .then(data => {
          // console.log(data)
          resolve(data.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default api
