import './category-style.css'
import SingleCategory from './SingleCategoryComponent'
function CategoryComponent() {
    let categories = [{name: 'Phones', photo: <i className="fas fa-mobile-alt ico"></i>, categoryParam: 'phone', id: 'second'},
    {name: 'Computers', photo: <i className="fas fa-laptop ico"></i>, categoryParam: 'computer', id: 'third'},
    {name: 'Parts', photo: <i className="ico fas fa-microchip"></i>, categoryParam: 'parts', id: 'fourth'},
    {name: 'Accessories', photo: <i className="ico fas fa-headphones"></i>, categoryParam: 'accessory', id: 'fifth'}]
    return (
        <footer className="category-container">
          {categories.map((x, i) => <SingleCategory phone={x} key={x.id} ></SingleCategory>)}
        </footer>
    )
}
export default CategoryComponent