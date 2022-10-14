import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Hooks/useTelegram";
import Header from "./Components/Header/Header";
import Button from './Components/Button/Button';
import {Route, Routes} from 'react-router-dom'

import ProductList from "./Components/ProductList/ProductList";
import Form from "./Components/Form/Form";


function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
        </div>
    );
}

export default App;