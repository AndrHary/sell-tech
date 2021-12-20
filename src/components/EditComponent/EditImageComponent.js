import { useContext, useState, useEffect } from 'react'
import { itemContext } from "../../contexts/itemContext"
const EditImageComponent = ({ image, settingImage }) => {
    const item = useContext(itemContext)
    const [imageUrl, setImageUrl] = useState()
    const removeImage = () => {
        setImageUrl('')
        settingImage({})
    }
    const changeHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImageUrl(URL.createObjectURL(e.target.files[0]))
            settingImage(e.target.files[0])
        }
    }
    return (
        <div className="form-image-container">
            <div className="image-add-button-container">
                <p>Add Image:</p>
                <div className="button-text-cont">
                    {imageUrl !== ''  &&
                        <>
                            <img className="product-img" src={imageUrl ? imageUrl : item.imageUrl} alt="product" />
                            <button type="button" onClick={removeImage}>x</button>
                        </>}
                    {imageUrl === '' && <>
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
export default EditImageComponent