import { useState, useContext } from "react";
import { authContext } from "../../contexts/authContext";
import InputComponent from "../RegisterComponent/InputComponent";
function AddressPhoneComponent() {
    const [sameAddress, setSameAddress] = useState(null)
    const user = useContext(authContext)
    return (
        <div className="create-side-inputs third-column">
            <div className={sameAddress === null ? "address-phone-req" : "cake"}>
                <p>Same address and phone number as yours?</p>
                <div>
                    <label htmlFor="name">Yes</label>
                    <input name="same" value="same" type="radio" onChange={() => setSameAddress(true)} ></input>
                    <label htmlFor="name">No</label>
                    <input name="different" value="different" type="radio" onChange={() => setSameAddress(false)} ></input>
                </div>
            </div>
            <div className={sameAddress !== null ? "address-phone" : "cake"}>
                <InputComponent type="text" name="phone" text="Phone Number:" defaultValue={user.phone} sameAddress={sameAddress} />
                <InputComponent name="country" text="Coutry:" type="text" defaultValue={user.country} sameAddress={sameAddress} />
                <InputComponent name="town" text="City/Town:" type="text" defaultValue={user.city} sameAddress={sameAddress}/>
                <InputComponent name="post-code" text="Post Code:" type="number" defaultValue={user.postCode} sameAddress={sameAddress}/>
                <InputComponent name="address" text="Address:" type="text" defaultValue={user.moreInfo} sameAddress={sameAddress}/>
            </div>
        </div>
    )
}
export default AddressPhoneComponent