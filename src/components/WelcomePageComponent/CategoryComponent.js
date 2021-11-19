import './category-style.css'
import SingleCategory from './SingleCategoryComponent'
function CategoryComponent() {
    let categories = [{name: 'Phones', photo: './images/phone-category.jpg'},
    {name: 'Computers', photo: './images/computer-cat.jpg'},
    {name: 'Parts', photo: './images/parts-cat.jpg'},
    {name: 'Accessories', photo: './images/accessory-cat.jpg'},
    {name: 'Services', photo: './images/services-cat.jpg'}]
    return (
        <div className="category-container">
          {categories.map(x => <SingleCategory phone={x}></SingleCategory>)}
        </div>
    )
}
export default CategoryComponent