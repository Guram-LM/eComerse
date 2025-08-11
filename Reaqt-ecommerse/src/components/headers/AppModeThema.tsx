import { useEffect } from "react"
import { appThema } from "../../zustand/appThema"


const AppModeThema = () => {

      const {changeThema, thema} = appThema()

useEffect( () => {
    document.body.classList.remove("dark", "light")
    document.body.classList.add(thema)

}, [thema])
  return (
<button onClick={changeThema}>
          {thema === "dark" ? "🌙": "☀️"}
      </button>
  )
}

export default AppModeThema