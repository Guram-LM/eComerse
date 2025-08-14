import React from 'react'
import CartComponents from './CartComponents'
import type { Product } from '../../../interface/queryInterface'
import { useNavigate } from 'react-router-dom'

interface PropTyppe {
    data: Product[] | undefined
}
const ComponentOllPages:React.FC<PropTyppe> = ({data}) => {
  const navigate = useNavigate()

  const gotoDatailsPage = (id: number, productData:Product) => {
    navigate(`/datails/${id}`, {state: productData})

  }
  return (
     <section className="laptops-page">
      <h1 className="page-title">{data?.[0].category}</h1>

      <div className="products-grid">
        {data?.map((productData) => 
          <CartComponents 
            key={productData.id} 
            brand={productData.brand} 
            discountPercentage={productData.discountPercentage} 
            id={productData.id} 
            price={productData.price} 
            rating={productData.rating} 
            thumbnail={productData.thumbnail} 
            title={productData.title}
            gotoDatailsPage={gotoDatailsPage}
            productData={productData}
          />
        )}
      </div>
    </section>
  )
}

export default ComponentOllPages