import axios from "axios";
import humps from "humps";
import isObject from "lodash/isObject";

const URI = "http://test-api.kuria.tshdev.io/";

export const http = axios.create({
    baseURL: URI,
});

http.interceptors.response.use(
    response =>
        isObject(response.data) ? humps.camelizeKeys(response.data) : Promise.reject(response.data),
);
