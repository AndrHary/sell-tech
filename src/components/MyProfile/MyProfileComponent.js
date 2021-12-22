import { useEffect, useState } from 'react'
import CardComponent from '../AllItems/CardComponent'
import './my-profile-style.css'
import MyProfileInputComponent from './MyProfileInputComponent'
import { useContext } from 'react'
import { authContext } from '../../contexts/authContext'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import { useParams } from 'react-router'
import { BASE_URL } from '../../constants'
function MyProfileComponent({ onLogout }) {
    const user = useContext(authContext)
    const [userItems, setUserItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        fetch(`${BASE_URL}/users/${params.username}/profile`)
            .then(res => res.json())
            .then(resJson => {
                setUserItems(resJson)
                setIsLoading(false)
            })
    }, [])
    console.log(userItems)
    return (
        <>
            {!userItems.username
                ? <LoadingSpinnerComponent />
                : <>
                    <div className="circle"></div>
                    <section id="my-profile">
                        <div className="personal-info">
                            <div className="profile-pic-container">
                                <img src={userItems.profilePictureUrl} alt="avatar"></img>
                            </div>
                            <form className="personal-info-form">
                                <>
                                    <MyProfileInputComponent text="Username:" id="my-username" defVal={userItems.username} />
                                    <MyProfileInputComponent text="Email:" id="my-email" defVal={userItems.email} />
                                    <MyProfileInputComponent text="Phone:" id="my-phone" defVal={userItems.phone} />
                                </>

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
                            {user.username === userItems.username 
                            ?<h3>My Items: {userItems.myItems.length}</h3>
                            : <h3>{userItems.username}'s Items: {userItems.myItems.length}</h3>}
                            <div className="card-container">
                                {userItems.myItems.length > 0 ?
                                    userItems.myItems.map((x) => <CardComponent item={x} />)
                                    : null}
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}
export default MyProfileComponent