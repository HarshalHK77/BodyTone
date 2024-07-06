import React, { useState } from 'react';
import "../css/Schedule.css";
import "../css/empty.css";
// Above container image
import img1 from "../images/banner.jpg";
import transition from '../transition';

function Schedule() {
  const schedule = {
    Monday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Chest and Triceps', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Cardio', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Yoga', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Pilates', trainer: 'Jill Smith' },
    ],
    Tuesday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Back and Biceps', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Zumba', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Kickboxing', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Spin', trainer: 'Jill Smith' },
    ],
    Wednesday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Legs and Abs', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Pilates', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Yoga', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Cardio', trainer: 'Jill Smith' },
    ],
    Thursday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Shoulders and Traps', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Spin', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Kickboxing', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Zumba', trainer: 'Jill Smith' },
    ],
    Friday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Chest and Triceps', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Cardio', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Yoga', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Pilates', trainer: 'Jill Smith' },
    ],
    Saturday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Back and Biceps', trainer: 'John Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Zumba', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Kickboxing', trainer: 'Jim Smith' },
      { time: '9:00 AM - 10:00AM', workout: 'Spin', trainer: 'Jill Smith' },
    ],
    Sunday: [
      { time: '6:00 AM - 7:00 AM', workout: 'Running', trainer: 'Jane Doe' },
      { time: '7:00 AM - 8:00 AM', workout: 'Zumba', trainer: 'Jane Doe' },
      { time: '8:00 AM - 9:00 AM', workout: 'Rest Time', trainer: '--' },
      { time: '9:00 AM - 10:00AM', workout: 'Rest TIme', trainer: '--' },
    ],
  };

  const [selectedDay, setSelectedDay] = useState('Monday');

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (

      <>
            <div className="empty"></div>
        {/* Above Heading container */}
      <div className="above-container">
        <img src={img1} alt="" className='banner' />
        <h1 className='banner-text'>Schedule</h1>
      </div>
      
      

    <div className="schedule">

      <div className="day-buttons">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            className={`day-button ${selectedDay === day? 'active' : ''}`}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="schedule-table">
    {schedule[selectedDay].map((item, index) => (
        <div key={index} className='table-row-container'>
            <div className="schedule-row">
                {/* workout cell */}
                <div className="schedule-cell">
                    <div className="schedule-cell-heading">Workout</div>
                   <h3 className='schedule-cell-heading-h2'>{item.workout}</h3> 
                </div>
                {/* time cell */}
                <div className="schedule-cell">
                    <div className="schedule-cell-heading">Time</div>
                   <h3 className='schedule-cell-heading-h2'>{item.time}</h3> 
                </div>
                {/* trainer cell */}
                <div className="schedule-cell">
                    <div className="schedule-cell-heading">Trainer</div>
                    <h3 className='schedule-cell-heading-h2'>{item.trainer}</h3>
                </div>
                {/* join now button cell */}
                <div className="schedule-cell">
                    <button className="join-button">Join Now</button>
                </div>
            </div>
        </div>
    ))}
</div>

    </div>

    </>
  );
}
export default transition(Schedule);