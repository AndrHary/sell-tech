import './register-style.css'
import InputComponent from './InputComponent'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import userServices from '../../utils/userServices.js'
import postImage from '../../utils/postImage.js'
import RegisterFormComponent from './RegisterFormComponent'
function RegisterComponent({ onLogin }) {
    let history = useHistory()
    let [image, setImage] = useState([])
    let [shownImage, setShownImage] = useState('https://cdn.onlinewebfonts.com/svg/img_117244.png')
    let [isLoading, setIsLoading] = useState(false)
    let changePhotoHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
            setShownImage(URL.createObjectURL(e.target.files[0]))
        }
    }
    let submitHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let fData = new FormData()
        postImage(fData, image)
            .then(data => {
                let formData = new FormData(e.target)
                userServices.register(formData, data)
                    .then(res => res.json())
                    .then(resJson => {
                        console.log(resJson)
                        onLogin(resJson)
                        setIsLoading(false)
                        history.push('/')
                    })

            })
    }
    return (
        <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            <div className="register-container">

                {isLoading ? <LoadingSpinnerComponent /> : null}
                <RegisterFormComponent submitHandler={submitHandler} changePhotoHandler={changePhotoHandler} shownImage={shownImage}/>
            </div>
            </>
            )
}
            export default RegisterComponent