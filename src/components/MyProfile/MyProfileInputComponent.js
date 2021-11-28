
function MyProfileInputComponent({text, id, defVal}) {
    return (
        <p className="field-my-profile">
            <label htmlFor={id}>{text}</label>
            <span className="my-input">
                <input id={id} readOnly={true} defaultValue={defVal}/>
            </span>
        </p>
    )
}
export default MyProfileInputComponent