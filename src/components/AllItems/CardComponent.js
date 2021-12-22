import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
function CardComponent({ item }) {
    let user = useContext(authContext)
    let addFavoureHandler = () => {
        fetch(`http://localhost:3050/items/${item._id}/watching`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": user.authToken
            }
        })
            .then(res => res.json())
    }
    return (
        <NavLink className="card-link" to={`/items/${item._id}/details`}>
            <div className="card">

                <div className="item-image-container">
                    <img src={item.imageUrl} alt="item for sale" />
                </div>
                <div className="info">
                    <div className="title-price">
                        <h4 className="title">{item.title}</h4>
                        <h4 className="price">{item.price} {item.currency}</h4>
                    </div>

                    <div className="small-info">
                        <p>Category: {item.category}</p>
                        <p>Condition: {item.condition}</p>
                        <p>In {item.watchingUser.length} people favourite list.</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
export default CardComponent