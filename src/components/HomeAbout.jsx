import React from "react";
import "../css/HomeAbout.css";
function HomeAbout() {
    return ( 
        <div className="home-about-section">
            <div className="about-card-container">
                <div className="about-card">
                    <i class="ri-timer-line"></i>
                    <h2>Progression</h2>
                    <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                </div>
                <div className="about-card">
                    <i class="ri-timer-line"></i>
                    <h2>WORKOUT</h2>
                    <p>With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.</p>
                </div>
                <div className="about-card">
                    <i class="ri-timer-line"></i>
                    <h2>NUTRITIONS</h2>
                    <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
                </div>
            </div>
        </div>
     );
}

export default HomeAbout;