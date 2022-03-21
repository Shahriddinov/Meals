import React from 'react';
import { Footer } from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Router, Routes, Route} from ''

function App(props) {
    return (
        <div>
         <Navbar />
         <Footer/>
        </div>
    );
}

export default App;