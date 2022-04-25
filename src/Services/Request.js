import axios from 'axios'

const Request = () => {
  const lang = localStorage.getItem('i18nextLng')
  const token = localStorage.getItem('token')
  const defaultOption = {
    baseURL: "https://api.onlinedu.uz/api/v1",
    headers: {
      Authorization: 'Bearer ' + token ? token : '',
      lang: lang ? lang : 'uz'
    },
  };

  return {
    get: (url, options = {}) => axios.get(url, {...defaultOption, ...options}),
    post: (url,data, options = {}) => axios.post(url, data, {...defaultOption, ...options}),
    put: (url, data, options = {}) => axios.put(url, data, {...defaultOption, ...options}),
    delete: (url, options = {}) => axios.delete(url, {...defaultOption, ...options})
  }
}

export default Request