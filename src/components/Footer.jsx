import React from "react";
import "../css/Footer.css";
function Footer() {
    return ( 
        <div className="footer-container">
            <div className="about-footer">
                <h1>BodyTone</h1>
                <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                <div className="footer-links">
                <i class="ri-linkedin-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-youtube-fill"></i>
                </div>
                <p>Privacy Policy | © 2024 Gymate</p>
                <p>Design by RadiusTheme</p>
            </div>
            <div className="footer-classes">
                <h1>Our Classes</h1>
                <p>Fitness Classes</p>
                <p>Aerobics Classes</p>
                <p>Power Yoga</p>
                <p>Yoga Classes</p>
                <p>Yoga Classes</p>
            </div>
            <div className="working-footer">
            <h1>Working Hours</h1>
                <p>Monday - Friday:</p>
                <p>7:00am-21:00pm</p>
                <p>Saturday:</p>
                <p>7:00am-21:00pm</p>
                <p>Sunday - Closed</p>
            </div>
        </div>
     );
}

export default Footer;