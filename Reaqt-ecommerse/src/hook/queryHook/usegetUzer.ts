import { useQuery } from "@tanstack/react-query"
import getuser from "../../ReactQuery/Query/getuser"
import type { rowData } from "../../components/inpute/interface"



const usegetUzer = (resource:string) => {
 const result = useQuery<rowData[] | undefined>({
    queryKey:["getUzer"],
    queryFn:() => getuser(resource)
    
 })
 return result
}

export default usegetUzer