import './details-item-style.css'
import { NavLink, useParams } from 'react-router-dom'
import PhotoTitleComponent from './PhotoTitleComponent'
import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
function DetailsItemComponent() {
    const params = useParams()
    const [item, setItem] = useState()
    let [watchingUser, setWatchingUser] = useState()
    const history = useHistory()
    const user = useContext(authContext)
    const onEdit = () => {
        history.push(`/items/${item._id}/edit`)
    }
    const onDelete = () => {
        history.push(`/items/${item._id}/delete`)
    }
    const addFavoureHandler = (e) => {
        fetch(`http://localhost:3050/items/${item._id}/watching`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": user.authToken
            }
        })
            .then(res => res.json())
            .then(resJson => {
                setWatchingUser(resJson.watchingUser.length)
            })
    }
    useEffect(() => {
        fetch(`http://localhost:3050/items/${params.itemId}/details`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setWatchingUser(data.watchingUser.length)
            })
    }, [])
    return (
        <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            {item
                ? <section id="details">
                    <div className="details-container">
                        <PhotoTitleComponent item={item} />
                        {user.username
                            ? <div className="edit-delete-item">
                                {item.ownerId.username === user.username
                                    ? <div className="edit-del-cont">
                                        <button onClick={onEdit}>Edit</button>
                                        <button onClick={onDelete}>Delete</button>
                                    </div>
                                    : <>
                                        <button onClick={addFavoureHandler} className={item.watchingUser.includes(user._id) ? "added-favourite" : "add-favourite"}>
                                            <i className="fas fa-heart fav"></i>
                                        </button>
                                        <p>Watching now: {watchingUser}</p>
                                         </>}
                            </div>
                            : null}
                        <hr></hr>
                        <div className="details-information-container">
                            <div className="desc-cont">
                                <h3>Description:</h3>
                                <div className="description-container">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            {user.username
                                ? <div className="item-info-us">
                                    <div className="item-location">
                                        <h4>Location:</h4>
                                        <h3>{item.country}, {item.town} {item.postCode}, {item.address}</h3>
                                    </div>
                                    <div className="item-location">
                                        <h4>Author email:</h4>
                                        <h3>{item.ownerId.email}</h3>
                                    </div>
                                    <div className="item-location">
                                        <h4>Author phone number:</h4>
                                        <h3>+359{item.phone}</h3>
                                    </div>
                                    <div className="item-location">
                                        <h4>Author:</h4>
                                        <NavLink to={`/users/${item.ownerId.username}/profile`} className="author-prof-a">
                                            <div className="author-cont">
                                                <div className="author-image-cont">
                                                    <img src={item.ownerId.profilePictureUrl} alt="author"></img>
                                                </div>
                                                <p>{item.ownerId.username}</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>
                </section>
                : null}
        </>
    )
}
export default DetailsItemComponent