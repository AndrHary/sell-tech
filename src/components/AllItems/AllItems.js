
import './all-items-style.css'
import CardComponent from './CardComponent'
import {useEffect, useState} from 'react'
function AllItems() {
    let [items, setItems] = useState()
    useEffect(() => {
        fetch('http://localhost:3050/items/all-items')
        .then(res => res.json())
        .then(data => {
            setItems(data)
        }, [])
    })
    return (
        <section id="all-items">
            <div className="items-filter-container">
                <div className="items">
                    {items ? <h2>{items.length}</h2> : null}
                    <div className="card-container">
                        {items 
                        ? items.map((x) => <CardComponent item={x}/>) 
                        : null }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AllItems