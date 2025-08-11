import { Route, Routes } from "react-router-dom"
import Layout from "../eCommerse-API/layout/Layout"
import HomePage from "../eCommerse-API/pages/home/HomePage"
import CategoryPage from "../eCommerse-API/pages/category/CategoryPage"
import CategoryLeyout from "../eCommerse-API/layout/CategoryLeyout"
import Laptop from "../eCommerse-API/pages/laptop/Laptop"


const ApiNav = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>} />
        
        </Route>

        <Route path="/category" element={<CategoryLeyout/>}>
            <Route index  element={<CategoryPage/>} />
            <Route path="laptops"  element={<Laptop/>} />


        </Route>
    </Routes>
  )
}

export default ApiNav