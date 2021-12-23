import { BASE_URL } from "../constants"

function login(email, password) {
    return fetch('http://localhost:3050/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    }).then(res => {
        console.log(res)
        return res.json()
    })
}
function register(formData, data) {
    let profilePictureUrl = ''
    if (data) {
        profilePictureUrl = data.secure_url
    } else {
        profilePictureUrl = undefined
    }
    let username = formData.get('username')
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('repeat-password')
    let phone = formData.get('phone-number')
    let country = formData.get('country')
    let city = formData.get('town')
    let postCode = formData.get('post-code')
    let moreInfo = formData.get('more-info')
        return fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                rePass: rePass,
                profilePictureUrl: profilePictureUrl,
                phone: phone,
                country: country,
                city: city,
                postCode: postCode,
                moreInfo: moreInfo
            })
        })
        .then(res => {
             return res.json()
        })
        .catch(error => {
            throw error.message
        }) 
    } 

let userServices = {
    login,
    register
}
export default userServices