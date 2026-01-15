// base url => http://localhost:3001
import axios from "axios";
import { BackendURL } from "../config";

const axiosInstance=axios.create({
    baseURL:"http://localhost:3001"
})

axios.interceptors.response.use((response)=>response,(error)=>Promise.reject(error.response && error.response.data)|| "something went wrong")

export default axiosInstance;