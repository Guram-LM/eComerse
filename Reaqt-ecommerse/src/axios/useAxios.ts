import type { userdataType } from "../components/inpute/interface";
import { baseAxios } from "./createAxios";

export const UseAxios = {
    post: (resource: string, data:userdataType) => baseAxios.post(`/resource/${resource}`, {data:[data]}),
    get:(resource:string) => baseAxios.get(`/resource/${resource}`)


}