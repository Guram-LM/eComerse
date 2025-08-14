import React from 'react'
import type { Product } from '../../../interface/queryInterface';

interface CardsProp {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  thumbnail: string;
  gotoDatailsPage: (id: number, productData: Product) => void
  productData:Product
}
const CartComponents:React.FC<CardsProp> = ({thumbnail, id, brand, discountPercentage, price, rating, title, productData, gotoDatailsPage}) => {
  return (
    <article key={id} className="product-card" onClick={() => gotoDatailsPage(id, productData)}>
        <div className="thumb-wrap">
            <img className="thumb" src={thumbnail} alt={title} />
        </div>

        <div className="card-body">
            <h2 className="product-title">{title}</h2>
            <p className="brand">{brand}</p>

            <div className="meta-row">
            <div className="price">
                ${price}
                {discountPercentage ? (
                <span className="discount"> −{discountPercentage}%</span>
                ) : null}
            </div>
            <div className="rating">⭐ {rating}</div>
            </div>

            
        </div>
    </article>
  )
}

export default CartComponents