import './OptionsSession.css';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function OptionsSession({ setBreakLength, setPomoLength, pomoLenght, breakLength, setSecondsLeft, setNextPeriod }) {
  function setSessionTime(event) {
    const newTimeSession = event.target.value;

    if (parseInt(newTimeSession) >= 5 && parseInt(newTimeSession) <= 60) {
      setPomoLength(newTimeSession);
      setSecondsLeft(newTimeSession * 60);
      console.log(newTimeSession);
    } else {
      alert('Minimum value: 5 \nMaximum value: 60');
    }
  }

  function setBreakTime(event) {
    const newTimeBreak = event.target.value;

    if (parseInt(newTimeBreak) >= 1 && parseInt(newTimeBreak) <= 10) {
      setBreakLength(newTimeBreak);
      setNextPeriod(newTimeBreak);
    } else {
      alert('Minimum value: 1 \nMaximum value: 10');
    }
  }

  function increaseSessionTime() {
    setPomoLength((prevState) => {
      return prevState + 1;
    });

    setSecondsLeft((prevState) => {
      return prevState + 1 * 60;
    });
  }

  function decreaseSessionTime() {
    setPomoLength((prevState) => {
      return prevState - 1;
    });

    setSecondsLeft((prevState) => {
      return prevState - 1 * 60;
    });
  }

  function increaseBreakTime() {
    setBreakLength((prevState) => {
      return prevState + 1;
    });
  }

  function decreaseBreakTime() {
    setBreakLength((prevState) => {
      return prevState - 1;
    });
  }

  return (
    <div id="optionsSession">
      <div id="sessionTime">
        <span id="optionTitle">Session</span>
        <button style={{ backgroundcolor: 'white' }} className="arrowBtns" onClick={increaseSessionTime}>
          <KeyboardDoubleArrowUpIcon />
        </button>
        <input onChange={setSessionTime} value={pomoLenght} id="input" type="number" min="5" max="60" />
        <button className="arrowBtns" onClick={decreaseSessionTime}>
          <KeyboardDoubleArrowDownIcon />
        </button>
      </div>
      <div id="breakTime">
        <span id="optionTitle">Break</span>
        <button className="arrowBtns" onClick={increaseBreakTime}>
          <KeyboardDoubleArrowUpIcon />
        </button>
        <input onChange={setBreakTime} value={breakLength} id="input" type="number" min="1" max="10" />
        <button className="arrowBtns" onClick={decreaseBreakTime}>
          <KeyboardDoubleArrowDownIcon />
        </button>
      </div>
    </div>
  );
}

export default OptionsSession;
