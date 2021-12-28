import SelectInputComponent from "../CreateItem/SelectInputComponent"
import InputComponent from "../RegisterComponent/InputComponent"
import EditImageComponent from "./EditImageComponent"
import { useContext } from "react"
import { itemContext } from "../../contexts/itemContext"
const EditFormComponent = ({image, settingImage, submitHandler}) => {
    const item = useContext(itemContext)
    const categoryArray = ['Phone', 'Computer', 'Accessory', 'Parts'].filter((x) => x !== item.category)
    const conditionArray = ['Brand new', 'Just opened', 'Used', 'For Parts', 'Fully not working'].filter((x) => x !== item.condition)
    const currencyArray = ['BGN', 'EURO', '$'].filter((x) => x !== item.currency)
    return (
        <form className="create-form" onSubmit={submitHandler}>
            <div className="input-container">
                <div className="item-information">
                    <div className="create-side-inputs">
                        <SelectInputComponent name="category" text="Choose a category:" options={categoryArray} selectedInput={item.category}/>
                        <InputComponent text="Title:" type="text" name="title" defaultValue={item.title} sameAddress={true} />
                        <InputComponent text="Description:" type="text" name="description" defaultValue={item.description} sameAddress={true} />
                    </div>
                    <div className="create-side-inputs">
                        <SelectInputComponent name="condition" text="Condition:" options={conditionArray} selectedInput={item.condition} />
                        <InputComponent text="Price:" type="number" name="price" defaultValue={item.price} sameAddress={true} />
                        <SelectInputComponent name="currency" text="Currency:" options={currencyArray} selectedInput={item.currency}/>
                    </div>
                    <div className="create-side-inputs third-column">
                        <div className="address-phone">
                            <InputComponent type="text" name="phone" text="Phone Number:" defaultValue={item.phone} sameAddress={true} />
                            <InputComponent name="country" text="Coutry:" type="text" defaultValue={item.country} sameAddress={true} />
                            <InputComponent name="town" text="City/Town:" type="text" defaultValue={item.town} sameAddress={true} />
                            <InputComponent name="post-code" text="Post Code:" type="number" defaultValue={item.postCode} sameAddress={true} />
                            <InputComponent name="more-info" text="Address:" type="text" defaultValue={item.address} sameAddress={true} />
                        </div>
                    </div>
                </div>
               <EditImageComponent  image={image} settingImage={settingImage}/>
            </div>
            <input className="button-submit-login create" type="submit" value="Edit" />
        </form >
    )
}
export default EditFormComponent