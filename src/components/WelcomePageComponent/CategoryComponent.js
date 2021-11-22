import './category-style.css'
import SingleCategory from './SingleCategoryComponent'
function CategoryComponent() {
    let categories = [{name: 'Phones', photo: './images/phone-category.jpg', id: 2},
    {name: 'Computers', photo: './images/computer-cat.jpg', id: 3},
    {name: 'Parts', photo: './images/parts-cat.jpg', id: 4},
    {name: 'Accessories', photo: './images/accessory-cat.jpg', id: 5},
    {name: 'Services', photo: './images/services-cat.jpg', id: 6}]
    return (
        <footer className="category-container">
          {categories.map((x, i) => <SingleCategory phone={x} key={x.id} ></SingleCategory>)}
        </footer>
    )
}
export default CategoryComponent