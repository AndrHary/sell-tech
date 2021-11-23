function SingleCategory(props) {
    return (
          <div className="single-category-container" id={props.phone.id}>
              <a href="/">
                  <div className="single-category-photo">
                      {props.phone.photo}
                  </div>
                  <h4>{props.phone.name}</h4>
              </a>
          </div>
    )
}
export default SingleCategory