import './category-style.css'
import SingleCategory from './SingleCategoryComponent'
function CategoryComponent() {
    let categories = [{name: 'Phones', photo: <i className="fas fa-mobile-alt ico"></i>, id: 'second'},
    {name: 'Computers', photo: <i className="fas fa-laptop ico"></i>, id: 'third'},
    {name: 'Parts', photo: <i className="ico fas fa-microchip"></i>, id: 'fourth'},
    {name: 'Accessories', photo: <i className="ico fas fa-headphones"></i>, id: 'fifth'}]
    return (
        <footer className="category-container">
          {categories.map((x, i) => <SingleCategory phone={x} key={x.id} ></SingleCategory>)}
        </footer>
    )
}
export default CategoryComponent