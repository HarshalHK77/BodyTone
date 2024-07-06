import React from "react";
import "../css/GalleryHome.css";
function Galleryhome() {
    return ( 
        <div className="gallery-home-container">
            <div className="Gallery-heading">
                <p>GYMAT GALLERY</p>
                <h1>Our Workplace Gallery</h1>
                <p>Our Workplace Gallery features modern office, team collaboration, and fun culture.
Attracts talents and showcases company's work atmosphere.</p>
            </div>
            <div className="gallery-down">
                <div className="down-up">
                    <div className="conatiner-card" id="container-card">
                    <div className="classesCard" id="classesCard1">
                        
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard2">
                        
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard3">
                        
                    </div>
                    </div>
                </div>
                <div className="down-up">
                    <div className="container-card">
                    <div className="classesCard" id="classesCard4">
                        
                    </div>
                    </div>
                    <div className="container-card">
                    <div className="classesCard" id="classesCard5">
                        
                    </div>
                    </div>
                    <div className="conatiner-card" id="container-card">
                    <div className="classesCard" id="classesCard6">
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Galleryhome;