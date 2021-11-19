function SingleCategory(props) {
    return (
          <div className="single-category-container">
              <a href="/">
                  <div className="single-category-photo">
                      <img src={props.phone.photo} alt={`${props.phone.name} category!`}></img>
                  </div>
                  <h4>{props.phone.name}</h4>
              </a>
          </div>
    )
}
export default SingleCategory