import userServices from "./userServices"
function loginHandler(setIsLoading, e, onLogin, history) {
    setIsLoading(true)
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    let email = formData.get('email')
    let password = formData.get('password')
    userServices.login(email, password)
        .then(user => {
            setIsLoading(false)
            console.log(user)
            onLogin(user)
            history.push('/')
        })
}
export default loginHandler