import { Route, Routes } from "react-router-dom"
import Layout from "../eCommerse-API/layout/Layout"
import HomePage from "../eCommerse-API/pages/home/HomePage"
import CategoryPage from "../eCommerse-API/pages/category/CategoryPage"


const ApiNav = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>} />
            <Route path="category" element={<CategoryPage/>} />

        </Route>
    </Routes>
  )
}

export default ApiNav