
import './all-items-style.css'
import CardComponent from './CardComponent'
import {useEffect, useState} from 'react'
import LoadingSpinnerComponent from '../LoadingSpinnerComponent/LoadingSpinnerComponent'
import {BASE_URL} from '../../constants'
function AllItems() {
    let [items, setItems] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(`${BASE_URL}/items/all-items`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setIsLoading(false)
        }, [])
    })
    return (
        <>
        {isLoading ? <LoadingSpinnerComponent/> : null}
        <div className="circle"></div>
        <div className="second-circle"></div>
        <section id="all-items">
            <div className="items-filter-container">
                <div className="items">
                    {items ? <h2>{items.length} offers for you!</h2> : null}
                    <div className="card-container">
                        {items 
                        ? items.map((x) => <CardComponent item={x}/>) 
                        : null }
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default AllItems