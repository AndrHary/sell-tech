function CardComponent() {
    return (
        <div className="card">
            <div className="item-image-container">
                <img src="/images/iphoneXr.jpg" alt="item for sale" />
            </div>
            <div className="info">
                <div className="title-price">
                    <h4 className="title">Apple Iphone Xs 128gb</h4>
                    <h4 className="price">850 lv</h4>
                </div>

                <div className="small-info">
                    <p>c. Adress Bulgaria</p>
                    <p>Condition: Brand New</p>
                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                </div>

            </div>
        </div>
    )
}
export default CardComponent