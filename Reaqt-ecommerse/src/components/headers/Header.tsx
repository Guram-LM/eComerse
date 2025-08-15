
import logo from "../../assets/logo.png"

import "../../appstyle.css"
import AppModeThema from "./AppModeThema"
import HeaderNav from "./HeaderNav"
import UserMenu from "./UserMenu"
import { useState } from "react"

const Header = () => {


  const [userIsValid, setuserIsValid]=useState(false)


  return (
    <header >
        <div>
          <img src={logo} alt="header Logo" />
        </div>
          <HeaderNav/>
        <div className="heaserSection3">
          <UserMenu userIsValid = {userIsValid}/>
          <AppModeThema/>

        </div>
    </header>
  )
}

export default Header