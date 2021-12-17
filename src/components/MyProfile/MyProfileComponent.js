import { useEffect, useState } from 'react'
import CardComponent from '../AllItems/CardComponent'
import './my-profile-style.css'
import MyProfileInputComponent from './MyProfileInputComponent'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
function MyProfileComponent({onLogout}) {
    let user = useContext(authContext)
    let [userItems, setUserItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3050/users/my-profile/${user.username}`)
            .then(res => res.json())
            .then(resJson => {
                setUserItems(resJson)
            })
    }, [])
    console.log(userItems)
    return (
        <>
            <div className="circle"></div>
            <section id="my-profile">
                <div className="personal-info">
                    <div className="profile-pic-container">
                        <img src={user.profilePictureUrl} alt="avatar"></img>
                    </div>
                    <form className="personal-info-form">
                        <MyProfileInputComponent text="Username:" id="my-username" defVal={user.username} />
                        <MyProfileInputComponent text="Email:" id="my-email" defVal={user.email} />
                        <MyProfileInputComponent text="Phone Number:" id="my-phone" defVal={user.phone} />
                    </form>
                    <div className="profile-button-container">
                        <button onClick={onLogout}>Log Out</button>
                        <button>Edit</button>
                        <button>See More</button>
                    </div>
                </div>
                <div className="my-items">
                    <h3>Your offers: {userItems.length}</h3>
                    <div className="card-container">
                        {userItems !== []
                            ? userItems.map((x) => <CardComponent item={x} />)
                            : null}
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyProfileComponent