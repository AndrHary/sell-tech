import './header-style.css'
function HeaderComponent() {
    return (
        <nav className="nav">
            <div className="logo">
                <h3>SellTech</h3>
            </div>
            <div className="search-bar">

                <input type="text" id="search" placeholder="Search..."/>
                <button className ="search-btn"><i className ="fas fa-search icon"></i></button>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#">Sell</a>
                </li>
                <li>
                    <a href="#">My Profile</a>
                </li>
                <li>
                    <a href="#">Offers</a>
                </li>
                <li>
                    <a href="#"><i className="fas fa-heart"></i></a>
                </li>
            </ul>
        </nav>
    )
}
export default HeaderComponent