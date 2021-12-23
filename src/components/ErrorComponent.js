function ErrorComponent({ errors }) {
    return (
        <>
            {errors.length > 0
                ? <div className="error-container">
                    {errors.map((x) => {
                        return <p>! {x}</p>
                    })}
                </div>
                : null}
        </>
    )
}
export default ErrorComponent