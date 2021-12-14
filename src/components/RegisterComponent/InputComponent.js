function InputComponent({ name, text, type, placeHolder, defaultValue, sameAddress}) {
    return (
        <p className="field-register">
            <label htmlFor={name}>{text}</label>
            <span className="input-register">
                {sameAddress === true
                    ? <input type={type} name={name} id={name} defaultValue={defaultValue} />
                    : <input type={type} name={name} id={name} placeholder={placeHolder} />
                }

            </span>
        </p>
    )
}
export default InputComponent