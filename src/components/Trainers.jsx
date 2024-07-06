import React from "react";
import "../css/Trainers.css"
import trainer1 from "../images/trainer1.png";
import trainer2 from "../images/trainer2.png";
import trainer3 from "../images/trainer3.png";
import scratch from "../images/scatchCardBackground.png";

function Trainers() {
    return ( 
        <div className="trainer-container">
            <div className="trainer-heading">
                <p>GYM TRAINERS</p>
                <h1>Team Of Expert Coaches</h1>
                <p>Expert team of coaches helps you succeed in any goal,
personalized guidance and motivation provided!</p>
            </div>
            <div className="trainer-card-container">
                <div className="trainer-card">
                    <div className="image">
                        <img src={trainer1} alt="" className="trainerImage"/>
                    </div>
                    <h1>Ron Weasley</h1>
                    <p>Yoga Trainer</p>
                    <div className="socio-links">
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-facebook-fill"></i>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="trainer-card">
                    <div className="image">
                        <img src={trainer2} alt="" className="trainerImage"/>

                    </div>
                    <h1>Harry Potter</h1>
                    <p>Yoga Trainer</p>
                    <div className="socio-links">
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-facebook-fill"></i>
                    </div>
                    <div className="line"></div>

                </div>
                <div className="trainer-card">
                    <div className="image">
                        <img src={trainer3} alt="" className="trainerImage"/>

                    </div>
                    <h1>Hermione Granger</h1>
                    <p>Yoga Trainer</p>
                    <div className="socio-links">
                    <i class="ri-linkedin-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-facebook-fill"></i>
                    </div>
                    <div className="line"></div>

                </div>
            </div>
        </div>
     );
}

export default Trainers;