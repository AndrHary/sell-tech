import {useState} from 'react'
import './all-items-style.css'
function AllItems() {
    let [show, setShow] = useState(false)
    let showFilterEvent = () => {
       show === false ? setShow(true) : setShow(false)
    }
    return (
        <section id="all-items">
                   {show === true ? <form className="filter-container"></form> : null}
                   <button onClick={showFilterEvent}>Filters</button>
            <div className="items-filter-container">
                <div className="items">
                    <h2>8989099 Offers</h2>
                    <div className="card-container">
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
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/samsungS.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
    
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>

                            </div>
                        </div>
                        <div className="card">
                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                                <img src="./images/parts-cat.jpg" alt="Cat"></img>
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="card">


                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>

                        </div>
                        <div className="card">


                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>

                        </div>
                        <div className="card">


                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>
                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="card">


                            <div className="item-image-container">
                                <img src="/images/iphoneXr.jpg" alt="item for sale" />
                            </div>
                            <div className="info">
                                <div className="title-price">
                                    <h4 className="title">Title</h4>
                                    <h4 className="price">850 lv</h4>
                                </div>
                                <div className="small-description">


                                </div>
                                <div className="small-info">
                                    <p>c. Adress Bulgaria</p>
                                    <p>Condition: Brand New</p>

                                    <button className="add-favourite"><i className="fas fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllItems