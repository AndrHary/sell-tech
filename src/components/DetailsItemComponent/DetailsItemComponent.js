import './details-item-style.css'
import { NavLink, useParams } from 'react-router-dom'
import PhotoTitleComponent from './PhotoTitleComponent'
import { useState, useEffect } from 'react'
function DetailsItemComponent() {
    let params = useParams()
    let [item, setItem] = useState()
    useEffect(() => {
        fetch(`http://localhost:3050/items/${params.itemId}/details`)
        .then(res => res.json())
        .then(data => {
            setItem(data)
        })
    }, [])
    console.log(item)
    return (
        <>
        {item 
    ? <section id="details">
            <div className="details-container">
                <PhotoTitleComponent item={item} />
                <hr></hr>
                <div className="details-information-container">
                    <div className="desc-cont">
                        <h3>Description:</h3>
                        <div className="description-container">
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="item-info-us">
                        <div className="item-location">
                            <h4>Location:</h4>
                            <h3>{item.country}, {item.town} {item.postCode}, str. Detelina N: 4</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author email:</h4>
                            <h3>harizanov444@abv.bg</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author phone number:</h4>
                            <h3>+359{item.phone}</h3>
                        </div>
                        <div className="item-location">
                            <h4>Author:</h4>
                            <NavLink to="/" className="author-prof-a">
                                <div className="author-cont">
                                    <div className="author-image-cont">
                                        <img src={item.ownerId.profilePictureUrl} alt="author"></img>
                                    </div>
                                    <p>{item.ownerId.username}</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        : null}
        </>
    )
}
export default DetailsItemComponent