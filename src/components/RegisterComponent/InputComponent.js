function InputComponent({name, text, type}) {
    return (
        <p className="field-register">
            <label htmlFor={name}>{text}</label>
            <span className="input-register">
                <input type={type} name={name} id={name} />
            </span>
        </p>
    )
}
export default InputComponent