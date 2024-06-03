import { useEffect, useState } from 'react';
import './App.css';
import ActionsButtons from './components/ActionsButtons/ActionsButtons';
import OptionsSessions from './components/OptionsSession/OptionsSession';
import useSound from 'use-sound';
import alarm from './alarme.mp3';

function App() {
  //controlar se o que esta rodando é o break ou o pomodoro
  const [breakLength, setBreakLength] = useState(5);
  const [nextPeriod, setNextPeriod] = useState(breakLength);
  const [pomoLenght, setPomoLength] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(pomoLenght * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [play] = useSound(alarm);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsRunning(false);

        play();

        if (nextPeriod === breakLength) {
          //avisar que acabou o tempo e irá começar a outra etapa (break ou pomodoro)

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
  }, [isRunning, secondsLeft, pomoLenght, breakLength, nextPeriod, play]);

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)} : ${seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)}`;
  };

  return (
    <div>
      <h2>Ready?</h2>

      <h1>{formatTimeLeft(secondsLeft)}</h1>

      <ActionsButtons setSecondsLeft={setSecondsLeft} setIsRunning={setIsRunning} pomoLenght={pomoLenght} />

      <OptionsSessions
        setBreakLength={setBreakLength}
        setPomoLength={setPomoLength}
        breakLength={breakLength}
        pomoLenght={pomoLenght}
        setSecondsLeft={setSecondsLeft}
        setNextPeriod={setNextPeriod}
      />
    </div>
  );
}

export default App;
