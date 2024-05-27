import { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';

function App() {
  const [breakLength, setBreakLength] = useState(5);
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
        //avisar que acabou o tempo e irá começar a outra etapa (break ou pomodoro)
        //controlar se o que esta rodando é o break ou o pomodoro
        //setar o secondsLeft para a etapa definida
        // se for o pomodoro, não começar automático
      }

      return () => clearInterval(interval);
    }
  }, [isRunning, secondsLeft]);

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
