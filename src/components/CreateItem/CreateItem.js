import InputComponent from '../RegisterComponent/InputComponent'
import SelectInputComponent from './SelectInputComponent'
import './create-item-style.css'
import { useEffect, useState } from 'react'
import FormComponent from './FormComponent'
import { useHistory } from 'react-router-dom'
function CreateItem() {
    const history = useHistory()
    const [image, setImage] = useState({file: {}, image: ''})
    console.log(image)
    const settingImage = (file) => {
         setImage(file)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('file', image.image)
        data.append('upload_preset', 'xmjio1bi')
        data.append('cloud_name', 'dwwwjp9qb')
        fetch(`https://api.cloudinary.com/v1_1/dwwwjp9qb/image/upload`, {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            let formData = new FormData(e.target)
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
            let ownerId = localStorage.getItem('userId') 
            fetch('http://localhost:3050/items/create-item', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
                    imageUrl: imageUrl,
                    ownerId: ownerId
                })
            }).then(res => res.json())
              .then(item => {
               console.log(item)
               history.push('/items/all-items')
              })
        })

    }
    return (
        <section id="create-item">
            <div className="create-container">
                <div className="choose-category-container">
                    <h2>Sell now with 3 clicks!</h2>
                </div>
                 <FormComponent settingImage={settingImage} submitHandler={submitHandler} image={image}/> 
            </div>
        </section>
    )
}
export default CreateItem