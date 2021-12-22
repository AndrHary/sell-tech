import { BASE_URL } from "../constants"

function editItem(formData, user, data, itemId) {
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
    let address = formData.get('address')
    let imageUrl = ''
    if (data) {
     imageUrl = data.secure_url
    } else {
        imageUrl = undefined
    }
     
    return fetch(`${BASE_URL}/items/${itemId}/edit`, {
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
            address: address,
            imageUrl: imageUrl
        })
    }).then(res => res.json())
}
export default editItem