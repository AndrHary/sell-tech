import userServices from "./userServices"
import userValidationError from "./userValidationError"
function loginHandler(setIsLoading, e, onLogin, history, setErrors) {
    setIsLoading(true)
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')
    userServices.login(email, password)
        .then(user => {
            if (user.username) {
            setIsLoading(false)
            onLogin(user)
            history.push('/')  
            } else {
                throw {message: 'The username or password are invalid'}
            }
        })
        .catch(error => {
            console.log(error)
            setErrors(userValidationError(error.message))
            setIsLoading(false)
        })
}
export default loginHandler