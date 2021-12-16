import './register-style.css'
import InputComponent from './InputComponent'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import userServices from '../../utils/userServices.js'
import postImage from '../../utils/postImage.js'
function RegisterComponent({ onLogin }) {
    let history = useHistory()
    let [image, setImage] = useState([])
    let [shownImage, setShownImage] = useState('https://cdn.onlinewebfonts.com/svg/img_117244.png')
    let [isLoading, setIsLoading] = useState(false)
    let changePhotoHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            setShownImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    let submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let fData = new FormData()
        postImage(fData, image)
            .then(data => {
                let formData = new FormData(e.target)
                userServices.register(formData, data)
                    .then(res => res.json())
                    .then(resJson => {
                        console.log(resJson)
                        onLogin(resJson)
                        setIsLoading(false)
                        history.push('/')
                    })

            })
    }
    return (
        <div className="register-container">
            {isLoading ? <LoadingSpinnerComponent /> : null}
            <form id="register-form" onSubmit={submitHandler} >
                <fieldset>
                    <div className="input-wraper">
                        <div className="register-one-side">
                            <InputComponent name="username" text="Username:" type="text" />
                            <InputComponent name="email" text="Email:" type="text" />
                            <InputComponent name="password" text="Password:" type="password" />
                            <InputComponent name="repeat-password" text="Repeat Password:" type="password" />
                        </div>
                        <div className="register-one-side">
                            <p className="field-register profile-picture-container">
                                <div className="picture-container">
                                    {shownImage && <img src={shownImage} className="selected-photo" alt="Selected" />}
                                </div>
                                <div>
                                    <label className="upload-image" htmlFor="profilePictureUrl">Add Profile Picture:</label>
                                    <span className="input-register">
                                        <input type="file" onChange={changePhotoHandler} className="file-input" name="profilePictureUrl" id="profilePictureUrl" />
                                    </span>
                                </div>
                            </p>
                            <InputComponent name="phone-number" text="Phone Number:" type="number" />
                        </div>
                        <div className="register-one-side">
                            <InputComponent name="country" text="Coutry:" type="text" />
                            <InputComponent name="town" text="City/Town:" type="text" />
                            <InputComponent name="post-code" text="Post Code:" type="number" />
                            <InputComponent name="more-info" text="Additional Information:" type="text" placeHolder="ex: st. Mir 4, 4th floor, ap. 3" />
                        </div>
                    </div>
                    <input className="button-submit-login" type="submit" value="Sign Up" />
                    <div className="login-redirect">
                        <hr></hr>
                        <h6>If you have account Log In from <NavLink to="/users/login">here</NavLink>.</h6>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default RegisterComponent