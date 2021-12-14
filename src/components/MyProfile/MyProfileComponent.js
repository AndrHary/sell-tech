import { useEffect, useState } from 'react'
import CardComponent from '../AllItems/CardComponent'
import './my-profile-style.css'
import MyProfileInputComponent from './MyProfileInputComponent'
import {useParams} from 'react-router-dom'
import {useContext} from 'react'
import { authContext } from '../../contexts/authContext'
function MyProfileComponent() {
    let user = useContext(authContext)
    let params = useParams()
    useEffect(() => {
        fetch(`http://localhost:3050/users/my-profile/${params.username}`)
        .then(res => res.json())
    }, [params.username])
    return (
        <section id="my-profile">
            <div className="personal-info">
                <div className="profile-pic-container">
                    <img src={user.profilePictureUrl} alt="avatar"></img>
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