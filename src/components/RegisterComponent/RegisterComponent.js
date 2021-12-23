import './register-style.css'
import InputComponent from './InputComponent'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import userServices from '../../utils/userServices.js'
import postImage from '../../utils/postImage.js'
import RegisterFormComponent from './RegisterFormComponent'
import userValidationError from '../../utils/userValidationError'
import ErrorComponent from '../ErrorComponent'
function RegisterComponent({ onLogin }) {
    const history = useHistory()
    const [image, setImage] = useState(null)
    const [shownImage, setShownImage] = useState('https://cdn.onlinewebfonts.com/svg/img_117244.png')
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const changePhotoHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            setShownImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let fData = new FormData()
        postImage(fData, image)
            .then(data => {
                let formData = new FormData(e.target)
                userServices.register(formData, data, setErrors, errors)
                    .then(resJson => {
                        if (resJson.username) {
                            console.log(resJson)
                            onLogin(resJson)
                            setIsLoading(false)
                            history.push('/')
                        } else {
                            throw resJson
                        }
                    })
                    .catch(error => {
                        setIsLoading(false)
                        console.log(error)
                        setErrors(userValidationError(error.message))

                    })
            })
    }
    console.log(errors)
    return (
        <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            <div className="register-container">
                <ErrorComponent errors={errors} />
                {isLoading ? <LoadingSpinnerComponent /> : null}
                <RegisterFormComponent submitHandler={submitHandler} changePhotoHandler={changePhotoHandler} shownImage={shownImage} />
            </div>
        </>
    )
}
export default RegisterComponent