function login(email, password) {
    return fetch('http://localhost:3050/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json())
}
 async function register(formData, data) {
    let username = formData.get('username')
    let email = formData.get('email')
    let password = formData.get('password')
    let rePass = formData.get('repeat-password')
    let phone = formData.get('phone-number')
    let country = formData.get('country')
    let city = formData.get('town')
    let postCode = formData.get('post-code')
    let moreInfo = formData.get('more-info')
    if (password === rePass) {
        let res = await fetch('http://localhost:3050/users/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                profilePictureUrl: data.secure_url,
                phone: phone,
                country: country,
                city: city,
                postCode: postCode,
                moreInfo: moreInfo
            })
        })
        let jsonRes = await res.json()
        if (jsonRes.ok) {
            return jsonRes
        } else {
            throw jsonRes
        }
    }
}
let userServices = {
    login,
    register
}
export default userServices