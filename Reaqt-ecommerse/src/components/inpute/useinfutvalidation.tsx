
import type { userdataType } from "./interface"



export const infutevalidation = (data:userdataType) => {
    let error = {
        name: "",
        lastName: ""
    }
    if(data.name.length < 2 )return error.name= "სახელის ველი უნდა შეიცავდეს მინიმუმ 2 ასობგერას!"
    if(data.lastName.length < 2 )return error.lastName= "სახელის ველი უნდა შეიცავდეს მინიმუმ 2 ასობგერას!"
    




    return error
}

