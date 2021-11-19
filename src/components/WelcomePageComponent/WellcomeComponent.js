import BannerComponent from './BannerComponent.js'
import CategoryComponent from './CategoryComponent.js'
function WelcomeComponent() {
    return (
        <div class="welcome-container">
        <BannerComponent></BannerComponent>
        <CategoryComponent></CategoryComponent>
        </div>
    )
}
export default WelcomeComponent