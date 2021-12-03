
function SelectInputComponent({name, options, text, changeHandler}) {
    return (
        <div className="select-container">
            <label htmlFor={name}>{text}</label>
            <select name={name} className="select-menu" onChange={changeHandler}>
                {options.map(x => <option value={x}>{x}</option>)}
            </select>
        </div>
    )
}
export default SelectInputComponent