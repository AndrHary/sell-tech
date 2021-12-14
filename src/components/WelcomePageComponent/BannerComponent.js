
import './category-style.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { useState } from 'react'
function BannerComponent() {
    let images = ['./images/macbook-pro.jpg', './images/samsung-10.jpg', './images/stylus.jpg']
    let [current, setCurrent] = useState(0)
    let length = images.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)
    return (
        <div className="carousel-container">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
                {images.map((image, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"}>
                            {index === current && <img src={image} alt="addvert"></img>}
                        </div>
                    )
                })}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
    )
}
export default BannerComponent