import './create-item-style.css'
import { useState, useContext } from 'react'
import FormComponent from './FormComponent'
import { useHistory } from 'react-router-dom'
import { authContext } from '../../contexts/authContext'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
function CreateItem() {
    let user = useContext(authContext)
    const history = useHistory()
    const [image, setImage] = useState({ file: {}, image: '' })
    const [isLoading, setIsLoading] = useState(false)
    const settingImage = (file) => {
        setImage(file)
    }
    const submitHandler = (e) => {
        setIsLoading(true)
        e.preventDefault()
        const fData = new FormData()
        fData.append('file', image.file)
        fData.append('upload_preset', 'xmjio1bi')
        fData.append('cloud_name', 'dwwwjp9qb')
        fetch(`https://api.cloudinary.com/v1_1/dwwwjp9qb/image/upload`, {
            method: 'POST',
            body: fData
        })
            .then(res => res.json())
            .then(data => {
                const formData = new FormData(e.target)
                let category = formData.get('category')
                let title = formData.get('title')
                let description = formData.get('description')
                let condition = formData.get('condition')
                let price = formData.get('price')
                let currency = formData.get('currency')
                let phone = formData.get('phone')
                let country = formData.get('country')
                let town = formData.get('town')
                let postCode = formData.get('post-code')
                let additionalInformation = formData.get('more-info')
                let imageUrl = data.secure_url
                fetch('http://localhost:3050/items/create-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': user.authToken
                    },
                    body: JSON.stringify({
                        category: category,
                        title: title,
                        description: description,
                        condition: condition,
                        price: price,
                        currency: currency,
                        phone: phone,
                        country: country,
                        town: town,
                        postCode: postCode,
                        additionalInformation: additionalInformation,
                        imageUrl: imageUrl
                    })
                }).then(res => res.json())
                    .then(item => {
                        setIsLoading(false)
                        console.log(item)
                        history.push('/items/newest-items')
                    })
            })

    }
    return (
        <section id="create-item">
            {isLoading ? <LoadingSpinnerComponent /> : null}
            <div className="create-container">
                <div className="choose-category-container">
                    <h2>Sell now with 3 clicks!</h2>
                </div>
                <FormComponent settingImage={settingImage} submitHandler={submitHandler} image={image} />
            </div>
        </section>
    )
}
export default CreateItem