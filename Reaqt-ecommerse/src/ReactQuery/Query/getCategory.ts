import { AppFatch } from "../../axios/createAxios"

export const getCategory = async(category: string) => {

    const result = await AppFatch.get(`/category/${category}`)
    return result.data.products;
}

