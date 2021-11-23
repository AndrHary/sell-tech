import { NavLink } from "react-router-dom";

function AllItems (){
   return (
       <section id="all-items">
       <h2>8989099 Offers</h2>
       <div className="items">
           <div className="card">
               <div className="Item-image-container">
                   <img src="https://www.bing.com/images/search?view=detailV2&ccid=lViv%2fApT&id=0FA4C6F615035215868E78B4C7CBD61390C72E75&thid=OIP.lViv_ApTjk_zU3s5DrV0sAHaHa&mediaurl=https%3a%2f%2fis2-ssl.mzstatic.com%2fimage%2fthumb%2fPurple123%2fv4%2f77%2fd0%2f3a%2f77d03a39-a605-cc15-d880-225ddd1aca5e%2fsource%2f512x512bb.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9558affc0a538e4ff3537b390eb574b0%3frik%3ddS7HkBPWy8e0eA%26pid%3dImgRaw%26r%3d0&exph=512&expw=512&q=abv&simid=608013691058264149&FORM=IRPRST&ck=BF930190FD831666C50FA2018B7A4C8A&selectedIndex=2" alt="Item"></img>
               </div>
               <div className="info">
                   <h4 className="title">Title</h4>
                   <p className="small-description">lorem lorem lorem lorem lorem loremmdmld smmooedv</p>
                   <div className="small-info">
                       <p>c. Adress Bulgaria</p>
                       <NavLink to="tel:+359889152115">+359889152115</NavLink>
                       <button className="add-favourite"><i className="fas fa-heart"></i></button>
                   </div>
               </div>
           </div>
       </div>
       <div className="items">
           <div className="card">
               <div className="Item-image-container">
                   <img src="https://www.bing.com/images/search?view=detailV2&ccid=lViv%2fApT&id=0FA4C6F615035215868E78B4C7CBD61390C72E75&thid=OIP.lViv_ApTjk_zU3s5DrV0sAHaHa&mediaurl=https%3a%2f%2fis2-ssl.mzstatic.com%2fimage%2fthumb%2fPurple123%2fv4%2f77%2fd0%2f3a%2f77d03a39-a605-cc15-d880-225ddd1aca5e%2fsource%2f512x512bb.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9558affc0a538e4ff3537b390eb574b0%3frik%3ddS7HkBPWy8e0eA%26pid%3dImgRaw%26r%3d0&exph=512&expw=512&q=abv&simid=608013691058264149&FORM=IRPRST&ck=BF930190FD831666C50FA2018B7A4C8A&selectedIndex=2" alt="Item"></img>
               </div>
               <div className="info">
                   <h4 className="title">Title</h4>
                   <p className="small-description">lorem lorem lorem lorem lorem loremmdmld smmooedv</p>
                   <div className="small-info">
                       <p>c. Adress Bulgaria</p>
                       <NavLink to="tel:+359889152115">+359889152115</NavLink>
                       <button className="add-favourite"><i className="fas fa-heart"></i></button>
                   </div>
               </div>
           </div>
       </div>
       <div className="items">
           <div className="card">
               <div className="Item-image-container">
                   <img src="https://www.bing.com/images/search?view=detailV2&ccid=lViv%2fApT&id=0FA4C6F615035215868E78B4C7CBD61390C72E75&thid=OIP.lViv_ApTjk_zU3s5DrV0sAHaHa&mediaurl=https%3a%2f%2fis2-ssl.mzstatic.com%2fimage%2fthumb%2fPurple123%2fv4%2f77%2fd0%2f3a%2f77d03a39-a605-cc15-d880-225ddd1aca5e%2fsource%2f512x512bb.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9558affc0a538e4ff3537b390eb574b0%3frik%3ddS7HkBPWy8e0eA%26pid%3dImgRaw%26r%3d0&exph=512&expw=512&q=abv&simid=608013691058264149&FORM=IRPRST&ck=BF930190FD831666C50FA2018B7A4C8A&selectedIndex=2" alt="Item"></img>
               </div>
               <div className="info">
                   <h4 className="title">Title</h4>
                   <p className="small-description">lorem lorem lorem lorem lorem loremmdmld smmooedv</p>
                   <div className="small-info">
                       <p>c. Adress Bulgaria</p>
                       <NavLink to="tel:+359889152115">+359889152115</NavLink>
                       <button className="add-favourite"><i className="fas fa-heart"></i></button>
                   </div>
               </div>
           </div>
       </div>
       </section>
   )
}
export default AllItems