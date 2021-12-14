import { useEffect, useState } from "react"

function AddImageComponent({ image, settingImage }) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if (image.file.name) {
            image.file.arrayBuffer()
                .then(() => {
                    const img = URL.createObjectURL(image.file)
                    setImageUrl(img)
                })


        }
    }, [image.file])
    const changeHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            const image = { file: e.target.files[0] }
            settingImage(image)
        }
    }
    const removeImage = () => {
        setImageUrl('')
        settingImage({ file: {}, image: `` })
    }
    return (
        <div className="form-image-container">
            <div className="image-add-button-container">
                <p>Add Image:</p>
                <div className="button-text-cont">
                    {imageUrl &&
                        <>
                            <img className="product-img" src={imageUrl} alt="product" />
                            <button type="button" onClick={removeImage}>x</button>
                        </>}
                    {imageUrl || <>
                        <label className="item-images" htmlFor="profilePictureUrl">+</label>
                        <span className="input-register">
                            <input type="file" onChange={changeHandler} className="file-input" name="profilePictureUrl" id="profilePictureUrl" />
                        </span>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}
export default AddImageComponent