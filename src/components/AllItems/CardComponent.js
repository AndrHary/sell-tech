import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
function CardComponent({ item }) {
    let user = useContext(authContext)
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
                        {user.authToken
                            ? <button className="add-favourite"><i className="fas fa-heart fav"></i></button>
                            : null
                        }
                    </div>

                </div>
            </div>
        </NavLink>
    )
}
export default CardComponent