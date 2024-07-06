
import React, { useState } from 'react';
import "../css/Gallery.css";
import "../css/empty.css";
import transition from '../transition';
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpeg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpg";
import gallery6 from "../images/gallery6.jpg";
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jpg";
import gallery9 from "../images/gallery9.jpg";
import gallery10 from "../images/gallery10.jpg";
import galler11 from "../images/gallery11.jpeg";
import gallery12 from "../images/gallery12.jpeg";
// Above container image
import img1 from "../images/banner.jpg";

function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);

    const imagesPage1 = [gallery1, gallery2, gallery3, gallery4, gallery5,gallery6, gallery7, gallery8];
    const imagesPage2 = [gallery9,gallery10, galler11, gallery12];

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="empty"></div>
            {/* Above Heading container */}
            <div className="above-container">
                    <img src={img1} alt="" className='banner' />
                    <h1 className='banner-text'>Gallery</h1>
            </div>


            {/* Gallery pic container */}
            <div className="pic-container">
                {currentPage === 1 &&
                    imagesPage1.map((image, index) => (
                        <div className="img-div" key={index}>
                            <img src={image} alt={`gallery-${index + 1}`} id='img-pic' />
                        </div>
                    ))}
                {currentPage === 2 &&
                    imagesPage2.map((image, index) => (
                        <div className="img-div" key={index}>
                            <img src={image} alt={`gallery-${index + 8}`} id='img-pic' />
                        </div>
                    ))}
            </div>

            <div className="srcollbar">
                <button id='number-1' onClick={() => handlePageChange(1)}>1</button>
                <button id='number-2' onClick={() => handlePageChange(2)}>2</button>
                <button id='next' onClick={() => handlePageChange(currentPage === 1 ? 2 : 1)}>Next</button>
            </div>
        </>
    );
}
export default transition(Gallery);