import axios from "axios";

export const AppFatch = axios.create({
    baseURL:"https://dummyjson.com/products",
    
})