import React from 'react';
import "../css/Pricing.css"; 
import "../css/empty.css";
import card1 from "../images/card1.jpeg"
import card2 from "../images/card2.jpeg"
import card3 from "../images/card3.jpeg"
import days_off from "../images/no_days_off.png"
// Above container image
import img1 from "../images/banner.jpg";
import transition from '../transition';

const Pricing = () => {
  const title = 'Beginners';
//   const price = '$ 49 p/m';
  const details = ['Free Hand','Gym Fitness', 'Weight Loss', 'Personal Trainer', 'Cycling'];

  return (

        <>
            <div className="empty"></div>
            {/* Above Heading container */}
            <div className="above-container">
                    <img src={img1} alt="" className='banner' />
                    <h1 className='banner-text'>Pricing</h1>
            </div>

            {/* main container  */}
            <div className="text-container">
              
              <p id='title'>PRICING CHART</p> 
              <h1 id='title-h1-tag'>Exclusive Pricing Plan</h1>
              <p id='title-para'>Gymat an unknown printer took a galley of type and scrambled <br />
                                  make a type specimen book.</p>
              {/* <div className="no-days-off">
                    <img src={days_off} alt="" />
              </div> */}
          
            </div><div className="card-container">

        {/* Card 1 */}
        <div className="card">
          <img src={card1} alt="Placeholder" />
          <div className="card-content">
            <div className="price-container">
              <h3>{title}</h3>
              <p>$ <span>39</span> p/m</p>
            </div>

            <ul>
              <li>{details[0]}</li> <br />
              <li>{details[1]}</li> <br />
              <li>{details[2]}</li> <br />
              <li>{details[3]}</li> <br />
              <li>{details[4]}</li> <br />
            </ul>
            <button>PURCHASE NOW →</button>
          </div>
        </div>

        {/* Card 2  */}
        <div className="card">
          <img src={card2} alt="Placeholder" />
          <div className="card-content">
            <div className="price-container">
              <h3>{title}</h3>
              <p>$ <span>65</span> p/m </p>
            </div>
            <ul>
              <li>{details[0]}</li> <br />
              <li>{details[1]}</li> <br />
              <li>{details[2]}</li> <br />
              <li>{details[3]}</li> <br />
              <li>{details[4]}</li> <br />
            </ul>
            <button>PURCHASE NOW →</button>
          </div>
        </div>

        {/* Card 3  */}
        <div className="card">
          <img src={card3} alt="Placeholder" />
          <div className="card-content">
            <div className="price-container">
              <h3>{title}</h3>
              <p>$ <span>100</span> p/m</p>
            </div>
            <ul>
              <li>{details[0]}</li> <br />
              <li>{details[1]}</li> <br />
              <li>{details[2]}</li> <br />
              <li>{details[3]}</li> <br />
              <li>{details[4]}</li> <br />
            </ul>
            <button>PURCHASE NOW →</button>
          </div>
        </div>
      </div>
      </>
  );
};

export default transition(Pricing);
