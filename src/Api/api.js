import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(
  function (setup) {
      const Authentication = '23456789'
      setup.headers['Authorization'] = `Bearer ${Authentication}`;
      setup.headers['Access-Token'] = Authentication;
      setup.headers['Content-Type'] = 'application/json';
      setup.headers['Access-Control-Allow-Origin'] = '*';

      return setup;
  },
  function (invalid) {
    return Promise.reject(invalid)
  }
);

class Api {
  
  static get(uri) {
    return axios.get(`${BASE_URL}${uri}`);
  }
  static post(uri, data) {
    return axios.post(`${BASE_URL}${uri}`, data);
  }
  static put(uri, data) {
    return axios.put(`${BASE_URL}${uri}`, data);
  }
  static delete(uri) {
    return axios.delete(`${BASE_URL}${uri}`);
  }

}

export default Api;


















    