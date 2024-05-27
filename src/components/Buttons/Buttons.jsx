import React from "react";

function Buttons({setIsRunning, setTime}) {

  function startTimer() {
    setIsRunning(true);
  }
  
  function pauseTimer() {
    setIsRunning(false);
  }
  
  function resetTimer() {
    setTime({
      seconds: 0,
      minutes: 30,
    });
    setIsRunning(false);
  }

    return (
    
        <div >
          <button onClick={startTimer} className="startBtn">Start</button>
          <button onClick={pauseTimer} className="startBtn">Pause</button>
          <button onClick={resetTimer} className="startBtn">Restart</button>
        </div>
      
    )
  }
  
  export default Buttons;
  