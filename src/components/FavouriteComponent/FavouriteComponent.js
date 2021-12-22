import LoadingSpinnerComponent from "../LoadingSpinnerComponent/LoadingSpinnerComponent"
import CardComponent from "../AllItems/CardComponent"
import { useContext, useEffect, useState } from "react"
import { authContext } from "../../contexts/authContext"
import { useParams } from 'react-router-dom'
function FavouriteComponent() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        fetch(`http://localhost:3050/items/${params.username}/favourite`)
            .then(res => res.json())
            .then(resJson => {
                console.log(resJson)
                setItems(resJson.watchedItems)
            })
        setIsLoading(false)
    }, [])
    return (
         <>
            <div className="circle"></div>
            <div className="second-circle"></div>
            <section id="all-items">
                {isLoading ? <LoadingSpinnerComponent /> : null}
                <div className="items-filter-container">
                    <div className="items">
                        {items ? <h2>{items.length} offers for you!</h2> : null}
                        <div className="card-container">
                            {items !== []
                                ? items.map((x) => <CardComponent item={x} />)
                                : null}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default FavouriteComponent