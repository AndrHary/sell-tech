import { useEffect, useState } from 'react'
import CardComponent from '../AllItems/CardComponent'
import './my-profile-style.css'
import MyProfileInputComponent from './MyProfileInputComponent'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import { useParams } from 'react-router'
function MyProfileComponent({onLogout}) {
    const user = useContext(authContext)
    const [userItems, setUserItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:3050/users/${user.username}/profile`)
            .then(res => res.json())
            .then(resJson => {
                setUserItems(resJson)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
       {isLoading ? <LoadingSpinnerComponent /> : null}
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
                    {user.username === params.username
                    ? <div className="profile-button-container">
                        <button onClick={onLogout}>Log Out</button>
                        <button>Edit</button>
                        <button>See More</button>
                    </div>
                    : null}
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