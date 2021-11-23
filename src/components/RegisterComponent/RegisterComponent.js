import './register-style.css'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
function RegisterComponent() {
    let [image, setImage] = useState({ image: 'https://cdn.onlinewebfonts.com/svg/img_117244.png' })
    let changePhotoHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage({
                image: URL.createObjectURL(e.target.files[0])
            })
        }
    }
    return (
        <div className="register-container">
            <form id="register-form" action="" method="" >
                <fieldset>
                    <h2>Sing Up</h2>
                    <div className="input-wraper">
                        <div className="left-side">
                            <p className="field-register">
                                <label htmlFor="username">Username</label>
                                <span className="input-register">
                                    <input type="password" name="password" id="username" />
                                </span>
                            </p>
                            <p className="field-register">
                                <label htmlFor="email">Email</label>
                                <span className="input-register">
                                    <input type="text" name="email" id="email" placeholder="Jhon@gmail.com" />
                                </span>
                            </p>
                            <p className="field-register">
                                <label htmlFor="password">Password</label>
                                <span className="input-register">
                                    <input type="password" name="password" id="password" placeholder="******" />
                                </span>
                            </p>
                            <p className="field-register">
                                <label htmlFor="repeat-password">Repeat Password</label>
                                <span className="input-register">
                                    <input type="password" name="password" id="repeat-password" placeholder="******" />
                                </span>
                            </p>
                        </div>
                        <div className="right-side">
                            <p className="field-register profile-picture-container">
                                <div className="picture-container">
                                    {image.image && <img src={image.image} className="selected-photo" alt="Selected" />}
                                </div>
                                <div>
                                    <label className="upload-image" htmlFor="profile-picture">Add Profile Picture</label>
                                    <span className="input-register">
                                        <input type="file" onChange={changePhotoHandler} className="file-input" name="password" id="profile-picture" />
                                    </span>
                                </div>
                            </p>
                            <p className="field-register">
                                <label htmlFor="phone-number">Phone Number</label>
                                <span className="input-register">
                                    <input type="number" name="password" id="phone-number" />
                                </span>
                            </p>
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