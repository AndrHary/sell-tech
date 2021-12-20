import './create-item-style.css'
import { useState, useContext } from 'react'
import FormComponent from './FormComponent'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import postImage from '../../utils/postImage'
import createItem from '../../utils/createItem'
function CreateItem() {
    let user = useContext(authContext)
    console.log(user)
    const history = useHistory()
    const [image, setImage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const settingImage = (file) => {
        setImage(file)
    }
    const submitHandler = (e) => {
        setIsLoading(true)
        e.preventDefault()
        const fData = new FormData()
        postImage(fData, image)
            .then(data => {
                const formData = new FormData(e.target)
                   createItem(formData, user, data)
                    .then(item => {
                        setIsLoading(false)
                        history.push('/items/newest-items')
                    })
            })

    }
    return (
        <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            <section id="create-item">
                {isLoading ? <LoadingSpinnerComponent /> : null}
                <div className="create-container">
                    <div className="choose-category-container">
                        <h2>Sell now with 3 clicks!</h2>
                    </div>
                    <FormComponent settingImage={settingImage} submitHandler={submitHandler} image={image} />
                </div>
            </section>
        </>
    )
}
export default CreateItem