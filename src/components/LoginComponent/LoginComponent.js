import "./login-style.css"
import { NavLink, useHistory } from "react-router-dom"
import InputComponent from "../RegisterComponent/InputComponent"
import userServices from '../../utils/userServices.js'
import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent"
import { useState } from "react"
import loginHandler from "../../utils/loginHandler"
import ErrorComponent from "../ErrorComponent"
function LoginForm({ onLogin }) {
    let history = useHistory()
    let [isLoading, setIsLoading] = useState()
    let [errors, setErrors] = useState([])
    console.log(errors)
    return (
        <div className="login-container">
            <ErrorComponent errors={errors}/>
            {isLoading
                ? <LoadingSpinnerComponent />
                : null}
            <form id="login-form" action="" method="" onSubmit={(e) => loginHandler(setIsLoading, e, onLogin, history, setErrors)}>
                <fieldset>
                <ErrorComponent errors={errors}/>
                    <h2>Log In</h2>
                    <InputComponent name="email" type="text" text="Email" />
                    <InputComponent name="password" type="password" text="Password" />
                    <input className="button-submit-login" type="submit" value="Log in" />
                    <div className="register-redirect">
                        <hr></hr>
                        <h6>If you do not have account Sing Up from <NavLink to="/users/register">here</NavLink>.</h6>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default LoginForm