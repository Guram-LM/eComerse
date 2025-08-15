import { UseAxios } from "../../axios/useAxios"

const getuser = async(resource:string) => {
    const result = await UseAxios.get(resource)
    return result.data
}



export default getuser