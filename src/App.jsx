import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';

function App() {
  //controlar se o que esta rodando é o break ou o pomodoro
  const [breakLength, setBreakLength] = useState(5);
  const [nextPeriod, setNextPeriod] = useState(breakLength);
  const [pomoLenght, setPomoLength] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(pomoLenght * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsRunning(false);

        if (nextPeriod === breakLength) {
          //avisar que acabou o tempo e irá começar a outra etapa (break ou pomodoro)
          alert('Break start now!');
          //setar o secondsLeft para a etapa definida
          setSecondsLeft(breakLength * 60);
          setIsRunning(true);
          setNextPeriod(pomoLenght);
        } else if (nextPeriod === pomoLenght) {
          alert('Break ended! Pomodoro is will be restarted now.');
          // se for o pomodoro, não começar automático
          setIsRunning(false);
          setSecondsLeft(pomoLenght * 60);
          setNextPeriod(breakLength);
        }
      }

      return () => clearInterval(interval);
    }
  }, [isRunning, secondsLeft, pomoLenght, breakLength, nextPeriod]);

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)}`;
  };

  return (
    <div>
      <h1>{formatTimeLeft(secondsLeft)}</h1>
      <button
        onClick={() => {
          setIsRunning(true);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setSecondsLeft(pomoLenght * 60);
        }}
      >
        Restart
      </button>
      {/* <Buttons setTime={setTime} setIsRunning={setIsRunning}/> */}
    </div>
  );
}

export default App;
