import type { InputeType } from "../interface";

export const RegistrationInpute: InputeType[] = [
    {type: "text", name: "image", id: "image", label: "Image", placeholder:"your image"},
    {type: "text", name: "name", id: "name", label: "Name", placeholder:"your name"},
    {type: "text", name: "lastName", id: "lastName", label: "LastName", placeholder:"your lastName"},
    {type: "phone", name: "phone", id: "phone", label: "Phone", placeholder:"your phone"},
    {type: "text", name: "country", id: "country", label: "Country", placeholder:"your country"},
    {type: "text", name: "sity", id: "sity", label: "Sity", placeholder:"your sity"},
    {type: "text", name: "street", id: "street", label: "Street", placeholder:"your street"},
    {type: "email", name: "email", id: "email", label: "Email", placeholder:"your email"},
    {type: "password", name: "password", id: "password", label: "Password", placeholder:"your password"},
    {type: "password", name: "confirmPassword", id: "confirmPassword", label: "Confirm Password", placeholder:"confirm Password"},
]

