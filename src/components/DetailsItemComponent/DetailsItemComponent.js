import './details-item-style.css'
import { NavLink, useLocation } from 'react-router-dom'
import PhotoTitleComponent from './PhotoTitleComponent'
function DetailsItemComponent() {
    return (
        <section id="details">
            <div className="details-container">
                <PhotoTitleComponent />
                <hr></hr>
                <div className="details-information-container">
                    <div className="desc-cont">
                        <h3>Desciption:</h3>
                        <div className="description-container">
                            <p>This is one of the best phones for all the times it has 12 mgpx camera and large screen with no minors of using</p>
                        </div>
                    </div>
                    <div className="item-info-us">
                        <div className="item-location">
                            <h4>Location:</h4>
                            <h3>Bulgaria, Sofia 1000, str. Detelina N: 4</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author email:</h4>
                            <h3>harizanov444@abv.bg</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author phone number:</h4>
                            <h3>+359889152115</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author:</h4>
                            <NavLink to="/" className="author-prof-a">
                                <div className="author-cont">
                                    <div className="author-image-cont">
                                        <img src="https://www.clipartkey.com/mpngs/m/13-132159_image-profile-pictures-for-discord.png" alt="author"></img>
                                    </div>
                                    <p>Iam here</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default DetailsItemComponent