import axios from "axios";

const url = "http://localhost:8000/api";

const $api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
    }
})

$api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

export default $api;
