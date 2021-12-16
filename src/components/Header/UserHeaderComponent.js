import {NavLink} from "react-router-dom"
let UserHeaderComponent = ({username, profilePictureUrl}) => {
    return (
        <>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to="/items/create-item">Sell</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to={`/users/my-profile/${username}`}>{username}</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to="/items/newest-items">Offers</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to="/users/items/:username/favorite"><i className="fas fa-heart"></i></NavLink>
            </li>
        </>
    )
}
export default UserHeaderComponent