import './header-style.css'
import { NavLink } from 'react-router-dom'
import UserHeaderComponent from './UserHeaderComponent'
import GuestHeaderComponent from './GuestHeaderComponent'
function HeaderComponent({isAuthenticated, user}) {
    let username = localStorage.getItem('username')
    return (
        <nav className="nav">
            <div className="logo">
                <NavLink to="/">SellTech</NavLink>
            </div>
            <div className="search-bar">

                <input type="text" id="search" placeholder="Search..." />
                <button className="search-btn"><i className="fas fa-search icon"></i></button>
            </div>
            <ul className="nav-links">
            {username ? <UserHeaderComponent username={username}/> : <GuestHeaderComponent/>}
            </ul>
        </nav>
    )
}
export default HeaderComponent