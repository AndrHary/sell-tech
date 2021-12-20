import { useState, useContext } from "react";
import { authContext } from "../../contexts/authContext";
import InputComponent from "../RegisterComponent/InputComponent";
import AddImageComponent from "./AddImageComponent";
import AddressPhoneComponent from "./AddressPhoneComponent";
import SelectInputComponent from "./SelectInputComponent";

function FormComponent({ submitHandler, settingImage, image}) {
    return (
        <form className="create-form" onSubmit={submitHandler}>
            <div className="input-container">
                <div className="item-information">
                    <div className="create-side-inputs">
                        <SelectInputComponent name="category" text="Choose a category:" options={['Phone', 'Computer', 'Accessory', 'Parts']} />
                        <InputComponent text="Title:" type="text" name="title" />
                        <InputComponent text="Description:" type="text" name="description" />
                    </div>
                    <div className="create-side-inputs">
                        <SelectInputComponent name="condition" text="Condition:" options={['Brand new', 'Just opened', 'Used', 'For Parts', 'Fully not working']} />
                        <InputComponent text="Price:" type="number" name="price" />
                        <SelectInputComponent name="currency" text="Currency:" options={['BGN', 'EURO', '$']} clasName="select-container" />
                    </div>
                    <AddressPhoneComponent/>
                </div>
                <AddImageComponent image={image} settingImage={settingImage}/>
            </div>
            <input className="button-submit-login create" type="submit" value="Upload" />
        </form >
    )
}
export default FormComponent