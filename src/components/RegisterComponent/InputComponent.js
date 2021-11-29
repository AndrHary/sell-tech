function InputComponent({name, text, type, placeHolder}) {
    return (
        <p className="field-register">
            <label htmlFor={name}>{text}</label>
            <span className="input-register">
                <input type={type} name={name} id={name} placeholder={placeHolder}/>
            </span>
        </p>
    )
}
export default InputComponent