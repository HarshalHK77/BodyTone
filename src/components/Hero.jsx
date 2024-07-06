import React from "react";
import "../css/Hero.css"
function Hero() {
    return ( 
        <>
            <div className="empty"></div>
            <div className="heroSection">
            <div className="hero">
                <div className="heroleft">
                    <p>Find our energy</p>
                    <h1>Make your Body</h1>
                    <h1>Fit & Perfect</h1>
                    <button>Our Classes</button>
                </div>
                <div className="heroright">
                    <p>Share</p>
                    <span></span>
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-facebook-fill"></i>
                </div>
            </div>
            </div>
            
        </>
     );
}

export default Hero;