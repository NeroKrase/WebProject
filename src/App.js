import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
                <Navbar/>
                <Content/>
                <Footer/>
        </BrowserRouter>
    );
};

export default App;
