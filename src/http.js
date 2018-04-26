import axios from "axios";

const URI = "http://test-api.kuria.tshdev.io/";

export const http = axios.create({
  baseURL: URI
});

http.interceptors.response.use(response => response.data);
