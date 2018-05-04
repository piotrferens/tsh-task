import axios from "axios";
import humps from "humps";
import isObject from "lodash/isObject";

const baseURI = "http://test-api.kuria.tshdev.io/";

// workaround, because API is not on https
const CorsURI = "https://cors-anywhere.herokuapp.com/";

const URI = process.env.NODE_ENV === "development" ? baseURI : `${CorsURI}${baseURI}`;

export const http = axios.create({
    baseURL: URI,
});

http.interceptors.response.use(
    response =>
        isObject(response.data) ? humps.camelizeKeys(response.data) : Promise.reject(response.data),
);
