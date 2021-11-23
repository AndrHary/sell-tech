import "./login-style.css"
import {NavLink, useHistory} from "react-router-dom"
function LoginForm({onLogin}) {
    let history = useHistory()
   function submitHandler(e) {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    onLogin(email)
    history.push('/')
   }
    return (
        <div className="login-container">
            <form id="login-form" action="" method="" onSubmit={submitHandler}>
                <fieldset>
                    <h2>Log In</h2>
                    <p className="field-login">
                        <label htmlFor="email">Email</label>
                        <span className="input-login">
                            <input type="text" name="email" id="email" placeholder="Jhon@gmail.com" />
                        </span>
                    </p>
                    <p className="field-login">
                        <label htmlFor="password">Password</label>
                        <span className="input-login">
                            <input type="password" name="password" id="password" placeholder="******" />
                        </span>
                    </p>
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