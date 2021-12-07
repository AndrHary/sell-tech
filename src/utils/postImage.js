function postImage(data, image) {
    data.append('file', image)
    data.append('upload_preset', 'xmjio1bi')
    data.append('cloud_name', 'dwwwjp9qb')
    return fetch(`https://api.cloudinary.com/v1_1/dwwwjp9qb/image/upload`, {
        method: 'POST',
        body: data
    })
        .then(res => res.json())
}
export default postImage