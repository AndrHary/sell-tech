import {NavLink} from "react-router-dom"
let GuestHeaderComponent = () => {
    return (
        <>
          <li>
                    <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/users/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: "#3c4654", backgroundColor: "#FAF6F6" }} to="/users/register">Sign Up</NavLink>
                </li>  
        </>
    )
}
export default GuestHeaderComponent