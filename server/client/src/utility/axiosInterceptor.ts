import axios from "axios";
import { accessToken } from "../spotify";
const baseURL = 'https://api.spotify.com/v1/'
export const createAxios = () => {
    const axiosInstance = axios.create({baseURL});
    axiosInstance.interceptors.request.use((config) => {
        // config.baseURL = 'https://api.spotify.com/v1/';
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    }, error => {
        return Promise.reject(error)
    })

    return axiosInstance;
}



