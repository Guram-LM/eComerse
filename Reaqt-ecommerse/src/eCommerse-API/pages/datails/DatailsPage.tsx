import { useLocation } from 'react-router-dom'
import type { Product } from '../../../interface/queryInterface'
import Slider from './Slider'

const DatailsPage = () => {
    const location = useLocation()
    const DatailInfo:Product = location.state

    console.log(DatailInfo)
  return (
    <div>
        <Slider images={DatailInfo.images} interval={5000}/>
        <h2>{DatailInfo.title} </h2>
        <p>{DatailInfo.description} </p>
        <p>{DatailInfo.brand} </p>
        <p>{DatailInfo.discountPercentage} </p>
        <p>{DatailInfo.price} </p>
        <p>{DatailInfo.rating} </p>
        <p>{DatailInfo.stock} </p>
    </div>
  )
}

export default DatailsPage