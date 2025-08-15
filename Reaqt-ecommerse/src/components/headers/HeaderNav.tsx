import { NavLink } from "react-router-dom"

interface navType {
    url:string,
    name:string
}
const HeaderNav = () => {
    
    const navigantion:navType[] = [
    {url:"/", name: "home"},
    {url:"/category", name:"category"},
    {url:"/Contact", name:"Contact"},


    ]
  return (

    <nav>
        {navigantion.map(el => 
           
    <NavLink key={el.url} to={el.url} className="category-link">
           {el.name}
    </NavLink>



        ) }
    </nav>
    
  )
}

export default HeaderNav