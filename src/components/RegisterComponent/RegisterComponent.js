import './register-style.css'
import InputComponent from './InputComponent'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
function RegisterComponent({ onRegister }) {
    let history = useHistory()
    let [image, setImage] = useState()
    let [shownImage, setShownImage] = useState('https://cdn.onlinewebfonts.com/svg/img_117244.png')
    let changePhotoHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            setShownImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    let submitHandler = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'xmjio1bi')
        data.append('cloud_name', 'dwwwjp9qb')
        fetch(`https://api.cloudinary.com/v1_1/dwwwjp9qb/image/upload`, {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(data => {
                let formData = new FormData(e.target)
                let username = formData.get('username')
                let email = formData.get('email')
                let password = formData.get('password')
                let rePass = formData.get('repeat-password')
                let phone = formData.get('phone-number')
                if (password === rePass) {
                    fetch('http://localhost:3050/users/register', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            username: username,
                            email: email,
                            password: password,
                            profilePictureUrl: data.secure_url,
                            phone: phone
                        })
                    }).then(dat => dat.json())
                        .then(res => {
                            onRegister(res)
                            history.push('/')
                        })
                }
            })

    }

    return (
        <div className="register-container">
            <form id="register-form" onSubmit={submitHandler} >
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="input-wraper">
                        <div className="register-one-side">
                            <InputComponent name="username" text="Username" type="text" placeHolder="ex. Jonny56"/>
                            <InputComponent name="email" text="Email" type="text" placeHolder="ex. Jonny56@gmail.com"/>
                            <InputComponent name="password" text="Password" type="password" />
                            <InputComponent name="repeat-password" text="Repeat Password" type="password" />
                        </div>
                        <div className="register-one-side">
                            <p className="field-register profile-picture-container">
                                <div className="picture-container">
                                    {shownImage && <img src={shownImage} className="selected-photo" alt="Selected" />}
                                </div>
                                <div>
                                    <label className="upload-image" htmlFor="profilePictureUrl">Add Profile Picture</label>
                                    <span className="input-register">
                                        <input type="file" onChange={changePhotoHandler} className="file-input" name="profilePictureUrl" id="profilePictureUrl" />
                                    </span>
                                </div>
                            </p>
                            <InputComponent name="phone-number" text="Phone Number" type="number" />
                        </div>
                        <div className="register-one-side">
                            <InputComponent name="country" text="Coutry" type="text" placeHolder="ex. Bulgaria"/>
                            <InputComponent name="town" text="City/Town" type="text" placeHolder="ex. Sofia"/>
                            <InputComponent name="post-code" text="Post Code" type="number" placeHolder="ex. 1000"/>
                            <InputComponent name="more-info" text="Additional Information" type="text" placeHolder="ex. st. Mir 4, 4th floor, ap. 3"/>
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