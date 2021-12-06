function PhotoTitleComponent() {
    return (
        <div className="photo-title-container">
            <div className="details-image-container">
                <img src="https://static.digit.in/product/9e49b958c81da2b06c1f1d9f68e43b0a576e1658.jpeg" alt="product"></img>
            </div>
            <div className="title-category-price-container">
                <h2>Iphone X 64GB matt black </h2>
                <div className="base-info-container">
                    <h3 className="base-desc">Category:</h3>
                    <h3>Phone</h3>
                </div>
                <div className="base-info-container">
                    <h3 className="base-desc">Condition:</h3>
                    <h3>Used</h3>
                </div>
                <div className="base-info-container">
                    <h3>850</h3>
                    <h4>$</h4>
                </div>
            </div>
        </div>
    )
}
export default PhotoTitleComponent