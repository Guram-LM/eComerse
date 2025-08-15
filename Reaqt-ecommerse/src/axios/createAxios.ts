import axios from "axios";
import { API_KEY, BASE_URL } from "../ApiKey/ApiKey";

export const AppFatch = axios.create({
    baseURL:"https://dummyjson.com/products",
    
})


export const baseAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-Type": "application/json",
    "x-bypass-token": API_KEY
    }
})