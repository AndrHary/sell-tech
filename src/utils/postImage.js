function postImage(fData, image) {
    let data = ''
    if (image) {
        fData.append('file', image)
        fData.append('upload_preset', 'xmjio1bi')
        fData.append('cloud_name', 'dwwwjp9qb')
        return fetch(`https://api.cloudinary.com/v1_1/dwwwjp9qb/image/upload`, {
            method: 'POST',
            body: fData
        }).then(res =>  res.json())
        .then(resJson => {
            return resJson
        })

    } else {
        return undefined
    }
}

export default postImage