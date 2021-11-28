import { useEffect, useState } from 'react'
import CardComponent from '../AllItems/CardComponent'
import './my-profile-style.css'
import MyProfileInputComponent from './MyProfileInputComponent'
function MyProfileComponent() {
    let [user, setUser] = useState({ username: undefined, email: undefined, phone: undefined })
    useEffect(() => {
        setUser({
            username: localStorage.getItem('username'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone')
        })
    }, [])
    return (
        <section id="my-profile">
            <div className="personal-info">
                <div className="profile-pic-container">
                </div>
                <form className="personal-info-form">
                    <MyProfileInputComponent text="Username" id="my-username" defVal={user.username}/>
                    <MyProfileInputComponent text="Email" id="my-email" defVal={user.email}/>
                    <MyProfileInputComponent text="Phone Number" id="my-phone" defVal={user.phone}/>
                </form>
            </div>
            <div className="my-items">
                <h3>7859 offers</h3>
                <div className="card-container">
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </div>
            </div>
        </section>
    )
}
export default MyProfileComponent