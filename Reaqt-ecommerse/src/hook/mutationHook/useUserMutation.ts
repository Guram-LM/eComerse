import { useMutation } from "@tanstack/react-query"
import createUser from "../../ReactQuery/mutation/createUser"
import type { userdataType } from "../../components/inpute/interface"


const useUserMutation = (resource:string) => {
const result = useMutation({
mutationFn: (data:userdataType) => createUser(resource, data),
onError: (error) => console.log(error), 
onSuccess: () => {
    console.log("onSuccess")
}
})
return result
}

export default useUserMutation
