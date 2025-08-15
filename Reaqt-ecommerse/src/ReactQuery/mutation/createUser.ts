import { UseAxios } from "../../axios/useAxios";
import type { userdataType } from "../../components/inpute/interface";

const createUser = async(resource:string, data:userdataType) => {
    const result = await UseAxios.post(resource, data)
    return result.data

}

export default createUser

