import React from "react";
import './app.css'

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz from "./Components/Quiz/Quiz";
import Currency from "./Components/Currency/Currency";
import Cards from "./Components/Cards/Cards";

const App = () => {
    return (
        
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/rentanimal" element={<Main/>}/>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/cur" element={<Currency/>}/>
        <Route path="/place" element={<Cards/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>        
    )
}

export default App;