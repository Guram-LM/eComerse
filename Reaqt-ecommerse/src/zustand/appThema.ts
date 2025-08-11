import {create} from "zustand"


interface ThemaType{
thema: "dark" | "light"
changeThema: () => void
}
 const getThema =(localStorage.getItem("key") as "dark" | "light") || null
 

export const appThema = create<ThemaType>((set) => ({
    thema: getThema || "light" ,
    changeThema: () => set(state => {
        const newThema = state.thema === "dark" ? "light": "dark"
        localStorage.setItem("key",newThema)
        return {thema:newThema}
    })

}))


