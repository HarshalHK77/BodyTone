import React from "react";
import "../css/Testimonials.css";
import testimg from "../images/testimonialimg.png";
import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import test4 from "../images/test4.png";
import test5 from "../images/test5.png";
function Testimonial() {
    return ( 
        <div className="testimonial-container">
            <div className="testimonial-heading">
                <h1>Testimonials</h1>
            </div>
            <div className="testimonial-review">
                <div className="testimonial-review-left"></div>
                <div className="testimonial-review-right">
                    <div className="imgdiv">
                        <img src={testimg} alt="" />
                    </div>
                    <p>“I've been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”</p>
                    <h1>Harry Potter</h1>
                    <p>CEO of Hogwarts</p>
                </div>
            </div>
            <div className="testimonails-company">
                <img src={test1} alt="" />
                <img src={test2} alt="" />
                <img src={test3} alt="" />
                <img src={test4} alt="" />
                <img src={test5} alt="" />
            </div>
        </div>
     );
}

export default Testimonial;