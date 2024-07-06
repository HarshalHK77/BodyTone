import React from "react";
import "../css/Chooseus.css";
import chooseimg from "../images/chooseusimg.png"
function Chooseus() {
    return ( 
        <div className="choose-container">
            <div className="chooseheading">
                <h1>We Are Always Providing Best Fitness Service For You</h1>
                <button>Join with us</button>
            </div>
            <div className="choose-content">
                <div className="choose-content-left">
                    <img src={chooseimg} alt="" />
                </div>
                <div className="choose-content-right">
                    <p>WHY CHOOSE US</p>
                    <h1>We Can Give A Shape Of Your Body Here!</h1>
                    <p>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                    <div className="small-card-container">
                        <div className="small-card">
                            <i class="ri-timer-line"></i>
                            <h3>Free Fitness <br /> Training</h3>
                        </div>
                        <div className="small-card">
                            <i class="ri-timer-line"></i>
                            <h3>Modern Gym  <br /> Equipments</h3>
                        </div>
                        <div className="small-card">
                            <i class="ri-timer-line"></i>
                            <h3>Gym Bag  <br />Equipments</h3>
                        </div>
                        <div className="small-card">
                            <i class="ri-timer-line"></i>
                            <h3>Fresh Bottle  <br />Watter</h3>
                        </div>
                    </div>
                    <button>Our Classes</button>
                </div>
            </div>
        </div>
     );
}

export default Chooseus;