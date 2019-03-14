import axios from 'axios'

const api = {
  reqUser (tel) {
    return new Promise((resolve, reject) => {
      axios.get('http://47.102.96.220:3000/api/users/find?tel=' + tel)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  reqCapt (tel) {
    return new Promise((resolve, reject) => {
      axios.get('https://www.daxunxun.com/users/sendCode?tel=' + tel)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  },
  regDb (data) {
    return new Promise((resolve, reject) => {
      axios.get(`http://47.102.96.220:3000/api/users/addAction?tel=${data.tel}&nickname=''&password=${data.password}`)
        .then(data => resolve(data.data))
        .catch(err => reject(err))
    })
  }
}

export default api
