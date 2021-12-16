import { NavLink } from "react-router-dom"

function SingleCategory(props) {
    return (
          <div className="single-category-container" id={props.phone.id}>
              <NavLink className="category-link" to={`/items/all-items/category/${props.phone.categoryParam}`}>
                  <div className="single-category-photo">
                      {props.phone.photo}
                  </div>
                  <h4>{props.phone.name}</h4>
              </NavLink>
          </div>
    )
}
export default SingleCategory