function postImage(image, presetName, cloudName) {
    let data = new FormData()
    data.append('file', image)
    data.append('upload_preset', presetName)
    data.append('cloud_name', cloudName)
    return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: data
    })
    .then(res => {
        res.json()
    })
    .then(uplo => {
       return  uplo
    })
}
let registerServices = {
    postImage
}
export default registerServices