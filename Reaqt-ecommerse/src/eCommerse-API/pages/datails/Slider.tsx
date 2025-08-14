import React, { useEffect, useState } from 'react'

interface SliderProp {
    images: string[]
    interval?: number
}

const Slider:React.FC<SliderProp> = ({images, interval = 2000}) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        
        const SliderInt = setInterval(() => {

            setIndex(prev => (
                prev === images.length - 1 ? 0 : prev + 1
            ))

        }, interval)

        return () => clearInterval(SliderInt)

    }, [index, images.length])


    const left = () => {
        setIndex(prev => (
            prev === 0 ? images.length - 1 : prev - 1
        ))
    }


    const right = () => {
        setIndex(prev => (
            prev === images.length - 1 ? 0 : prev + 1
        ))
    }


  return (
    <div>
        <button onClick={left}>-</button>
        <img src={images[index]} alt="" />
        <button onClick={right}>+</button>
    </div>
  )
}

export default Slider