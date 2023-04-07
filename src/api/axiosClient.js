import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://18.139.16.135/api/",
  headers: {
    "content-type": "application/json",
  },
  timeout: 1000 * 5,
});

export default axiosClient;
