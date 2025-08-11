
import logo from "../../assets/logo.png"

import "../../appstyle.css"
import AppModeThema from "./AppModeThema"
import HeaderNav from "./HeaderNav"

const Header = () => {


  
  return (
    <header >
        <div>
            <img src={logo} alt="header Logo" />
        </div>
   <HeaderNav/>
        <div>
     < AppModeThema/>

        </div>
    </header>
  )
}

export default Header