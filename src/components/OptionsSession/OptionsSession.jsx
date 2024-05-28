import './OptionsSession.css';

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
      setSecondsLeft(newTimeBreak * 60);
      // pensar amanhã linha 21 e 23
      setNextPeriod(newTimeBreak);
    } else {
      alert('Minimum value: 1 \nMaximum value: 10');
    }
  }

  return (
    <div id="optionsSession">
      <div id="sessionTime">
        <span id="optionTitle">Session</span>
        <input onChange={setSessionTime} value={pomoLenght} id="sessionInput" type="number" min="5" max="60" />
      </div>
      <div id="breakTime">
        <span id="optionTitle">Break</span>
        <input onChange={setBreakTime} value={breakLength} id="breakInput" type="number" min="1" max="10" />
      </div>
    </div>
  );
}

export default OptionsSession;
