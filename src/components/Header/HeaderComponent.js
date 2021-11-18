import './header-style.css'
import {NavLink} from 'react-router-dom'
function HeaderComponent() {
    return (
        <nav className="nav">
            <div className="logo">
                <h3>SellTech</h3>
            </div>
            <div className="search-bar">

                <input type="text" id="search" placeholder="Search..."/>
                <button className ="search-btn"><i className ="fas fa-search icon"></i></button>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink activeStyle={{color: "#3c4654", backgroundColor: "#FAF6F6"}} to="/items/create">Sell</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "#3c4654", backgroundColor: "#FAF6F6"}} to="/users/my-profile/:username">My Profile</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "#3c4654", backgroundColor: "#FAF6F6"}} to="/items/hot-offers">Offers</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{color: "#3c4654", backgroundColor: "#FAF6F6"}} to="/users/items/:username/favorite"><i className="fas fa-heart"></i></NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default HeaderComponent