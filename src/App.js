import './App.css';
import {useEffect} from 'react';
import { useTelegram } from "./Hooks/useTelegram";
import Button from './Components/Button/Button';


function App() {

  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
