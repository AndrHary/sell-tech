import './details-item-style.css'
import {useLocation} from 'react-router-dom'
function DetailsItemComponent() {
    return (
        <section id="details">
          <div className="details-container">
              <div className="photo-title-container">
                  <div className="details-image-container">
                    <img src="https://static.digit.in/product/9e49b958c81da2b06c1f1d9f68e43b0a576e1658.jpeg" alt="product"></img>
                  </div>
                  <div className="title-category-price-container">
                      
                  </div>
              </div>
              <div className="details-information-container">

              </div>
          </div>
        </section>
    )
}
export default DetailsItemComponent