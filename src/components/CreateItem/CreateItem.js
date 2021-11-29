import InputComponent from '../RegisterComponent/InputComponent'
import SelectInputComponent from './SelectInputComponent'
import './create-item-style.css'
function CreateItem()  {
    return (
        <section id="create-item">
           <div className="create-container">
               <div className="create-one-side">
                   <SelectInputComponent name="category" text="Category" options={['Phone', 'Computer', 'Accessory', 'Parts', 'Service']}/>
                   <InputComponent  name="brand" type="text" text="Brand"/>
                   <InputComponent name="model" type="model" text="Model"/>
                   <InputComponent name="price" type="number" text="Price"/>
                   
               </div>
               <div className="create-one-side"></div>
               <div className="create-one-side"></div>
           </div>
        </section>
    )
}
export default CreateItem