import BannerComponent from './BannerComponent.js'
import CategoryComponent from './CategoryComponent.js'
function WelcomeComponent() {
    return (
        <div className="welcome-container">
        <BannerComponent></BannerComponent>
        <CategoryComponent></CategoryComponent>
        </div>
    )
}
export default WelcomeComponent