import { NavLink } from "react-router-dom"

interface navType {
    url:string,
    name:string
}
const HeaderNav = () => {
    
    const navigantion:navType[] = [
    {url:"/", name: "home"},
    {url:"/category", name:"category"},


    ]
  return (

    <nav>
        {navigantion.map(el => 
           
                <NavLink key={el.url} to={el.url}>
                    {el.name}

                </NavLink>
        ) }
    </nav>
    
  )
}

export default HeaderNav