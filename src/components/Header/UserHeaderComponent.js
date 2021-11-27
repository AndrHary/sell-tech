import {NavLink} from "react-router-dom"
let UserHeaderComponent = ({user}) => {
    return (
        <>
            <li>
                <NavLink activeStyle={{ color: "#5f9ea0", backgroundColor: "#FAF6F6" }} to="/items/create-item">Sell</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#5f9ea0", backgroundColor: "#FAF6F6" }} to="/users/my-profile/:username">{user.username}</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#5f9ea0", backgroundColor: "#FAF6F6" }} to="/items/offers">Offers</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#5f9ea0", backgroundColor: "#FAF6F6" }} to="/users/items/:username/favorite"><i className="fas fa-heart"></i></NavLink>
            </li>
        </>
    )
}
export default UserHeaderComponent