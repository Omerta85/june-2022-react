import axios from "axios";
import {baseUrls} from "../config";

const axiosInstance=axios.create({
    baseURL:baseUrls.jsonPlaceHolder,
    headers:{}
})

export {axiosInstance}