import React from "react";
import "../css/FeaturedClasses.css"
function Featured() {
    return ( 
        <div className="featured-container">
            <div className="featured-up">
                <h3>OUR FEATURED CLASS</h3>
                <h2>We Are Offering Best Flexible Classes</h2>
            </div>
            <div className="featured-down">
                <div className="down-up">
                    <div className="conatiner-card" id="container-card">
                    <div className="classesCard" id="classesCard1">
                        <h2>Power</h2>
                        <p>Wednesday: 9:00am-10:00am</p>
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard2">
                        <h2>Calesthemics</h2>
                        <p>Friday: 10:00am-11:00am</p>
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard3">
                        <h2>Hypertrophy</h2>
                        <p>Saturday: 1:00pm-2:00pm</p>
                    </div>
                    </div>
                </div>
                <div className="down-up">
                    <div className="container-card">
                    <div className="classesCard" id="classesCard4">
                        <h2>Boxing</h2>
                        <p>Sunday: 6:00pm-7:00pm</p>
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard5">
                        <h2>Aesthetic </h2>
                        <p>Monday: 4:00am-5:00am</p>
                    </div>
                    </div>
                    <div className="conatiner-card" id="container-card">
                    <div className="classesCard" id="classesCard6">
                        <h2>Workout</h2>
                        <p>Tuesday: 3:00am-4:00am</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Featured;