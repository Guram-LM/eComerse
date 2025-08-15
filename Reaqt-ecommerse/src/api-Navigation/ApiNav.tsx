import { Route, Routes } from "react-router-dom"
import Layout from "../eCommerse-API/layout/Layout"
import HomePage from "../eCommerse-API/pages/home/HomePage"
import CategoryPage from "../eCommerse-API/pages/category/CategoryPage"
import CategoryLeyout from "../eCommerse-API/layout/CategoryLeyout"
import Laptop from "../eCommerse-API/pages/laptop/Laptop"
import Smartphones from "../eCommerse-API/pages/smartphones/Smartphones"
import Furniture from "../eCommerse-API/pages/furniture/Furniture"
import Groceries from "../eCommerse-API/pages/groceries/Groceries"
import HomeDecoration from "../eCommerse-API/pages/home-decoration/Home-Decoration"
import Tops from "../eCommerse-API/pages/tops/Tops"
import Dresses from "../eCommerse-API/pages/dresses/Dresses"
import WomensDresses from "../eCommerse-API/pages/womensDresses/WomensDresses"
import WomensShoes from "../eCommerse-API/pages/womensShoes/WomensShoes"
import MensShirts from "../eCommerse-API/pages/mensShirts/MensShirts"
import MensShoes from "../eCommerse-API/pages/mensShoes/MensShoes"
import MensWatches from "../eCommerse-API/pages/mensWatches/MensWatches"
import WomensWatches from "../eCommerse-API/pages/womensWatches/WomensWatches"
import WomenBags from "../eCommerse-API/pages/womenBags/WomenBags"
import WomensJewellery from "../eCommerse-API/pages/womensJewellery/WomensJewellery"
import Sunglasses from "../eCommerse-API/pages/sunglasses/Sunglasses"
import Automotive from "../eCommerse-API/pages/automotive/Automotive"
import Motorcycle from "../eCommerse-API/pages/motorcycle/Motorcycle"
import Lighting from "../eCommerse-API/pages/lighting/Lighting"
import DatailsPage from "../eCommerse-API/pages/datails/DatailsPage"
import RegistrationPage from "../eCommerse-API/pages/registrationPage/RegistrationPage"
import Vaidatsion from "../eCommerse-API/pages/validation/vaidatsion"


const ApiNav = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Layout/>} >
            <Route index element={<HomePage/>} />
            <Route path="datails/:id" element={<DatailsPage/>} />
            <Route path="register" element={<RegistrationPage/>} />
            <Route path="Vaidatsion" element={<Vaidatsion/>}/>
        
        </Route>

        <Route path="/category" element={<CategoryLeyout/>}>
            <Route index  element={<CategoryPage/>} />
            <Route path="laptops"  element={<Laptop/>} />
            <Route path="smartphones"  element={<Smartphones/>} />
            <Route path="furniture"  element={<Furniture/>} />
            <Route path="groceries"  element={<Groceries/>} />
            <Route path="home-decoration"  element={<HomeDecoration/>} />
            <Route path="dresses"  element={<Dresses/>} />
            <Route path="womens-dresses"  element={<WomensDresses/>} />
            <Route path="womens-shoes"  element={<WomensShoes/>} />
            <Route path="mens-shirts"  element={<MensShirts/>} />
            <Route path="mens-shoes"  element={<MensShoes/>} />
            <Route path="mens-watches"  element={<MensWatches/>} />
            <Route path="womens-watches"  element={<WomensWatches/>} />
            <Route path="womens-bags"  element={<WomenBags/>} />
            <Route path="womens-jewellery"  element={<WomensJewellery/>} />
            <Route path="sunglasses"  element={<Sunglasses/>} />
            <Route path="automotive"  element={<Automotive/>} />
            <Route path="motorcycle"  element={<Motorcycle/>} />
            <Route path="lighting"  element={<Lighting/>} />
            <Route path="tops"  element={<Tops/>} />
        </Route>
    </Routes>
  )
}

export default ApiNav