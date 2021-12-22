import {NavLink} from "react-router-dom"
let UserHeaderComponent = ({username, profilePictureUrl, onLogout}) => {
    return (
        <>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to="/items/create-item">Sell</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to={`/users/${username}/profile`}>{username}</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to="/items/newest-items">Offers</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#232265", backgroundColor: "#FAF6F6" }} to={`/items/${username}/favourite`}><i className="fas fa-heart"></i></NavLink>
            </li>
        </>
    )
}
export default UserHeaderComponent