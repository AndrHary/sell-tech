import { useState } from "react";
import InputComponent from "../RegisterComponent/InputComponent";
import AddImageComponent from "./AddImageComponent";
import ImageInputComponent from "./ImageBoxComponent";
import ImageBoxComponent from "./ImageBoxComponent";
import SelectInputComponent from "./SelectInputComponent";

function FormComponent({ submitHandler, settingImage, image}) {
   
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
                                <input name="same" value="same" type="radio" ></input>
                                <label htmlFor="name">No</label>
                                <input name="different" value="different" type="radio" ></input>
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
                <AddImageComponent image={image} settingImage={settingImage}/>
            </div>
            <button type="submit">Post Item</button>
        </form >
    )
}
export default FormComponent