
function SelectInputComponent({name, options, text, changeHandler, selectedInput}) {
    return (
        <div className="select-container">
            <label htmlFor={name}>{text}</label>
            <select name={name} className="select-menu" onChange={changeHandler} >
                {selectedInput ? <option value={selectedInput} selected={true}>{selectedInput}</option> : null}
                {options.map(x => <option value={x}>{x}</option>)}
            </select>
        </div>
    )
}
export default SelectInputComponent