import { useState } from "react";
import InputComponent from "../RegisterComponent/InputComponent";
import ImageInputComponent from "./ImageBoxComponent";
import ImageBoxComponent from "./ImageBoxComponent";
import SelectInputComponent from "./SelectInputComponent";

function FormComponent({ submitHandler, settingImage, shownImage }) {
    let [same, setSame] = useState()
    console.log(same)
    let sameAdress = (e) => {
        if (e.target.value === 'same') {
            setSame(true)
        } else {
            setSame(false)
        }
    }
    let changeHandler = (e) => {
        if (e.target.files && e.target.files[0]) {
            settingImage(e.target.files[0])
        }
    }
    return (
        <form className="create-form" onSubmit={submitHandler}>
            <div className="input-container">
                <div className="item-information">
                    <div className="create-side-inputs">
                        <SelectInputComponent name="category" text="Choose a category:" options={['', 'Phone', 'Computer', 'Accessory', 'Parts']} />
                        <InputComponent text="Title:" type="text" name="title" />
                        <InputComponent text="Description:" type="text" name="description" />
                    </div>
                    <div className="create-side-inputs">
                        <SelectInputComponent name="condition" text="Condition:" options={['Brand new', 'Just opened', 'Used', 'For Parts', 'Fully not working']} />
                        <InputComponent text="Price:" type="number" name="price" />
                        <SelectInputComponent name="currency" text="Currency:" options={['BGN', 'EURO', '$']} clasName="select-container" />
                    </div>
                    <div className="create-side-inputs third-column">
                        <div className="address-phone-req">
                            <p>Same address and phone number as yours?</p>
                            <div>
                                <label htmlFor="name">Yes</label>
                                <input name="same" value="same" onClick={sameAdress} type="radio" ></input>
                                <label htmlFor="name">No</label>
                                <input name="different" value="different" onClick={sameAdress} type="radio" ></input>
                            </div>
                        </div>
                        <div className="address-phone">
                            <InputComponent name="phone" type="number" text="Phone Number" />
                            <InputComponent name="country" text="Coutry" type="text" />
                            <InputComponent name="town" text="City/Town" type="text" />
                            <InputComponent name="post-code" text="Post Code" type="number" />
                            <InputComponent name="more-info" text="Additional Information" type="text" />
                        </div>


                    </div>
                </div>
                <div className="form-image-container">
                    <div className="image-add-button-container">
                        <div className="button-text-cont">
                            <h3>Add Images</h3>
                            <label className="item-images" htmlFor="profilePictureUrl">+</label>
                            <span className="input-register">
                                <input type="file" onChange={changeHandler} className="file-input" name="profilePictureUrl" id="profilePictureUrl" />
                            </span>
                        </div>
                    </div>
                    <div className="images-add-container">
                        {shownImage.map((x) => <div className="input-image-cont">
                            <img src={x} alt="item"></img>
                        </div>)}
                    </div>
                </div>
            </div>
            <button type="submit">Post Item</button>
        </form >
    )
}
export default FormComponent