import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: "http://18.139.16.135/api/",
  headers: {
    "content-type": "application/json",
  },
  timeout: 1000 * 5,
  paramsSerializer: (params) => queryString.stringify(params),
});
// axiosClient.interceptors.request.use(async (config) => {
//   return config;
// });
// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   (error) => {
//     throw error;
//   }
// );

export default axiosClient;
