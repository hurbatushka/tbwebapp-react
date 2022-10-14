import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Hooks/useTelegram";
import Header from "./Components/Header/Header";
import Button from './Components/Button/Button';


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
}

export default App;