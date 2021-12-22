import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent"
import CardComponent from "../AllItems/CardComponent"
import {BASE_URL} from "../../constants"
function AllItemsByCategoryComponent() {
    let params = useParams()
    let [isLoading, setIsLoading] = useState(true)
    let [items, setItems] = useState([])
    useEffect(() => {
        fetch(`${BASE_URL}/items/all-items/category/${params.category}`)
            .then(res => res.json())
            .then(resJson => {
                setItems(resJson)
                setIsLoading(false)
            })
    })
    return (
        <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            <section id="all-items">
                {isLoading ? <LoadingSpinnerComponent/> : null}
                <div className="items-filter-container">
                    <div className="items">
                        {items ? <h2>{items.length} offers for you!</h2> : null}
                        <div className="card-container">
                            {items
                                ? items.map((x) => <CardComponent item={x} />)
                                : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AllItemsByCategoryComponent