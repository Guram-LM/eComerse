
import logo from "../../assets/logo.png"

import "../../appstyle.css"
import AppModeThema from "./AppModeThema"
import HeaderNav from "./HeaderNav"
import { Link } from "react-router-dom"

const Header = () => {


  
  return (
    <header >
        <div>
          <img src={logo} alt="header Logo" />
        </div>
          <HeaderNav/>
        <div>
          <Link to={"/register"}>Register</Link>
          <AppModeThema/>

        </div>
    </header>
  )
}

export default Header