function DescriptionComponent() {
    return (
        <p className="field-description">
        <label htmlFor="description">Description</label>
        <span className="input-register">
            <input className="description" type="text" name="description" id="description"/>
        </span>
    </p>
    )
}
export default DescriptionComponent