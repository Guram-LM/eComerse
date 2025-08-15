export interface InputeType {
    type: string,
    name: string,
    label: string,
    id: string,
    placeholder: string,
    
}

export interface userdataType{
    name:string,
    lastName:string,
    image:string,
    phone:string,
    country:string,
    sity:string,
    street:string,
    email:string,
    password:string,
    confirmPassword: string,

}
export interface userData extends userdataType{

    id:string,

}
export interface rowData {
    id:string,
    data:userdataType,
    resource: string,
    updatedAt:string,
    createdAt: string,

}

