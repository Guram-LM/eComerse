import { useLocation } from 'react-router-dom'
import type { Product } from '../../../interface/queryInterface'
import Slider from './Slider'


const DatailsPage = () => {
    const location = useLocation()
    const DatailInfo: Product = location.state

    return (
        <div className="details-container">
            <div className="slider-wrapper">
                <Slider images={DatailInfo.images} interval={5000} />
            </div>
            <div className="info-wrapper">
                <h2 className="title">{DatailInfo.title}</h2>
                <p className="brand">{DatailInfo.brand}</p>
                <p className="description">{DatailInfo.description}</p>
                <div className="price-section">
                    <span className="price">${DatailInfo.price}</span>
                    <span className="discount">-{DatailInfo.discountPercentage}%</span>
                </div>
                <p className="rating">⭐ {DatailInfo.rating} / 5</p>
                <p>Stock: {DatailInfo.stock}</p>
                <button className="buy-btn">Add to Cart</button>
            </div>
        </div>
    )
}

export default DatailsPage
