import transition from "../transition";
import "../css/Classes.css"
function Classess() {
    return ( 
        <div className="classes-container">
            <div className="class-heading">
            <h1>Classes</h1>
            </div>
            <div className="classes-card-container">
                <div className="classes-card" id="classes-card1">
                    <h1>Calesthenics</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div>
                <div className="classes-card" id="classes-card2">
                    <h1>Cycling</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card3">
                    <h1>Boxing</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card4">
                    <h1>Karate</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card5">
                    <h1>Power Lifting</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card6">
                    <h1>Workout</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card7">
                    <h1>Crossfit</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card8">
                    <h1>Running</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div><div className="classes-card" id="classes-card9">
                    <h1>GYM</h1>
                    <div className="line"></div>
                    <p>Dorian Yate</p>
                    <button>Join now</button>
                </div>
            </div>
        </div>
     );
}

export default transition(Classess);