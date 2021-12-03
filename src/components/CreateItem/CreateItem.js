import InputComponent from '../RegisterComponent/InputComponent'
import SelectInputComponent from './SelectInputComponent'
import './create-item-style.css'
import { useEffect, useState } from 'react'
import FormComponent from './FormComponent'
import { useHistory } from 'react-router-dom'
function CreateItem() {
    let history = useHistory()
    let [image, setImage] = useState()
    let [shownImage, setShownImage] = useState([])
    let settingImage = (file) => {
            setImage(file)
            if (shownImage.length < 5) {
             setShownImage([...shownImage, URL.createObjectURL(file)])   
            } 
    }
    let submitHandler = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append('file', image)
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
            let imageUrl = data.secureUrl
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
                 <FormComponent shownImage={shownImage} settingImage={settingImage} submitHandler={submitHandler}/> 
            </div>
        </section>
    )
}
export default CreateItem