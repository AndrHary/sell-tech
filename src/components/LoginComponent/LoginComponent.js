import "./login-style.css"
import {NavLink, useHistory} from "react-router-dom"
import InputComponent from "../RegisterComponent/InputComponent"
function LoginForm({onLogin}) {
    let history = useHistory()
   function submitHandler(e) {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')
    fetch('http://localhost:3050/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
    .then(user => {
       onLogin(user)
       history.push('/')
    })
   }
    return (
        <div className="login-container">
            <form id="login-form" action="" method="" onSubmit={submitHandler}>
                <fieldset>
                    <h2>Log In</h2>
                    <InputComponent name="email" type="text" text="Email"/>
                    <InputComponent name="password" type="password" text="Password"/>
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