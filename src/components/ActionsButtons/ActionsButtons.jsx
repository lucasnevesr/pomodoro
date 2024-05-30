import './ActionsButtons.css';

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
      <button onClick={startTimer} className="actionBtns">
        Start
      </button>
      <button onClick={pauseTimer} className="actionBtns">
        Pause
      </button>
      <button onClick={resetTimer} className="actionBtns">
        Restart
      </button>
    </div>
  );
}

export default ActionsButtons;
