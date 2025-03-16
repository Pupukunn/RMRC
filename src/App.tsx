import { useState } from "react";

import "./App.css";
import logoImage from "./media/logo.png";
import joy1 from "./media/joy.png";
function App() {
  const [] = useState(0);

  return (
    <>
      <div className="all">
        <nav>
          <div className="Name">RMRC</div>
          <div className="logo">
            <img src={logoImage}></img>
          </div>
        </nav>
        <div className="container">
          <div className="Cam1 glass">
            <div className="textcam">CAM 1</div>
          </div>
          <div className="Cam2 glass">
            <div className="textcam">CAM 2</div>
          </div>
          <div className="CamAI glass">
            <div className="textcam">CAM AI</div>
          </div>
          <div className="StatusBar">
            <div className="speedstatus glass">
              <div className="leftrpm">Speed L : 999 rpm</div>
              <div className="rightrpm">Speed R : 999 rpm</div>
            </div>

            <div className="flipperstatus glass">
              <div className="leftflipper">Flipper L : 999</div>
              <div className="rightflipper">Flipper R : 999</div>
            </div>
            <div className="Joystatus glass">
              <img src={joy1}></img>
              <div className="statustext">Joy Status : Connecting</div>
            </div>
            <div className="joybutton">
              <button >Start </button>
            </div>
          </div>
        </div>
        <div className="detectbutton">
          <button>Detecting : ON </button>
        </div>
      </div>
    </>
  );
}

export default App;
