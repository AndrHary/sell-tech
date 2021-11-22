import {NavLink} from "react-router-dom"
let UserHeaderComponent = ({email}) => {
    return (
        <>
            <li>
                <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/items/create">Sell</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/users/my-profile/:username">{email}</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/items/hot-offers">Offers</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/users/items/:username/favorite"><i className="fas fa-heart"></i></NavLink>
            </li>
        </>
    )
}
export default UserHeaderComponent