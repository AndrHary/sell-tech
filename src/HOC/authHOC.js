import { useContext } from "react"
import { authContext } from "../contexts/authContext"
import { useHistory } from "react-router-dom"
const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        let user = useContext(authContext)
        let history = useHistory()
        if (!user.authToken) {
            history.push('/users/login')
            return null
        }
        return <Component {...props} />
    }
    return WrapperComponent
}
export default isAuth