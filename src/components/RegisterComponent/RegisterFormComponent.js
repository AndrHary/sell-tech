import InputComponent from "./InputComponent"
import { NavLink } from "react-router-dom"
function RegisterFormComponent({submitHandler, changePhotoHandler, shownImage}) {
    return (
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
                                <InputComponent name="phone-number" text="Phone Number:" type="text" />
                            </div>
                            <div className="register-one-side">
                                <InputComponent name="country" text="Coutry:" type="text" />
                                <InputComponent name="town" text="City/Town:" type="text" />
                                <InputComponent name="post-code" text="Post Code:" type="number" />
                                <InputComponent name="more-info" text="Address::" type="text" placeHolder="ex: st. Mir 4, 4th floor, ap. 3" />
                            </div>
                        </div>
                        <div className="butto-redir-container">
                          <input className="button-submit-login" type="submit" value="Sign Up" />
                        <div className="login-redirect">
                            <hr></hr>
                            <h6>If you have account Log In from <NavLink to="/users/login">here</NavLink>.</h6>
                        </div>  
                        </div>
                    </fieldset>
                </form>
    )
}
export default RegisterFormComponent