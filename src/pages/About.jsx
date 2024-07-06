import React from 'react'
import "../css/About.css";

import circle from "../images/semicircle.png"
import text from "../images/running_text.png"
import girl from "../images/running_girl.png";

// Above container image
import img1 from "../images/banner.jpg";
import transition from '../transition';


function About()
{
    return(
        <>
        <div className="empty"></div>
            {/* Above Heading container */}
            <div className="above-container">
                    <img src={img1} alt="" className='banner' />
                    <h1 className='banner-text'>About Us</h1>
            </div>


           <div className="container about-main-container">
                {/* Second container with running girl and about us */}
                    <div className="second-container">
                        {/* left container in second container */}
                        <div className="left-section">

                            <div className="scratch-container">
                                <p id='section-title'>WHO WE ARE</p>
                            </div>
                        
                            <h2 className='tagline'>We Will Give You Strength And Health</h2>
                            <p id='left-section-para'>At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
                                
                                <div className="button-container">
                                    <button id='right-button'>CONTACT US</button>
                                </div>
                          
                        </div>
                        {/* right container in second container */}
                        <div className="right-section">
                                <div className="semicircle-container">
                                <img src={text} alt="" className="text-image" />
                                    <div className='semibox'>
                                    <img src={circle} alt="" className='semicircle-image' />
                                    </div>
                                <img src={girl} alt="" className='girl-image' />
                                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default transition(About);