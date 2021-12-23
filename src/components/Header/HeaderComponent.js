import './header-style.css'
import { NavLink } from 'react-router-dom'
import UserHeaderComponent from './UserHeaderComponent'
import GuestHeaderComponent from './GuestHeaderComponent'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
function HeaderComponent() {
    let user = useContext(authContext)
    return (
        <nav className="nav">
            <div className="logo">
                <NavLink to="/">SellTech</NavLink>
            </div>
            
            <ul className="nav-links">
            {user.username ? <UserHeaderComponent profilePictureUrl={user.profilePictureUrl} username={user.username}/> : <GuestHeaderComponent/>}
            </ul>
        </nav>
    )
}
export default HeaderComponent