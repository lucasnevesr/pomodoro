function ActionsButtons({ setIsRunning, setSecondsLeft, pomoLenght }) {
  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSecondsLeft(pomoLenght * 60);
  }

  return (
    <div>
      <button onClick={startTimer} className="startBtn">
        Start
      </button>
      <button onClick={pauseTimer} className="startBtn">
        Pause
      </button>
      <button onClick={resetTimer} className="startBtn">
        Restart
      </button>
    </div>
  );
}

export default ActionsButtons;
